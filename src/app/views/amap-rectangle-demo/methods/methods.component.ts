import { Component, OnInit } from '@angular/core';
import { AMapClass, Bounds, Map } from 'ngx-amap/types/class';
import { TS, HTML } from './code';

declare const AMap: AMapClass;

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  code_ts = TS;
  code_html = HTML;

  bounds: Bounds;

  marker1 = [116.403322, 39.920255];
  marker2 = [116.382122, 39.901176];

  editor = false;

  constructor() { }

  ngOnInit() {
  }

  onMapReady() {
    let southWest = new AMap.LngLat(116.376533, 39.907878);
    let northEast = new AMap.LngLat(116.414124, 39.940799);
    this.bounds = new AMap.Bounds(southWest, northEast);
  }

  getMethods(rectangle) {
    if (rectangle) {
      rectangle.getBounds().then(v => console.log('getBounds():', v));
      rectangle.getOptions().then(v => console.log('getOptions():', v));
      rectangle.getExtData().then(v => console.log('getExtData():', v));
    }
  }

  checkContains(rectangle) {
    if (rectangle) {
      rectangle.contains(this.marker1).then(v => console.log('contains marker1: ', v));
      rectangle.contains(this.marker2).then(v => console.log('contains marker2: ', v));
    }
  }
}
