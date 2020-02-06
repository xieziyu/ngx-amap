import { Component, OnInit } from '@angular/core';
import { NgxAmapComponent } from 'ngx-amap';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-marker-methods',
  templateUrl: './demo-amap-marker-methods.component.html',
  styleUrls: ['./demo-amap-marker-methods.component.scss'],
})
export class DemoAmapMarkerMethodsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-marker-methods.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-marker-methods.component.ts').default; // DEMO IGNORE
  car: AMap.Marker;
  passedPath: number[][];
  lineArr = [
    [116.478935, 39.997761],
    [116.478939, 39.997825],
    [116.478912, 39.998549],
    [116.478912, 39.998549],
    [116.478998, 39.998555],
    [116.478998, 39.998555],
    [116.479282, 39.99856],
    [116.479658, 39.998528],
    [116.480151, 39.998453],
    [116.480784, 39.998302],
    [116.480784, 39.998302],
    [116.481149, 39.998184],
    [116.481573, 39.997997],
    [116.481863, 39.997846],
    [116.482072, 39.997718],
    [116.482362, 39.997718],
    [116.483633, 39.998935],
    [116.48367, 39.998968],
    [116.484648, 39.999861],
  ].map(path => new AMap.LngLat(path[0], path[1]));

  constructor() {}

  ngOnInit() {}

  startMove() {
    if (this.car) {
      this.car.moveAlong(this.lineArr, 500);
    }
  }

  pauseMove() {
    if (this.car) {
      this.car.pauseMove();
    }
  }

  resumeMove() {
    if (this.car) {
      this.car.resumeMove();
    }
  }

  stopMove() {
    if (this.car) {
      this.car.stopMove();
    }
  }

  onMoving(event) {
    this.passedPath = event.passedPath;
  }

  onMarkerReady(amap: NgxAmapComponent, marker: AMap.Marker) {
    this.car = marker;
    amap.get().subscribe(map => map.setFitView());
  }
}
