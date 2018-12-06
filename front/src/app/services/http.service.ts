import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from './services.service';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient,
    private _services: ServicesService
  ) { }
// user
  login(data) {
    return this._http.post(`${this._services.url}`, data)
            .pipe( catchError(this._services.handleError));
  }
  loginAuthGoogle() {
    return this._http.get(`${this._services.url}/auth/google`)
            .pipe( catchError(this._services.handleError));
  }
  register(data) {
    return this._http.post(`${this._services.url}`, data)
            .pipe( catchError(this._services.handleError));
  }
  getUserDashbord(userId) {
    return this._http.get(`${this._services.url}/post/${userId}/user`)
            .pipe( catchError(this._services.handleError));
  }
  findUserByUsername(username, userId) {
    return this._http.get(`${this._services.url}/users/find/${username}/${userId}`)
              .pipe( catchError(this._services.handleError));
  }

  getUserById(id) {
    return this._http.get(`${this._services.url}/users/${id}`)
    .pipe( catchError(this._services.handleError));
  }

  unFriendUser(userId, friendId) {
    return this._http.get(`${this._services.url}/users/${userId}/${friendId}/unfriend`)
    .pipe( catchError(this._services.handleError));
  }

  // post
  getOnePost(postId) {
    return this._http.get(`${this._services.url}/post/${postId}`)
              .pipe( catchError(this._services.handleError));
  }
  editPost(postId, body) {
    return this._http.post(`${this._services.url}/post/${postId}/edit`, body)
              .pipe( catchError(this._services.handleError));
  }
  removePost(postId) {
    return this._http.get(`${this._services.url}/post/${postId}/remove`)
              .pipe( catchError(this._services.handleError));
  }
  likePost(postId, user) {
    return this._http.post(`${this._services.url}/post/${postId}/like/${user._id}`, user)
              .pipe( catchError(this._services.handleError));
  }
  unlike(postId, likeId) {
    return this._http.get(`${this._services.url}/post/${postId}/unlike/${likeId}`)
    .pipe( catchError(this._services.handleError));
  }

  // comment
  editComment(postId, commentId, body) {
    return this._http.post(`${this._services.url}/comment/${postId}/${commentId}/edit`, body)
              .pipe( catchError(this._services.handleError));
  }
  removeComment(postId, commentId) {
    return this._http.get(`${this._services.url}/comment/${postId}/${commentId}/remove`)
              .pipe( catchError(this._services.handleError));
  }

  // replay
  editreplay(postId, commentId, replayId, body) {
    return this._http.post(`${this._services.url}/replay/${postId}/${commentId}/${replayId}/edit`, body)
      .pipe( catchError(this._services.handleError));
  }
  removeReplay(postId, commentId, replayId) {
    return this._http.get(`${this._services.url}/replay/${postId}/${commentId}/${replayId}/remove`)
      .pipe( catchError(this._services.handleError));
  }

}
