import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-marker-events',
  templateUrl: './demo-amap-marker-events.component.html',
  styleUrls: ['./demo-amap-marker-events.component.scss'],
})
export class DemoAmapMarkerEventsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-marker-events.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-marker-events.component.ts').default; // DEMO IGNORE
  constructor() {}

  ngOnInit() {}

  onEvent(event, type) {
    console.log('marker event:', type, event);
  }
}
