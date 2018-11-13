import { Component, OnInit, Input, Inject } from '@angular/core';
import { User } from 'src/app/module/user';
import { HttpService } from 'src/app/services/http.service';
import { Post } from 'src/app/module/post';
import { MatSnackBar } from '@angular/material';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';
import { Comment } from 'src/app/module/comment';
import { AuthService } from 'src/app/services/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RemoveDialogComponent } from '../remove-dialog/remove-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
export interface DialogData {
  postId: string;
  event: string;
}
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
  newReplay:string
  constructor(
    public dialog: MatDialog,
    private _httpService:HttpService,
    private _snakBar:MatSnackBar,
    private _services:ServicesService,
    private _router:Router,
    private _socket:SocketService,
    private _auth:AuthService

  ) {
// get new post
    this._socket.getPost().subscribe((post:Post)=>{
      this.posts.unshift(post)
    })// get new post

  // get new commment
    this._socket.getComment().subscribe((res:any)=>{
      for (const post of this.posts) {
        if (post._id == res.postId) {
          post.comment.push(res)
        }
      }
    })  // get new commment
  // get new replay
    this._socket.getReplay().subscribe((res:any)=>{
      for (const post of this.posts) {
        if (post._id == res.postId) {
          for (const comment of post.comment) {
            if (comment._id == res.commentId) {
              comment.replay.push(res)
            }
          }
        }
      }
    })// get new replay

   }// constractor

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
  }//on init


  openRemoveDialog(event, obj, type, comment): void {
    switch (type) {
      case 'post':
          const dialogRef = this.dialog.open(RemoveDialogComponent, {
            maxWidth: '250px',
            maxHeight:'250px',
            data: {event: event, postId: obj._id, type:type}
          });
          dialogRef.afterClosed().subscribe(result => {
            if(result != undefined && result.type == 'post'){
              this._httpService.removePost(obj._id).subscribe((res:any)=>{
                if (res.success) {
                  event.target.parentElement.parentElement.classList.add('d-none')
                  this._snakBar.open(res.MSG, 'undo', {duration:3000});
                }else{
                  this._snakBar.open(res.errMSG, 'undo', {duration:3000})
                }
              },(error)=>{
                this._snakBar.open(error.message, 'undo', {duration:3000})
              })
            }
          });
        break;
      case 'comment':
          const commentRef = this.dialog.open(RemoveDialogComponent, {
            maxWidth: '250px',
            maxHeight:'250px',
            data: {event: event, postId: obj.postId, commentId:obj._id, type:type}
          });
          commentRef.afterClosed().subscribe(result => {
            console.log(result)
            if(result != undefined && result.type == 'comment'){
              this._httpService.removeComment(result.postId, result.commentId).subscribe((res:any)=>{
                if (res.success) {
                  event.target.parentElement.parentElement.classList.add('d-none')
                  this._snakBar.open(res.MSG, 'undo', {duration:3000});
                }else{
                  this._snakBar.open(res.errMSG, 'undo', {duration:3000})
                }
              },(error)=>{
                this._snakBar.open(error.message, 'undo', {duration:3000})
              })
            }
          });
        break;
      default:
      const replayRef = this.dialog.open(RemoveDialogComponent, {
        maxWidth: '250px',
        maxHeight:'150px',
        data: {event: event, postId: comment.postId, commentId:comment._id, replayId:obj._id, type:type}
      });
      replayRef.afterClosed().subscribe(result => {
        if(result != undefined && result.type == 'replay'){
          this._httpService.removeReplay(result.postId, result.commentId, result.replayId).subscribe((res:any)=>{
            if (res.success) {
                  event.target.parentElement.parentElement.classList.add('d-none')
              this._snakBar.open(res.MSG, 'undo', {duration:3000});
            }else{
              this._snakBar.open(res.errMSG, 'undo', {duration:3000})
            }
          },(error)=>{
            this._snakBar.open(error.message, 'undo', {duration:3000})
          })
        }
      });
        break;
    }

  }// remove 


openEditPostDailog(post, type, comment, replay){
  switch (type) {
    case 'post':
        const postRef = this.dialog.open(EditDialogComponent, {
          maxWidth: '450px',
          maxHeight:'350px',
          data: {body: post.body, postId: post._id, type:type}
        });
        postRef.afterClosed().subscribe(result => {
          if(result != undefined && result.type == 'post'){
            var o = {
              body:result.body
            }
            this._httpService.editPost(result.postId, o).subscribe((res:any)=>{
              if (res.success) {
                this._snakBar.open(res.MSG, 'undo', {duration:3000});
                post.body = result.body;
              }else{
                this._snakBar.open(res.errMSG, 'undo', {duration:3000})
              }
            },(error)=>{
              this._snakBar.open(error.message, 'undo', {duration:3000})
            })
          }
        });
      break;
    case 'comment':
      const commentRef = this.dialog.open(EditDialogComponent, {
        maxWidth: '450px',
        maxHeight:'350px',
        data: {body: comment.body, postId: comment.postId, type:type, commentId:comment._id}
      });
      commentRef.afterClosed().subscribe(result => {
        if(result != undefined && result.type == 'comment'){
          var o = {
            body:result.body
          }
          this._httpService.editComment(result.postId, result.commentId, o).subscribe((res:any)=>{
            if (res.success) {
              this._snakBar.open(res.MSG, 'undo', {duration:3000});
              comment.body = result.body;
            }else{
              this._snakBar.open(res.errMSG, 'undo', {duration:3000})
            }
          },(error)=>{
            this._snakBar.open(error.message, 'undo', {duration:3000})
          })
        }
      });
    break;
    default:
        const replayRef = this.dialog.open(EditDialogComponent, {
          maxWidth: '450px',
          maxHeight:'350px',
          data: {body: replay.body, postId: comment.postId, type:type, commentId:comment._id, replayId:replay._id}
        });
        replayRef.afterClosed().subscribe(result => {
          if(result != undefined && result.type == 'replay'){
            var o = {
              body:result.body
            }
            this._httpService.editreplay(result.postId, result.commentId, result.replayId, o).subscribe((res:any)=>{
              if (res.success) {
                this._snakBar.open(res.MSG, 'undo', {duration:3000});
                replay.body = result.body;
              }else{
                this._snakBar.open(res.errMSG, 'undo', {duration:3000})
              }
            },(error)=>{
              this._snakBar.open(error.message, 'undo', {duration:3000})
            })
          }
        });
      break;
  }

}
  // add new comment
  addComment(event, postId, username, userId, userImage){
    var body = event.target.firstElementChild.querySelector('textarea').value;
    var commemt = {
      userId:userId,
      username:username,
      userImage:userImage,
      body:body,
      postId:postId
    }
    this._socket.onComment(commemt);
    event.target.firstElementChild.querySelector('textarea').value = '';
  }  // add new comment

  // add new replay
  addReplay(event, commentId, postId, username, userId, userImage){
    var body = event.target.firstElementChild.querySelector('textarea').value;
    console.log(body)
    let replay = {
      postId    :postId,
      commentId :commentId,
      body      :body,
      username  :username,
      userId    :userId,
      userImage :userImage
    }
    this._socket.onReplay(replay)
    event.target.firstElementChild.querySelector('textarea').value = '';
  }  // add new replay

  // see more comment
  seeMoreComment(id){
  } // see more comment
}