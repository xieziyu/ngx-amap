import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-rectangle-simple',
  templateUrl: './demo-amap-rectangle-simple.component.html',
  styleUrls: ['./demo-amap-rectangle-simple.component.scss'],
})
export class DemoAmapRectangleSimpleComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-rectangle-simple.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-rectangle-simple.component.ts').default; // DEMO IGNORE
  bounds: AMap.Bounds;

  constructor() {}

  ngOnInit() {}

  onChartReady() {
    const southWest = new AMap.LngLat(116.356449, 39.859008);
    const northEast = new AMap.LngLat(116.417901, 39.893797);
    this.bounds = new AMap.Bounds(southWest, northEast);
  }
}
