import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { HttpService } from 'src/app/services/http.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { RemoveDialogComponent } from '../remove-dialog/remove-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/module/user';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  user: any;
  post: any;

  url = this._services.url;
  constructor(
    private _socket: SocketService,
    private _httpService: HttpService,
    private _snakBar: MatSnackBar,
    public _dialog: MatDialog,
    private _services: ServicesService,
    public _activatedRoute: ActivatedRoute

  ) {
    this.user = JSON.parse(localStorage.getItem('user'));

    // get new post
    this._socket.getPost().subscribe((post: any) => {
      this.post.unshift(post);
    }); // get new post

  // get new commment
    this._socket.getComment().subscribe((res: any) => {
        if (this.post._id === res.postId) {
          this.post.comment.push(res);
        }
    });  // get new commment

  // get new replay
    this._socket.getReplay().subscribe((res: any) => {
        if (this.post._id === res.postId) {
          for (const comment of this.post.comment) {
            if (comment._id === res.commentId) {
              comment.replay.push(res);
            }
          }
        }
    }); // get new replay

    this._activatedRoute.params.subscribe(res => {
      this._httpService.getOnePost(res.id).subscribe((data: any) => {
        this.post = data.post;
      });
    });
   }

  ngOnInit() {

  }

  openRemoveDialog(event, obj, type, comment): void {
    switch (type) {
      case 'post':
          const dialogRef = this._dialog.open(RemoveDialogComponent, {
            maxWidth: '250px',
            maxHeight: '250px',
            data: {event: event, postId: obj._id, type: type}
          });
          dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined && result.type === 'post') {
              this._httpService.removePost(obj._id).subscribe((res: any) => {
                if (res.success) {
                  event.target.parentElement.parentElement.classList.add('d-none');
                  this._snakBar.open(res.MSG, 'undo', {duration: 3000});
                } else {
                  this._snakBar.open(res.errMSG, 'undo', {duration: 3000});
                }
              }, (error) => {
                this._snakBar.open(error.message, 'undo', {duration: 3000});
              });
            }
          });
        break;
      case 'comment':
          const commentRef = this._dialog.open(RemoveDialogComponent, {
            maxWidth: '250px',
            maxHeight: '250px',
            data: {event: event, postId: obj.postId, commentId: obj._id, type: type}
          });
          commentRef.afterClosed().subscribe(result => {
            if (result !== undefined && result.type === 'comment') {
              this._httpService.removeComment(result.postId, result.commentId).subscribe((res: any) => {
                if (res.success) {
                  event.target.parentElement.parentElement.classList.add('d-none');
                  this._snakBar.open(res.MSG, 'undo', {duration: 3000});
                } else {
                  this._snakBar.open(res.errMSG, 'undo', {duration: 3000});
                }
              }, (error) => {
                this._snakBar.open(error.message, 'undo', {duration: 3000});
              });
            }
          });
        break;
      default:
      const replayRef = this._dialog.open(RemoveDialogComponent, {
        maxWidth: '250px',
        maxHeight: '150px',
        data: {event: event, postId: comment.postId, commentId: comment._id, replayId: obj._id, type: type}
      });
      replayRef.afterClosed().subscribe(result => {
        if (result !== undefined && result.type === 'replay') {
          this._httpService.removeReplay(result.postId, result.commentId, result.replayId).subscribe((res: any) => {
            if (res.success) {
                  event.target.parentElement.parentElement.classList.add('d-none');
              this._snakBar.open(res.MSG, 'undo', {duration: 3000});
            } else {
              this._snakBar.open(res.errMSG, 'undo', {duration: 3000});
            }
          }, (error) => {
            this._snakBar.open(error.message, 'undo', {duration: 3000});
          });
        }
      });
        break;
    }

  } // remove

  openEditPostDailog(post, type, comment, replay) {
    switch (type) {
      case 'post':
          const postRef = this._dialog.open(EditDialogComponent, {
            minWidth: '80%',
            maxHeight: '350px',
            data: {body: post.body, postId: post._id, type: type}
          });
          postRef.afterClosed().subscribe(result => {
            if (result !== undefined && result.type === 'post') {
              const o = {
                body: result.body
              };
              this._httpService.editPost(result.postId, o).subscribe((res: any) => {
                if (res.success) {
                  this._snakBar.open(res.MSG, 'undo', {duration: 3000});
                  post.body = result.body;
                } else {
                  this._snakBar.open(res.errMSG, 'undo', {duration: 3000});
                }
              }, (error) => {
                this._snakBar.open(error.message, 'undo', {duration: 3000});
              });
            }
          });
        break;
      case 'comment':
        const commentRef = this._dialog.open(EditDialogComponent, {
          minWidth: '80%',
          maxHeight: '350px',
          data: {body: comment.body, postId: comment.postId, type: type, commentId: comment._id}
        });
        commentRef.afterClosed().subscribe(result => {
          if (result !== undefined && result.type === 'comment') {
            const o = {
              body: result.body
            };
            this._httpService.editComment(result.postId, result.commentId, o).subscribe((res: any) => {
              if (res.success) {
                this._snakBar.open(res.MSG, 'undo', {duration: 3000});
                comment.body = result.body;
              } else {
                this._snakBar.open(res.errMSG, 'undo', {duration: 3000});
              }
            }, (error) => {
              this._snakBar.open(error.message, 'undo', {duration: 3000});
            });
          }
        });
      break;
      default:
          const replayRef = this._dialog.open(EditDialogComponent, {
            minWidth: '80%',
            maxHeight: '350px',
            data: {body: replay.body, postId: comment.postId, type: type, commentId: comment._id, replayId: replay._id}
          });
          replayRef.afterClosed().subscribe(result => {
            if (result !== undefined && result.type === 'replay') {
              const o = {
                body: result.body
              };
              this._httpService.editreplay(result.postId, result.commentId, result.replayId, o).subscribe((res: any) => {
                if (res.success) {
                  this._snakBar.open(res.MSG, 'undo', {duration: 3000});
                  replay.body = result.body;
                } else {
                  this._snakBar.open(res.errMSG, 'undo', {duration: 3000});
                }
              }, (error) => {
                this._snakBar.open(error.message, 'undo', {duration: 3000});
              });
            }
          });
        break;
    }
  }

   // add new comment
   addComment(event, postId, username, userId, userImage) {
    const body = event.target.firstElementChild.querySelector('textarea').value;
    const commemt = {
      userId: userId,
      username: username,
      userImage: userImage,
      body: body,
      postId: postId
    };
    this._socket.onComment(commemt);
    event.target.firstElementChild.querySelector('textarea').value = '';
  }  // add new comment

  // add new replay
  addReplay(event, commentId, postId, username, userId, userImage) {
    const body = event.target.firstElementChild.querySelector('textarea').value;
    const replay = {
      postId    : postId,
      commentId : commentId,
      body      : body,
      username  : username,
      userId    : userId,
      userImage : userImage
    };
    this._socket.onReplay(replay);
    event.target.firstElementChild.querySelector('textarea').value = '';
  }  // add new replay

}
