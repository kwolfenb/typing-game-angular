import { Component, OnInit } from "@angular/core";
import { PhrasesService } from "../phrases.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-typing",
  templateUrl: "./typing.component.html",
  styleUrls: ["./typing.component.css"]
})
export class TypingComponent implements OnInit {
  constructor(private phraseService: PhrasesService) { }

  currentPhrase: string = null;
  wordArr: string[] = [];
  currentWord: number = 0;
  typedWord: string;

  phraseWithActiveWord: string;
  errorCount: number = 0;
  time: number = 0;
  gameActive: boolean = false;
  wpm: number = 0;
  percentFinished: string;

  ngOnInit() { }

  newGame() {
    this.gameActive = true;
    this.wordArr = [];
    this.currentWord = 0;
    this.time = 0;
    this.currentPhrase = this.phraseService.getPhrase();
    this.parseWords();
    this.updateActiveWord();
    this.startTimer();
  }

  parseWords() {
    this.wordArr = this.currentPhrase.split(" ");
  }

  onSpaceDown(word) {
    if (
      word == this.wordArr[this.currentWord] ||
      word == this.wordArr[this.currentWord] + " " ||
      word == " " + this.wordArr[this.currentWord]
    ) {
      this.currentWord++;
      this.clearWords();
      this.updateActiveWord();
    } else if (
      word !== this.wordArr[this.currentWord] ||
      word !== this.wordArr[this.currentWord] + " " ||
      word !== " " + this.wordArr[this.currentWord] + " "
    ) {
      this.errorCounter();
    }
    if (this.currentWord >= this.wordArr.length) {
      alert("you are finished. Time: " + this.time);
      this.gameActive = false;
    }
  }

  clearWords() {
    this.typedWord = "";
  }

  updateActiveWord() {
    this.phraseWithActiveWord = "";
    for (let i = 0; i < this.wordArr.length; i++) {
      if (i == this.currentWord) {
        this.phraseWithActiveWord +=
          '<span style="color:red; font-weight:bold">' +
          this.wordArr[i] +
          " </span>";
      } else {
        this.phraseWithActiveWord += this.wordArr[i] + " ";
      }
    }
    let myContainer = <HTMLElement>document.querySelector(".phraseBox");
    myContainer.innerHTML = this.phraseWithActiveWord;
    this.percentFinished = Math.floor((this.currentWord / this.wordArr.length) * 500) + 'px';
  }

  errorCounter() {
    this.errorCount++;
  }

  startTimer() {
    var timer = setInterval(() => {
      if (this.gameActive == true) {
        this.time++;
        this.updateWPM();
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  updateWPM() {
    this.wpm = Math.round(this.currentWord / (this.time / 60));
  }










}
