import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-upload-progress-bar',
  templateUrl: './upload-progress-bar.component.html',
  styleUrls: ['./upload-progress-bar.component.css']
})
export class UploadProgressBarComponent implements OnInit {
  @Input() parentValue: any;
  @Output() uploadedEvent = new EventEmitter<string>();
  progressbarValue: number = 5;
  curSec: number = 0;
  constructor() {}

  ngOnInit() {
    this.progressbarValue = this.parentValue;
  }

  name = 'Reusable Progress bar';
  uploaded: boolean = false;

  startTimer(seconds: number) {
    this.uploaded = false;
    const time = seconds;
    const timer$ = interval(100);

    const sub = timer$.subscribe(sec => {
      this.progressbarValue = 10 + (sec * 100) / seconds;
      this.curSec = sec;
      this.uploadedEvent.emit('STATUS');

      if (this.curSec === seconds) {
        this.uploaded = true;
        sub.unsubscribe();
      }
    });
  }
}
