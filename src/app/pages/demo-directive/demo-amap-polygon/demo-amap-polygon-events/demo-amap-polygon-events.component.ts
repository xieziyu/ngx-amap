import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-polygon-events',
  templateUrl: './demo-amap-polygon-events.component.html',
  styleUrls: ['./demo-amap-polygon-events.component.scss'],
})
export class DemoAmapPolygonEventsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-polygon-events.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-polygon-events.component.ts').default; // DEMO IGNORE
  hide = false;
  polygonArr = [
    [116.403322, 39.920255],
    [116.410703, 39.897555],
    [116.402292, 39.892353],
    [116.389846, 39.891365],
  ];
  options = {
    path: this.polygonArr,
    strokeColor: '#FF33FF',
    strokeOpacity: 0.2,
    strokeWeight: 3,
    fillColor: '#1791fc',
    fillOpacity: 0.35,
  };
  constructor() {}

  ngOnInit() {}

  onEvent(event: any, type: string) {
    console.log('polygon event:', type, event);
  }

  onEditorEvent(event: any, type: string) {
    console.log('polygon editor event:', type, event);
  }
}
