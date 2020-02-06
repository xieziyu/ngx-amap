import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-ellipse-events',
  templateUrl: './demo-amap-ellipse-events.component.html',
  styleUrls: ['./demo-amap-ellipse-events.component.scss'],
})
export class DemoAmapEllipseEventsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-ellipse-events.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-ellipse-events.component.ts').default; // DEMO IGNORE
  hide = false;
  options = {
    center: [116.403322, 39.920255],
    radius: [2000, 1000],
    strokeColor: '#F33',
    strokeOpacity: 1,
    strokeWeight: 3,
    fillColor: '#ee2200',
    fillOpacity: 0.35,
  };

  constructor() {}

  ngOnInit() {}

  onEvent(event: any, type: string) {
    console.log('ellipse event:', type, event);
  }

  onEditorEvent(event: any, type: string) {
    console.log('ellipse editor event:', type, event);
  }
}
