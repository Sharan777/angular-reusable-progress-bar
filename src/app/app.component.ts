import { Component, VERSION } from '@angular/core';
//import { VERSION } from '@angular/material';
import { interval, Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Reusable Progress bar';
  uploaded:boolean = false;

  progressbarValue = 5;
  curSec: number = 0;

  startTimer(seconds: number) {
    this.uploaded = false;
    const time = seconds;
    const timer$ = interval(100);

    const sub = timer$.subscribe(sec => {
      this.progressbarValue = 10 + (sec * 100) / seconds;
      this.curSec = sec;

      if (this.curSec === seconds) {
        this.uploaded = true;
        sub.unsubscribe();
      }
    });
  }
}
