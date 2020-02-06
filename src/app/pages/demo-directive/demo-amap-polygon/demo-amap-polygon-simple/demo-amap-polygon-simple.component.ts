import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-polygon-simple',
  templateUrl: './demo-amap-polygon-simple.component.html',
  styleUrls: ['./demo-amap-polygon-simple.component.scss'],
})
export class DemoAmapPolygonSimpleComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-polygon-simple.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-polygon-simple.component.ts').default; // DEMO IGNORE
  polygonArr = [
    [116.403322, 39.920255],
    [116.410703, 39.897555],
    [116.402292, 39.892353],
    [116.389846, 39.891365],
  ];

  constructor() {}

  ngOnInit() {}
}
