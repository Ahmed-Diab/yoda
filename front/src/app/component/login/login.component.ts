import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { AuthService } from 'src/app/services/auth.service';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password:string;
  user:string;
  cols:number = 2;
  constructor(
    private _socket:SocketService,
    private _auth:AuthService,
    private _services:ServicesService
  ) { 
    window.addEventListener('resize', ()=>{
      if (window.innerWidth <= 778) {
        this.cols = 1;
      }else{
        this.cols = 2;
      }
    })
    if (window.innerWidth <= 778) {
      this.cols = 1;
    }else{
      this.cols = 2;
    }
  }

  ngOnInit() {
    this._services.changePathName('')

      }

  onLogin(){
    let log = {
      user:this.user,
      password:this.password
    }

  }

}
