import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-info-window-marker',
  templateUrl: './demo-amap-info-window-marker.component.html',
  styleUrls: ['./demo-amap-info-window-marker.component.scss'],
})
export class DemoAmapInfoWindowMarkerComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-info-window-marker.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-info-window-marker.component.ts').default; // DEMO IGNORE

  markers = [
    [116.368904, 39.923423],
    [116.382122, 39.921176],
    [116.387271, 39.922501],
    [116.398258, 39.9146],
  ];

  infoWindowOffset = {
    x: 0,
    y: -30,
  };

  constructor() {}

  ngOnInit() {}
}
