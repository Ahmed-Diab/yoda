import { Component } from '@angular/core';
<<<<<<< HEAD
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
=======

>>>>>>> e57f0722d52dff3a5b99e8baeca272b0397fda9d
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
<<<<<<< HEAD

  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

=======
  title = 'front';
>>>>>>> e57f0722d52dff3a5b99e8baeca272b0397fda9d
}
