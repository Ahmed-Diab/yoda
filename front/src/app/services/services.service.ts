import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  private pathName = new BehaviorSubject<string>('hello');
  crancePathName = this.pathName.asObservable();
  constructor() { }

  changePathName(path){
    this.pathName.next(path)
  }
}
