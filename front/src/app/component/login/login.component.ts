import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _socket:SocketService,
    private _auth:AuthService
  ) { }

  ngOnInit() {
      }


}
