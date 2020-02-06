import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-text-events',
  templateUrl: './demo-amap-text-events.component.html',
  styleUrls: ['./demo-amap-text-events.component.scss'],
})
export class DemoAmapTextEventsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-text-events.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-text-events.component.ts').default; // DEMO IGNORE
  style = {
    padding: '.75rem 1.25rem',
    'margin-bottom': '1rem',
    'border-radius': '.25rem',
    'background-color': 'white',
    width: '15rem',
    'border-width': 0,
    'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
    'text-align': 'center',
    'font-size': '20px',
    color: 'blue',
  };

  constructor() {}

  ngOnInit() {}

  onEvent(event, type) {
    console.log('text marker event:', type, event);
  }
}
