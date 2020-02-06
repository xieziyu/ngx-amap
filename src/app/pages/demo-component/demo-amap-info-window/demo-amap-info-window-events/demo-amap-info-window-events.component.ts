import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-info-window-events',
  templateUrl: './demo-amap-info-window-events.component.html',
  styleUrls: ['./demo-amap-info-window-events.component.scss'],
})
export class DemoAmapInfoWindowEventsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-info-window-events.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-info-window-events.component.ts').default; // DEMO IGNORE
  open = true;

  constructor() {}

  ngOnInit() {}

  onEvent(event: any, type: string) {
    console.log('info-window event:', type, event);
  }
}
