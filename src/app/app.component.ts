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
  childEmit(e) {
    debugger
    console.log(e)
  }
}
