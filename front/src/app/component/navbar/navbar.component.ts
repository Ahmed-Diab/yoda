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
        transform: 'translateX(0%)',
        width: '25%'
      })),
      state('out', style({
        transform: 'translateX(165%)',
        width: '0'

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
  user: User;
  url: string          = this._services.url;
  notifictions: any    = [];
  friendsRequsts: any = [];
  notLength: number;
  friendsLength: number;
  notaLength: number;

  constructor(
    private _services: ServicesService,
    private _auth: AuthService,
    private _router: Router,
    private _socket: SocketService,
    private _httpService: HttpService,
    private _snakBar: MatSnackBar
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this._socket.onNotificationsAndfriedsReqLength(this.user._id);

    this._socket.getNewNotification().subscribe((res: any) => {
      this.notLength += 1;
      this.notifictions.unshift(res);
    });

    this._socket.getNewFriendRequstTextNotifications().subscribe((res: string) => {
      this.friendsLength += 1;
      this._snakBar.open(res, 'undo', {duration: 3000});
    });

    this._socket.getLength().subscribe((res: { friendsLength: number, notLength: number}) => {
      this.friendsLength = res.friendsLength;
      this.notLength     = res.notLength;
    });

    this._socket.getAllNotification().subscribe((res: any) => {
      const t = res.not;
      this.notaLength = res.length;
      this.notifictions = t.reverse();
    });
    this._socket.getNewFriendsRequset().subscribe((res: any) => {
      this.friendsRequsts = res;
      this.friendsLength  = res.length;
    });

    this._socket.getMoreNotifications().subscribe((res: any) => {
      const resArr = res.reverse();
      for (const not of resArr) {
        this.notifictions.push(not);
      }
      });
   }
  ngOnInit() {

  }

  goToHome() {
    this.isNotifications  = false;
    this.isMessages       = false;
    this.isFriendsRequst  = false;
    this._router.navigate(['/user']);

  }

  toggleNotifications() {
    if (!this.isNotifications) {
      this._socket.onNotifications({id: this.user._id, isRead: true});
    }
    setTimeout(() => {
      this.isNotifications  = !this.isNotifications;
      this.isMessages       = false;
      this.isFriendsRequst  = false;
    }, 100);
    this.notLength = 0;
  }

  toggleFriendsRequst() {
    this._socket.onGetFriendRequst(this.user._id);
    setTimeout(() => {
      this.isNotifications  = false;
      this.isMessages       = false;
      this.isFriendsRequst  = !this.isFriendsRequst;
    }, 100);
  }
  toggleMessages() {
    this.isFriendsRequst  = false;
    this.isNotifications  = false;
    this.isMessages       = !this.isMessages;
  }

  close() {
    this.isNotifications  = false;
    this.isMessages       = false;
    this.isFriendsRequst  = false;
  }

  logout() {
    this._auth.logout();
    this._router.navigate(['/login']);
  }

  acceptFrindRequst(friend) {
      for (let i = 0; i < this.friendsRequsts.length; i++) {
        const req = this.friendsRequsts[i];
        if (req._id === friend._id) {
          this._socket.onAcceptFriendRequest({
            user: {
              username: this.user.username,
              _id: this.user._id,
              image: this.user.image},
            friend: {
              _id: friend._id,
              username: friend.username,
              image: friend.image}
            });
          this.friendsRequsts.splice(req, 1);
          this.friendsLength -= 1;
        }
      }
  }

  ignoreFriendRequest(friend) {
    for (let i = 0; i < this.friendsRequsts.length; i++) {
      const req = this.friendsRequsts[i];
      if (req._id === friend._id) {
        this._socket.onIgnoreFriendRequest({
          userId: this.user._id,
          friendId: friend._id
        });
        this.friendsRequsts.splice(req, 1);
        this.friendsLength -= 1;
      }
    }
  }
  toNot() {
    this._socket.onNotifications({id: this.user._id, isRead: true});
    this._router.navigate(['/user/notifications']);
  }
  getMoreNotfiction(x) {
    this._socket.onMoreNotifications({id: this.user._id, index: x});
  }

}
