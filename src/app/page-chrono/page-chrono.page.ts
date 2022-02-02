import { Component, OnInit } from '@angular/core';
import {Scope} from "eslint";
import Variable = Scope.Variable;

@Component({
  selector: 'app-page-chrono',
  templateUrl: './page-chrono.page.html',
  styleUrls: ['./page-chrono.page.scss'],
})
export class PageChronoPage implements OnInit {

  timer : String;
  newTime : any;
  oldTime : number;
  value : number;
  indice : number = 0;
  private  change;

  constructor() {
    this.change = false;

  }

  ngOnInit() {
  }

  getlap() {
    console.log("you took a lap");
  }

  reset() {
    console.log("you reset your timer");
    this.setReset();
  }

  public start() {
    let tmp_ms = Date.now()-this.oldTime;
    let milliseconde = tmp_ms/1000;
    let seconde = milliseconde/60;
    let minute = seconde/24;
    this.timer = minute.toFixed(2) + " : " + seconde.toFixed(2) + " : " + tmp_ms;
  }

  public setReset()
  {
    this.oldTime = Date.now();
    console.log("you started the timer");
    this.value = setInterval(this.start.bind(this),10);
  }

  public startTimer() {
    this.oldTime = Date.now();
    console.log("you started the timer");
    this.value = setInterval(this.start.bind(this),10);
  }

  public  pause()
  {
    clearInterval(this.value);
  }

  start_stop()
  {
    this.change = !this.change;
    if(this.indice == 0) {
      console.log("start");
      this.startTimer();
      this.indice = 1;
    }
    else {
      console.log("stop");
      this.indice = 0;
      this.pause();
    }
  }

}
