import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-bezier-curve-simple',
  templateUrl: './demo-amap-bezier-curve-simple.component.html',
  styleUrls: ['./demo-amap-bezier-curve-simple.component.scss'],
})
export class DemoAmapBezierCurveSimpleComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-bezier-curve-simple.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-bezier-curve-simple.component.ts').default; // DEMO IGNORE
  path = [
    [116.39, 39.91, 116.37, 39.91],
    [116.380298, 39.907771, 116.38, 39.9],
    [116.385298, 39.907771, 116.4, 39.9],
    [[116.392872, 39.887391], [116.40772, 39.909252], [116.41, 39.89]],
    [116.423857, 39.889498, 116.422312, 39.899639, 116.425273, 39.902273],
  ];

  constructor() {}

  ngOnInit() {}
}
