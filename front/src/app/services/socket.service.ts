import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Post } from '../module/post';
import { ServicesService } from './services.service';
const socket = io('http://192.168.20.102:3000');


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(
    private _services: ServicesService
  ) { }
  onJoin(data) {
    socket.emit('join', data);
  }

  // on Error
  getError() {
    const observable = new Observable((observer) => {
      socket.on('Error', (data: string) => {
        observer.next(data);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }
  getNewNotification() {
    const observable = new Observable((observer) => {
      socket.on('new notification', (data) => {
        observer.next(data);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }


  getNewTextNotifications() {
    const observable = new Observable((observer) => {
      socket.on('new text notifications', (data: string) => {
        observer.next(data);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }
  getNewFriendRequstTextNotifications() {
    const observable = new Observable((observer) => {
      socket.on('new friend requst text notifications', (data: string) => {
        observer.next(data);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }
  onNotificationsAndfriedsReqLength(data) {
    socket.emit('notificationsAndfriedsReqLength', data);
  }
  onMoreNotifications(data) {
    socket.emit('more notifications', data);
  }

  getMoreNotifications() {
    const observable = new Observable((observer) => {
      socket.on('get more notification', (data: any) => {
        observer.next(data);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }

  getLength() {
    const observable = new Observable((observer) => {
      socket.on('get Length', (data: string) => {
        observer.next(data);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }

  onNotifications(data) {
    socket.emit('notifications', data);
  }
  getAllNotification() {
    const observable = new Observable((observer) => {
      socket.on('all notification', (data) => {
            observer.next(data);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }
  onSendFrindRequst(data) {
    socket.emit('send friend request', data);
  }
  onAcceptFriendRequest(data) {
    socket.emit('accept friend request', data);
  }
  onGetFriendRequst(data) {
    socket.emit('get friends requset', data);
  }

  getNewFriendsRequset() {
    const observable = new Observable((observer) => {
      socket.on('new friends requset', (data) => {
            observer.next(data);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }

  onCanselFriendRequestFromSender(data) {
    socket.emit('cansel friend request from sender', data);
  }
  onIgnoreFriendRequest(data) {
    socket.emit('ignore friend request', data);
  }


// post
  onPost(data) {
    socket.emit('post', data);
  }
  getPost() {
    const observable = new Observable((observer) => {
      socket.on('new post', (data: Post) => {
        observer.next(data);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }
// comment
  onComment(data) {
    socket.emit('comment', data);

  }
  getComment() {
    const observable = new Observable((observer) => {
      socket.on('new comment', (data: any) => {
        observer.next(data);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }
// replay
  onReplay(data) {
    socket.emit('replay', data);
  }
  getReplay() {
    const observable = new Observable((observer) => {
      socket.on('new replay', (data: any) => {
        observer.next(data);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }

}
