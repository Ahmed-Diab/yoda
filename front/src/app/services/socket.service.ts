import { Injectable } from '@angular/core';
<<<<<<< HEAD
import io from 'socket.io-client';
const socket = io('http://localhost:3000/');
=======
>>>>>>> e57f0722d52dff3a5b99e8baeca272b0397fda9d

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() { }
<<<<<<< HEAD

  join(data){
    socket.emit('join', data)
  }

=======
>>>>>>> e57f0722d52dff3a5b99e8baeca272b0397fda9d
}
