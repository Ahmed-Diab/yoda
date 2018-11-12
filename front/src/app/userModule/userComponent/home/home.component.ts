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
  public user:User;
  posts:Post[];
  constructor(
    private _services:ServicesService,
    private _socket:SocketService,
    private _httpService:HttpService,
    private _snakBar:MatSnackBar
  ) {
    this.user = JSON.parse(localStorage.getItem('user'))
    this._socket.onJoin(this.user._id)
    this._socket.getNotification().subscribe((res:any)=>{
      this._snakBar.open(res.body, 'undo', {duration:3000})

    })
   }

  ngOnInit() {

  }
  findFrind(){
    console.log(this.frindName)
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

}
