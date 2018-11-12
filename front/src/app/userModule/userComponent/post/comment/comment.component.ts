import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/module/comment';
import { User } from 'src/app/module/user';
import { HttpService } from 'src/app/services/http.service';
import { MatSnackBar } from '@angular/material';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comments: Comment[];
  @Input() url:string;
  @Input() user:User;

  newReplay:string;
  constructor(
    private _httpService:HttpService,
    private _snakBar:MatSnackBar,
    private _services:ServicesService,
    private _router:Router,
    private _socket:SocketService
  ) { }

  ngOnInit() {
  }

  addReplay(commentId, postId, username, userId, userImage){
    let replay = {
      postId    :postId,
      commentId :commentId,
      body      :this.newReplay,
      username  :username,
      userId    :userId,
      userImage :userImage
    }
    this._socket.onReplay(replay)
  }

}
