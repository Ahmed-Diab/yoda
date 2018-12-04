import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { SocketService } from 'src/app/services/socket.service';
import { User } from 'src/app/module/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, AfterViewInit {
  notifictions = [];
  user: User;
  notLength: number;

  constructor(
    private _services: ServicesService,
    private _socket: SocketService,
    private _router: Router
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this._socket.getAllNotification().subscribe((res: any) => {
      const t = [] = res.not;
      this.notifictions = t.reverse();
      this.notLength = res.length;
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 778) {
        this._router.navigate(['/user']);
      }

    });
    if (window.innerWidth > 778) {
      this._router.navigate(['/user']);
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {


  }

  getMoreNotfiction(x) {
    this._socket.onMoreNotifications({id: this.user._id, index: x});
    this._socket.getMoreNotifications().subscribe((res: any) => {
      for (const not of res) {
        this.notifictions.push(not);
      }
      });
  }

}
