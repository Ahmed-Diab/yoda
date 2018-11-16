import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { AuthService } from 'src/app/services/auth.service';
import { SocketService } from 'src/app/services/socket.service';
import { User } from 'src/app/module/user';
import { HttpService } from 'src/app/services/http.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('openClose', [
      state('in', style({
        transform: 'translateX(10%)',
        width:'30%'
      })),
      state('out', style({
        transform: 'translateX(165%)',
        width:'0'

      })),
      transition('in => out', [
        animate('.3s')
      ]),
      transition('out => in', [
        animate('0.3s')
      ]),
    ]),
  ]
})
export class NavbarComponent implements OnInit {
  isNotifications     = false;
  isMessages          = false;
  isFriendsRequst     = false;
  user:User;
  url:string          = this._services.url;
  notifictions:any    = [];
  friendsRequsts:any = [];
  notLength:number;
  friendsLength:number;

  constructor(
    private _services:ServicesService,
    private _auth:AuthService,
    private _router:Router,
    private _socket:SocketService,
    private _httpService:HttpService,
    private _snakBar:MatSnackBar
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));

    this._socket.getNewNotification().subscribe((res:any)=>{
      this.notLength+=1;
      this.notifictions.unshift(res)
    })
    this._socket.getLength().subscribe((res:{friendsLength:number, notLength:number})=>{
      this.friendsLength = res.friendsLength;
      this.notLength = res.notLength;
    })
    this._socket.getAllNotification().subscribe((res:any)=>{
      var t = [] = res;
      this.notifictions = t.reverse();
      console.log(t)

    })


    this._socket.getNewFriendsRequset().subscribe((res:any)=>{
      this.friendsRequsts = res;
    })

   }
  ngOnInit() {

  }
  toggleNotifications() {
    this.isNotifications  = !this.isNotifications;
    this.isMessages       = false;
    this.isFriendsRequst  = false;
    if (this.isNotifications) {
      this._socket.onNotifications({id:this.user._id, isRead:true})

    }
    this.notLength = 0;
  }
  toggleFriendsRequst() {
    this.isFriendsRequst  = !this.isFriendsRequst
    this.isNotifications  = false;
    this.isMessages       = false;
    if(this.isFriendsRequst){
      this._socket.onGetFriendRequst(this.user._id)
    }
  }
  toggleMessages() {
    this.isFriendsRequst  = false
    this.isNotifications  = false;
    this.isMessages       = !this.isMessages;
  }
  // close
  close(event){
    this.isNotifications  = false;
    this.isMessages       = false;
    this.isFriendsRequst  = false;
  }

  logout(){
    this._auth.logout();
    this._router.navigate(['/login'])
  }
  acceptFrindRequst(friend){
      for (let i = 0; i < this.friendsRequsts.length; i++) {
        const req = this.friendsRequsts[i];
        if (req._id == friend._id) {
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
          this.friendsRequsts.splice(req, 1)
        }
      }
  }

  ignoreFriendRequest(friend){
    for (let i = 0; i < this.friendsRequsts.length; i++) {
      const req = this.friendsRequsts[i];
      if (req._id == friend._id) {
        this._socket.onIgnoreFriendRequest({
          userId:this.user._id, 
          friendId:friend._id
        })
        this.friendsRequsts.splice(req, 1)
      } 
    }
  }


}
