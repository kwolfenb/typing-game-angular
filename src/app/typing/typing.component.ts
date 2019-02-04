import { Component, OnInit } from "@angular/core";
import { PhrasesService } from "../phrases.service";
import { FormsModule } from '@angular/forms';


@Component({
  selector: "app-typing",
  templateUrl: "./typing.component.html",
  styleUrls: ["./typing.component.css"]
})
export class TypingComponent implements OnInit {
  constructor(private phraseService: PhrasesService) {}

  currentPhrase: string = null;
  wordArr: string[] = [];
  currentWord: number = 0;
  typedWord: string;

  ngOnInit() {}

  newGame() {
    this.currentPhrase = this.phraseService.getPhrase();
    this.parseWords();
  }

  parseWords() {
    this.wordArr = this.currentPhrase.split(" ");
  }

  onSpaceDown(word) {
    if ((word == this.wordArr[this.currentWord]) || (word == this.wordArr[this.currentWord]+ ' ')) {
      console.log(this.typedWord);
      this.currentWord ++;
      this.clearWords();
    }
  }

  clearWords() {
    this.typedWord='';
  }
}
