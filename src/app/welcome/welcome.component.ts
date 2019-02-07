import { Component, OnInit } from '@angular/core';
import { PhrasesService } from "../phrases.service";
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private phraseService: PhrasesService) { }

  ngOnInit() {
    this.start=false;
  }
  start: boolean = false;
  
  startGame(name, opponent) {
    this.start = true;
    this.phraseService.playerName = name;
    this.phraseService.level = opponent;
  }
}
