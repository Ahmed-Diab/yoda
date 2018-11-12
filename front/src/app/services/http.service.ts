import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from './services.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http:HttpClient,
    private _services:ServicesService
  ) { }
// user
  login(data){
    return this._http.post(`${this._services.url}`, data)
            .pipe( catchError(this._services.handleError));
  }
  loginAuthGoogle(){
    return this._http.get(`${this._services.url}/auth/google`)
            .pipe( catchError(this._services.handleError));
  }
  register(data){
    return this._http.post(`${this._services.url}`, data) 
            .pipe( catchError(this._services.handleError));
  }
  getUserDashbord(userId){
    return this._http.get(`${this._services.url}/post/${userId}/user`) 
            .pipe( catchError(this._services.handleError));
  }
  

}
