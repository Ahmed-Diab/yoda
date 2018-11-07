import { Component, ViewChild, OnInit } from '@angular/core';
import { routerTransition } from './module/routerAnimation';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicesService } from './services/services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[routerTransition]

})
export class AppComponent implements OnInit{
  urlPath:string = 'edfgds'
  constructor(
    private _services:ServicesService
    ){

  }
  ngOnInit(): void {

  }

  getDepth(outlet){
    return  outlet.activatedRouteData.animation || null;
  }
  
  
}
