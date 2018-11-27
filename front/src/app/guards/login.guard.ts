import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _authService: AuthService
    ) { }
canActivate() {
    if (!this._authService.loggedIn()) {
      return true;
    } else {
      this._router.navigate(['/user']);

      return false;
    }
  }
}
