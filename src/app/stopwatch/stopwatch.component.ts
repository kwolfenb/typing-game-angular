import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  h1 = document.querySelector('time');
  start = document.getElementById('start');
  htmlStr: string;
  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;
  t;

  add() {
    this.seconds++;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hours++;
      }
    }

    // this.htmlStr = (this.hours ? (this.hours > 9 ? this.hours : "0" + this.hours) : "00") + ":" + (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00") + ":" + (this.seconds > 9 ? this.seconds : "0" + this.seconds);
    // console.log(this.htmlStr);
    // timer();
  }

  timer() {
    this.t = setTimeout(this.add, 1000);
  }








}
