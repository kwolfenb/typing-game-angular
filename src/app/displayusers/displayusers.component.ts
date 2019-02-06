import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Display } from '../models/display.model';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-displayusers',
  templateUrl: './displayusers.component.html',
  styleUrls: ['./displayusers.component.css']
})
export class DisplayusersComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  constructor( private displayService: DisplayService) { }

  ngOnInit() {
    this.players = this.displayService.getPlayers();
  }
}
