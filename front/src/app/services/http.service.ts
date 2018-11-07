import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http:HttpClient,
    private _services:ServicesService
  ) { }

  login(data){
    return this._http.post(`${this._services.url}`, data)
  }
  loginAuthGoogle(){
    return this._http.get(`${this._services.url}/auth/google`)
  }
  register(data){
    return this._http.post(`${this._services.url}`, data)
  }
  

}
