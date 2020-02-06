import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-ngx-amap-events',
  templateUrl: './demo-ngx-amap-events.component.html',
  styleUrls: ['./demo-ngx-amap-events.component.scss'],
})
export class DemoNgxAmapEventsComponent implements OnInit {
  html = require('!!html-loader!./demo-ngx-amap-events.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-ngx-amap-events.component.ts').default; // DEMO IGNORE
  constructor() {}

  ngOnInit() {}

  onMapEvent(event: any, type: string) {
    console.log('map event:', type, event);
  }
}
