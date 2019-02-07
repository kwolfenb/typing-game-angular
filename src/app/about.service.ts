import { Injectable } from '@angular/core';
import { Display } from './models/display.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AboutService {
  players: FirebaseListObservable<any>;




  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players', {
      query: {
        orderByChild: "time",
      }
    });
  }


  getPlayers() {
    return this.players;
  }

}
