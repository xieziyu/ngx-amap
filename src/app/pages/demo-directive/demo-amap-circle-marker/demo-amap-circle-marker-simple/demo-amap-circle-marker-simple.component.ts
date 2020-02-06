import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-circle-marker-simple',
  templateUrl: './demo-amap-circle-marker-simple.component.html',
  styleUrls: ['./demo-amap-circle-marker-simple.component.scss'],
})
export class DemoAmapCircleMarkerSimpleComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-circle-marker-simple.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-circle-marker-simple.component.ts').default; // DEMO IGNORE
  markers = [
    { center: [116.407394, 39.904211], radius: 10 + Math.random() * 10 },
    { center: [121.473662, 31.230372], radius: 10 + Math.random() * 10 },
    { center: [106.551643, 29.562849], radius: 10 + Math.random() * 10 },
    { center: [113.543028, 22.186835], radius: 10 + Math.random() * 10 },
    { center: [121.509062, 25.044332], radius: 10 + Math.random() * 10 },
    { center: [114.171203, 22.277468], radius: 10 + Math.random() * 10 },
    { center: [117.200983, 39.084158], radius: 10 + Math.random() * 10 },
    { center: [91.117525, 29.647535], radius: 10 + Math.random() * 10 },
  ];

  constructor() {}

  ngOnInit() {}
}
