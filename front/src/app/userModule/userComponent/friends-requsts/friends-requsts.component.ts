import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { Subscription } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-friends-requsts',
  templateUrl: './friends-requsts.component.html',
  styleUrls: ['./friends-requsts.component.scss']
})
export class FriendsRequstsComponent implements OnInit {

  friendsRequsts: any = [];
  subscribtion: Subscription;
  user: any;
  constructor(
    private _socket: SocketService,
    private _services: ServicesService
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this._socket.onGetFriendRequst(this.user._id);
  }

  ngOnInit() {
    this._socket.getNewFriendsRequset().subscribe((res: any) => {
      this.friendsRequsts = res;
    });

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
        this._socket.onNotificationsAndfriedsReqLength(this.user._id);

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
      this._socket.onNotificationsAndfriedsReqLength(this.user._id);

    }
  }
}
}
