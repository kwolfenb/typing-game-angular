import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { AboutService } from '../about.service';
import { Display } from '../models/display.model';




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  players: FirebaseListObservable<any[]>;

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.players = this.aboutService.getPlayers();

    this.players = database.list('players', {
      query: {
        orderByChild: "time",
        
      }
  }

}
