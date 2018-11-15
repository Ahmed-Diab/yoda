import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Post } from '../module/post';
const socket = io('http://localhost:3000/');


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor() { }
  onJoin(data){
    socket.emit('join', data)
  }

  // on Error
  getError(){
    let observable = new Observable((observer) => {
      socket.on('Error', (data:string) => {
        observer.next(data);    
      });
      return () => {
        socket.disconnect();
      };  
    })     
    return observable;
  }
  // 
  getNewNotification() {
    let observable = new Observable((observer) => {
      socket.on('new notification', (data) => {
        observer.next(data);    
      });
      return () => {
        socket.disconnect();
      };  
    })     
    return observable;
  }
  getLength(){
    let observable = new Observable((observer) => {
      socket.on('get Length', (data:string) => {
        observer.next(data);    
      });
      return () => {
        socket.disconnect();
      };  
    })     
    return observable;
  }

  getNewTextNotifications(){
    let observable = new Observable((observer) => {
      socket.on('new text notifications', (data:string) => {
        observer.next(data);    
      });
      return () => {
        socket.disconnect();
      };  
    })     
    return observable;
  }

  onNotifications(data){
    socket.emit('notifications', data)
  }
  getAllNotification(){
    let observable = new Observable((observer) => {
      socket.on('all notification', (data) => {
            observer.next(data);    
      });
      return () => {
        socket.disconnect();
      };  
    })     
    return observable;
  }

//send frin requst
  onSendFrindRequst(data){
    socket.emit('send friend request', data)
  }
  onAcceptFriendRequest(data){
    socket.emit('accept friend request', data)
  }
  onGetFriendRequst(data){
    socket.emit('get friends requset', data)
  }

  getNewFriendsRequset(){
    let observable = new Observable((observer) => {
      socket.on('new friends requset', (data) => {
            observer.next(data);    
      });
      return () => {
        socket.disconnect();
      };  
    })     
    return observable;
  }

  onCanselFriendRequestFromSender(data){
    socket.emit('cansel friend request from sender', data)
  }
  onIgnoreFriendRequest(data){
    socket.emit('ignore friend request', data)
  }


// post
  onPost(data){
    socket.emit('post', data)
  }
  getPost() {
    let observable = new Observable((observer) => {
      socket.on('new post', (data:Post) => {
        observer.next(data);    
      });
      return () => {
        socket.disconnect();
      };  
    })     
    return observable;
  }
// comment
  onComment(data){
    socket.emit('comment', data)

  }
  getComment() {
    let observable = new Observable((observer) => {
      socket.on('new comment', (data:any) => {
        observer.next(data);    
      });
      return () => {
        socket.disconnect();
      };  
    })     
    return observable;
  }
// replay
  onReplay(data){
    socket.emit('replay', data)
  }
  getReplay() {
    let observable = new Observable((observer) => {
      socket.on('new replay', (data:any) => {
        observer.next(data);    
      });
      return () => {
        socket.disconnect();
      };  
    })     
    return observable;
  } 

}
 