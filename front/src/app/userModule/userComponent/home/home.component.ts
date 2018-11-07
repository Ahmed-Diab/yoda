import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  frindName:string = '';
  constructor(
    private _services:ServicesService
  ) {
    this._services.changePathName('user')

   }

  ngOnInit() {
  }
  findFrind(){
    console.log(this.frindName)

  }

}
