import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  // private pathName = new BehaviorSubject<string>('hello');
  // crancePathName = this.pathName.asObservable();
  // public  url = 'http://localhost:3000';

  public  url = '';
  constructor() { }

  // changePathName(path){
  //   this.pathName.next(path)
  // }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      return throwError(
        'Something bad happened; please try again later.' + error.message);
    } else {
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }
}
