import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-circle-marker-events',
  templateUrl: './demo-amap-circle-marker-events.component.html',
  styleUrls: ['./demo-amap-circle-marker-events.component.scss'],
})
export class DemoAmapCircleMarkerEventsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-circle-marker-events.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-circle-marker-events.component.ts').default; // DEMO IGNORE
  hide = false;
  options = {
    center: [116.407394, 39.904211], // 圆心位置
    radius: 12,
    strokeColor: 'white',
    strokeOpacity: 0.5,
    strokeWeight: 2,
    fillColor: 'rgba(0,0,255,1)',
    fillOpacity: 0.5,
    zIndex: 10,
    bubble: true,
    cursor: 'pointer',
  };

  constructor() {}

  ngOnInit() {}

  onEvent(event: any, type: string) {
    console.log('circle-marker event:', type, event);
  }

  onEditorEvent(event: any, type: string) {
    console.log('circle-marker editor event:', type, event);
  }
}
