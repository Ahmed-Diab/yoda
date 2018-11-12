import { Component, OnInit, Input } from '@angular/core';
import { Replay } from 'src/app/module/replay';
import { User } from 'src/app/module/user';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.scss']
})
export class ReplayComponent implements OnInit {
  @Input() replays:Replay;
  @Input() user:User;
  @Input() url:string;
  constructor() { }
  ngOnInit() {
  }

}
