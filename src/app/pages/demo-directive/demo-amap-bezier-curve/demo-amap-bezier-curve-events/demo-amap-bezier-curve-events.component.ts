import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-bezier-curve-events',
  templateUrl: './demo-amap-bezier-curve-events.component.html',
  styleUrls: ['./demo-amap-bezier-curve-events.component.scss'],
})
export class DemoAmapBezierCurveEventsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-bezier-curve-events.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-bezier-curve-events.component.ts').default; // DEMO IGNORE
  hide = false;
  path = [
    [116.39, 39.91, 116.37, 39.91],
    [116.380298, 39.907771, 116.38, 39.9],
    [116.385298, 39.907771, 116.4, 39.9],
    [[116.392872, 39.887391], [116.40772, 39.909252], [116.41, 39.89]],
    [116.423857, 39.889498, 116.422312, 39.899639, 116.425273, 39.902273],
  ];
  options = {
    path: this.path,
    isOutline: true,
    outlineColor: '#ffeeff',
    borderWeight: 3,
    strokeColor: '#3366FF',
    strokeOpacity: 1,
    strokeWeight: 6,
    strokeStyle: 'solid',
    strokeDasharray: [10, 10],
    lineJoin: 'round',
    lineCap: 'round',
    zIndex: 50,
  };

  constructor() {}

  ngOnInit() {}

  onBezierCurveEvent(event: any, type: string) {
    console.log('bezierCurve event:', type, event);
  }

  onEditorEvent(event: any, type: string) {
    console.log('bezierCurve editor event:', type, event);
  }

  onPolyEditorEvent(event: any, type: string) {
    console.log('polyline editor event:', type, event);
  }
}
