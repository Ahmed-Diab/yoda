import { Component, OnInit, Input } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { User } from 'src/app/module/user';
import { SocketService } from 'src/app/services/socket.service';
import { HttpService } from 'src/app/services/http.service';
import { MatSnackBar } from '@angular/material';
import { Post } from 'src/app/module/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  frindName:string = '';
  newPost:string = '';
  users:any = [];
  public user:User;
  posts:Post[];
  colSpan = 3;
  rows;
  bigScreen:boolean = true;
  constructor(
    private _services:ServicesService,
    private _socket:SocketService,
    private _httpService:HttpService,
    private _snakBar:MatSnackBar
  ) {
    if (window.innerWidth < 778) {
      this.colSpan = 4;
      this.bigScreen = false;
    }else{
      this.colSpan = 3;
      this.bigScreen = true;

    }
    window.addEventListener('resize', ()=>{
      if (window.innerWidth < 778) {
        this.colSpan = 4;
        this.bigScreen = false;
      }else{
        this.colSpan = 3;
        this.bigScreen = true;

      }
    })
    this.user = JSON.parse(localStorage.getItem('user'))
    this._socket.onJoin(this.user._id)
    this._socket.getNewTextNotifications().subscribe((res:any)=>{
      this._snakBar.open(res, 'undo', {duration:3000})

    })

    this._socket.getError().subscribe((res:string)=>{
      this._snakBar.open(res, 'undo', {duration:5000})
    })
   }

  ngOnInit() {

  }
  findFrind(){
    console.log(this.frindName)

    this._httpService.findUserByUsername(this.frindName ||'00', this.user._id).subscribe((res:any)=>{
      console.log(res)
      if (res.success) {
        var usersArr = res.users;
        this._httpService.getUserById(this.user._id).subscribe((res:any)=>{
          if (res.success) {
            var data = res.user;
            for (const id of data.friends) {
              for (const user of usersArr) {
                if (id == user._id) {
                  user.isFriend = true;
                }
              }
            }
            for (const id of data.holdAcceptFriendRequest) {
              for (const user of usersArr) {
                if (id == user._id) {
                  user.isHold = true;
                }
              }
            }
            for (const id of data.friendRequest) {
              for (const user of usersArr) {
                if (id == user._id) {
                  user.isFriendRequest = true;
                }
              }
            }
            this.users = usersArr;
          }else{
            this._snakBar.open(res.errMSG, 'undo', {duration:3000})

          }
        },(error)=>{
          this._snakBar.open(error.message, 'undo', {duration:5000})
        })
        // this.users = res.users;
      }else{
        this._snakBar.open(res.errMSG, 'undo', {duration:3000})

      }
    },(error)=>{
      this._snakBar.open(error.message, 'undo', {duration:5000})

    })
  }

  addNewPost(user, postBody){
    if (this.newPost == '' || undefined) {
      this._snakBar.open("cant't post empty filed", 'undo', {duration:3000})

      return false;
    }
    let post = {
        userId   :user._id,
        username : user.username,
        userImage: user.image,
        body     : postBody,
    }
    this._socket.onPost(post)
    this.newPost = '';
  }

  addToFrinds(friend){
    this._socket.onSendFrindRequst({
      userId:this.user._id, 
      friendId:friend._id})
      friend.isHold = true;
  }

  acceptFrindRequst(friend){
    this._socket.onAcceptFriendRequest({
      user:{
        username:this.user.username, 
        _id:this.user._id, 
        image:this.user.image}, 
      friend:{
        _id:friend._id, 
        username:friend.username, 
        image:friend.image}
      })
      friend.isFriendRequest = false;
      friend.isFriend = true;
  }

  cansleFriendRequst(friend){
    this._socket.onCanselFriendRequestFromSender({userId:this.user._id, friendId:friend._id})
    friend.isFriend = false;
    friend.isFriendRequest = false;
    friend.isHold = false;
  }


  ignoreFriendRequest(friend){
    this._socket.onIgnoreFriendRequest({
      userId:this.user._id, 
      friendId:friend._id
    })
    friend.isFriendRequest = false;
    friend.isFriend = false;
  }


  unfriendUser(friend){
    this._httpService.unFriendUser(this.user._id, friend._id).subscribe((res:any)=>{
      if (res.success) {
        this._snakBar.open(res.MSG, 'undo', {duration:3000})
        friend.isFriend = false;
        friend.isFriendRequest = false;
        friend.isHold = false;
      }else{
        this._snakBar.open(res.errMSG, 'undo', {duration:3000})
      }
    }, (error)=>{
      this._snakBar.open(error.message, 'undo', {duration:5000})

    })

  }

}
