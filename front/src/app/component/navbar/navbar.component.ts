import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('openClose', [
      state('in', style({
        transform: 'translateX(0%)'
        // transition: 'all ease'

      })),
      state('out', style({
        transform: 'translateX(100%)'
        // transition: 'all ease'
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
  // @ViewChild('messages')      messages;
  // @ViewChild('notifications') notifications;
  // @ViewChild('friendsRequst') friendsRequst;
  isNotifications = false;
  isMessages      = false;
  isFriendsRequst = false;
  urlPath:string  = '';

  constructor(
    private _services:ServicesService
  ) {
    this._services.crancePathName.subscribe((res:string)=>{this.urlPath = res})

    
   }
  ngOnInit() {

  }
  toggleNotifications() {
    this.isNotifications  = !this.isNotifications;
    this.isMessages       = false;
    this.isFriendsRequst  = false;

  }
  toggleFriendsRequst() {
    this.isFriendsRequst  = !this.isFriendsRequst
    this.isNotifications  = false;
    this.isMessages       = false;
  }
  toggleMessages() {
    this.isFriendsRequst  = false
    this.isNotifications  = false;
    this.isMessages       = !this.isMessages;
  }
  // close
  close(event){
    this.isNotifications  = false;
    this.isMessages       = false;
    this.isFriendsRequst  = false;
  }

  logout(){
    
  }
  

}
