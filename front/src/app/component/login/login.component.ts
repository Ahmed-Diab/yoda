import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { AuthService } from 'src/app/services/auth.service';
import { ServicesService } from 'src/app/services/services.service';
import { HttpService } from 'src/app/services/http.service';
import { FacebookService, LoginResponse } from 'ngx-facebook';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, AfterViewInit {
  password:string;
  user:string;
  cols:number = 2;
  isSmall:boolean = true;
  sub:any;
  public auth2: any;
  // public onLoginByGoogle() {
  //   gapi.load('auth2', () => {
  //     this.auth2 = gapi.auth2.init({
  //       client_id: '658174647895-g9df94acacvggufiod0rpoujqe6hvera.apps.googleusercontent.com',
  //       // cookiepolicy: 'single_host_origin',
  //       scope: 'profile'
  //     });
  //     this.attachSignin(document.getElementById('googleBtn'));
  //   });
  // }
  // public attachSignin(element) {
  //   this.auth2.attachClickHandler(element, {},
  //     (googleUser) => {
  //       let profile = googleUser.getBasicProfile();
  //       console.log('Token || '   + googleUser.getAuthResponse().id_token);
  //       console.log('ID: '        + profile.getId());
  //       console.log('Name: '      + profile.getName());
  //       console.log('Image URL: ' + profile.getImageUrl());
  //       console.log('Email: '     + profile.getEmail());
  //       //YOUR CODE HERE
  //     }, (error) => {
  //       alert(JSON.stringify(error, undefined, 2)); 
  //     });
  // }
  constructor(
    private _socket:SocketService,
    private _auth:AuthService,
    private _services:ServicesService,
    private fb: FacebookService,
    private _httpServices:HttpService,
    private _router:Router,
    private _snackBar:MatSnackBar
  ) { 

    // fb.init({
    //   appId: '1755360681259640',
    //   version: 'v2.9'
    // });
    window.addEventListener('resize', ()=>{
      if (window.innerWidth <= 778) {
        this.cols = 1;
        this.isSmall = false;
      }else{
        this.cols = 2;
        this.isSmall = true;

      }
    })
    if (window.innerWidth <= 778) {
      this.cols = 1;
      this.isSmall = false;
    }else{
      this.isSmall = true;

      this.cols = 2;
    }
  }

  ngOnInit() {
    window.scrollTo(0,0)
    }
  onLogin(){
    let log = {
      user:this.user,
      password:this.password
    }
    this._auth.loginUser(log).subscribe((res:any)=>{
      if(res.success){
        this._auth.storeUserData(res.token, res.user);
        this._router.navigate(['/user'])
      }else{
        this._snackBar.open(res.errMSG, 'Undo',{duration:3333})
      }
    },(error)=>{
      this._snackBar.open(error.message, 'Undo',{duration:3333})

    })
  }
  // loginWithFB(){
  //   this.fb.login()
  //   .then((response: LoginResponse) => console.log(response))
  //   .catch((error: any) => console.error('error      ',error));
  // }
  ngAfterViewInit(){
    // this.onLoginByGoogle();
}


}
