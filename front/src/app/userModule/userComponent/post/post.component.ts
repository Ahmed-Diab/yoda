import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/module/user';
import { HttpService } from 'src/app/services/http.service';
import { Post } from 'src/app/module/post';
import { MatSnackBar } from '@angular/material';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';
import { Comment } from 'src/app/module/comment';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() user: User;
  posts:any = [];
  url = this._services.url;
  newComment:string;
  constructor(
    private _httpService:HttpService,
    private _snakBar:MatSnackBar,
    private _services:ServicesService,
    private _router:Router,
    private _socket:SocketService,
    private _auth:AuthService

  ) {
    this._socket.getPost().subscribe((post:Post)=>{
      this.posts.unshift(post)
    })
    this._socket.getComment().subscribe((res:any)=>{
      for (const post of this.posts) {
        if (post._id == res.postId) {
          post.comment.push(res)
        }
      }
    })

    this._socket.getReplay().subscribe((res:any)=>{
      for (const post of this.posts) {
        if (post._id == res.postId) {
          for (const comment of post.comment) {
            if (comment._id == res.commentId) {
              comment.replay.push(res)
              console.log('replay',comment)
            }
          }
        }
      }
    })
   }

  ngOnInit() {
    this._httpService.getUserDashbord(this.user._id).subscribe((res:any)=>{
      if (res.success) {
          this.posts = res.posts;
      }else{
        this._snakBar.open(res.errMSG, 'undo', {duration:4000})

      }
    }, (error)=>{
      this._router.navigate(['/error'])
      this._snakBar.open(error.message, 'undo', {duration:3000})
    })
  }

  addComment(postId, username, userId, userImage){
    var commemt = {
      userId:userId,
      username:username,
      userImage:userImage,
      body:this.newComment,
      postId:postId
    }
    this._socket.onComment(commemt)
  }

  seeMoreComment(id){
    console.log(id)
  }
}
