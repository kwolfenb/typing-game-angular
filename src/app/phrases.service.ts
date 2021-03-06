import { Injectable } from "@angular/core";
import { Phrase } from "./models/phrase.model";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database";
import { Observable } from "rxjs";

@Injectable()
export class PhrasesService {
  phrases: FirebaseListObservable<any[]>;
  currentPhrase;
  randomNumber: number = -1;

  constructor(private database: AngularFireDatabase) {
    this.phrases = database.list("phrases");
  }

  getPhrases() {
    return this.phrases;
  }

  playerName: string;
  level: number;

  // library: string[] = [
  //   "A fellow jumped off a high wall, And had a most terrible fall. He went back to bed, With a bump on his head, That's why you don't jump off a wall.",
  //   "Limericks I cannot compose, With noxious smells in my nose. But this one was easy, I only felt queasy, Because I was sniffing my toes.",
  //   "There was an odd fellow named Gus, When travelling he made such a fuss. He was banned from the train, Not allowed on a plane, and now travels only by bus.",
  //   "Short test",
  //   "Another short test"
  // ]

  getPhraseById(phraseId: number) {
    return this.database.object("phrases/" + phraseId);
  }

  async getPhrase() {
    let randomPhrase = Math.floor(Math.random() * 19);
    if (randomPhrase == this.randomNumber) {
      this.getPhrase();
    }
    this.randomNumber = randomPhrase;
    this.getPhraseById(randomPhrase).subscribe(dataLastEmittedFromObserver => {
      this.currentPhrase = dataLastEmittedFromObserver.phrase;
    });
  }

}
