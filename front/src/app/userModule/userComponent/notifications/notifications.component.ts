import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { SocketService } from 'src/app/services/socket.service';
import { User } from 'src/app/module/user';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifictions = [];
  user: User;

  constructor(
    private _services: ServicesService,
    private _socket: SocketService
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this._socket.onNotifications({id: this.user._id, isRead: true});
  }

  ngOnInit() {


    this._socket.getAllNotification().subscribe((res: any) => {
      const t = res;
      this.notifictions = t.reverse();
    });

  }

}
