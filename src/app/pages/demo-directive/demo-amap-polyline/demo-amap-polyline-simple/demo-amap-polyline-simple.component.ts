import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-polyline-simple',
  templateUrl: './demo-amap-polyline-simple.component.html',
  styleUrls: ['./demo-amap-polyline-simple.component.scss'],
})
export class DemoAmapPolylineSimpleComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-polyline-simple.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-polyline-simple.component.ts').default; // DEMO IGNORE
  lineArr = [
    [116.368904, 39.913423],
    [116.382122, 39.901176],
    [116.387271, 39.912501],
    [116.398258, 39.9046],
  ];

  constructor() {}

  ngOnInit() {}
}
