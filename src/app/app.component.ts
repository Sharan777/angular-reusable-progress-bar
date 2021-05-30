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
  name = 'Angular ' + VERSION.major;

  progressbarValue = 100;
  curSec: number = 0;

  startTimer(seconds: number) {
    const time = seconds;
    const timer$ = interval(1000);

    const sub = timer$.subscribe(sec => {
      this.progressbarValue = 100 - (sec * 100) / seconds;
      this.curSec = sec;

      if (this.curSec === seconds) {
        sub.unsubscribe();
      }
    });
  }
}
