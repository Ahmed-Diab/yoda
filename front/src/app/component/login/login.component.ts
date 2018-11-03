import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { SocketService } from 'src/app/services/socket.service';
import { AuthService } from 'src/app/services/auth.service';
=======
>>>>>>> e57f0722d52dff3a5b99e8baeca272b0397fda9d

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  constructor(
    private _socket:SocketService,
    private _auth:AuthService
  ) { }

  ngOnInit() {
    // this._socket.join('hello')
=======
  constructor() { }

  ngOnInit() {
>>>>>>> e57f0722d52dff3a5b99e8baeca272b0397fda9d
  }

}
