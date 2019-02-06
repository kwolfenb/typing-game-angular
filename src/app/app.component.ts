import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PhrasesService } from "./phrases.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private phraseService: PhrasesService) {}

  start: boolean = false;
  
  startGame(name, opponent) {
    this.start = true;
    this.phraseService.playerName = name;
    this.phraseService.level = opponent;
  }

}