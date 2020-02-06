import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-tool-bar-events',
  templateUrl: './demo-amap-tool-bar-events.component.html',
  styleUrls: ['./demo-amap-tool-bar-events.component.scss'],
})
export class DemoAmapToolBarEventsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-tool-bar-events.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-tool-bar-events.component.ts').default; // DEMO IGNORE
  hide = false;
  constructor() {}

  ngOnInit() {}

  onEvent(event: any, type: string) {
    console.log('rectangle event:', type, event);
  }
}
