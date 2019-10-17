import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { AmapMarkerDirective } from 'ngx-amap';

declare const require: any;

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss'],
})
export class MethodsComponent implements OnInit, AfterViewInit {
  demo_md_html = require('!!html-loader!./methods.component.html');
  demo_md_ts = require('!!raw-loader!./methods.component.ts');

  lineArr: number[][];
  passedPath: number[][];
  car: AmapMarkerDirective;

  @ViewChildren(AmapMarkerDirective) markers: QueryList<AmapMarkerDirective>;

  constructor() {}

  ngOnInit() {
    this.lineArr = [];
    let lngX = 116.397428,
      latY = 39.90923;
    this.lineArr.push([lngX, latY]);
    for (let i = 1; i < 4; i++) {
      lngX = lngX + Math.random() * 0.05;
      if (i % 2) {
        latY = latY + Math.random() * 0.0001;
      } else {
        latY = latY + Math.random() * 0.06;
      }
      this.lineArr.push([lngX, latY]);
    }
  }

  ngAfterViewInit() {
    this.car = this.markers.last;
  }

  startMove() {
    this.car.moveAlong(this.lineArr, 500);
  }

  pauseMove() {
    this.car.pauseMove();
  }

  resumeMove() {
    this.car.resumeMove();
  }

  stopMove() {
    this.car.stopMove();
  }

  onMarkerReady(map: any) {
    map.setFitView();
  }
}
