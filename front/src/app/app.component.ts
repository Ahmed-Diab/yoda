import { Component, ViewChild, OnInit } from '@angular/core';
import { routerTransition } from './module/routerAnimation';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ServicesService } from './services/services.service';
import { AuthService } from './services/auth.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]

})
export class AppComponent implements OnInit {
  urlPath = 'edfgds';
  constructor(
    private _services: ServicesService,
    private _auth: AuthService,
    private _router: Router
    ) {

  }
  ngOnInit(): void {
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  getDepth(outlet) {
    return  outlet.activatedRouteData.animation || null;
  }
}
