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
  @Input() secondsRequired: any;
  @Input() UploadStatus: boolean;
  @Output() uploadedEvent = new EventEmitter<any>();
  progressbarValue: number = 10;
  curSec: number = 0;
  constructor() {}

  ngOnInit() {
    this.progressbarValue = this.parentValue;
    this.startTimer(this.secondsRequired);
  }

  name = 'Reusable Progress bar';
  //uploaded: boolean = false;

  startTimer(seconds: number) {
    this.UploadStatus = false;
    const time = seconds;
    const timer$ = interval(100);

    const sub = timer$.subscribe(sec => {
      this.progressbarValue = 10 + (sec * 100) / seconds;
      this.curSec = sec;
      this.uploadedEvent.emit({
        progressValue: this.progressbarValue,
        currentSec: this.curSec
      });

      if (this.curSec === seconds) {
        //this.UploadStatus = true;
        sub.unsubscribe();
      }
    });
  }

  onChanges(simpleChanges) {
    console.log(simpleChanges);
  }
}
