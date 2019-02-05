import { Injectable } from '@angular/core';
import { Phrase } from './models/phrase.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PhrasesService {
  phrases: FirebaseListObservable<any[]>;
  currenctPhrase;

  constructor(private database: AngularFireDatabase) { 
    this.phrases = database.list('phrases');
    console.log(this.phrases);
  }

  getPhrases(){
    return this.phrases;
  }

  getPhraseById(phraseId: number) {
    return this.database.object('phrases/' + phraseId)
  }



   getPhrase() {
    let randomPhrase = Math.floor(Math.random()*(5));
    this.getPhraseById(randomPhrase).subscribe(dataLastEmittedFromObserver => {
      console.log(dataLastEmittedFromObserver.phrase);
       this.currenctPhrase = dataLastEmittedFromObserver.phrase;
      
    })
  }
}
