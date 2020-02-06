import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-rectangle-events',
  templateUrl: './demo-amap-rectangle-events.component.html',
  styleUrls: ['./demo-amap-rectangle-events.component.scss'],
})
export class DemoAmapRectangleEventsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-rectangle-events.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-rectangle-events.component.ts').default; // DEMO IGNORE
  hide = false;
  options: AMap.Rectangle.Options;

  constructor() {}

  ngOnInit() {}

  onChartReady() {
    const southWest = new AMap.LngLat(116.356449, 39.859008);
    const northEast = new AMap.LngLat(116.417901, 39.893797);
    const bounds = new AMap.Bounds(southWest, northEast);
    this.options = {
      bounds,
      strokeColor: 'red',
      strokeWeight: 6,
      strokeOpacity: 0.5,
      strokeDasharray: [30, 10],
      strokeStyle: 'dashed',
      fillColor: 'blue',
      fillOpacity: 0.5,
      cursor: 'pointer',
      zIndex: 50,
    };
  }

  onEvent(event: any, type: string) {
    console.log('rectangle event:', type, event);
  }

  onEditorEvent(event: any, type: string) {
    console.log('rectangle editor event:', type, event);
  }
}
