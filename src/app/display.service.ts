import { Injectable } from '@angular/core';
import { Display } from './models/display.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class DisplayService {

  players: FirebaseListObservable<any>;

  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players', {
      query: {
        orderByChild: "wpm",
        limitToFirst: 10
      }
    });
  }

  getPlayers() {
    return this.players;
  }

  getPlayerById(playerId: string) {
    return this.database.object('players/' + playerId)
  }

  addPlayer(newPlayer: Display){
    this.players.push(newPlayer);
  }


}
