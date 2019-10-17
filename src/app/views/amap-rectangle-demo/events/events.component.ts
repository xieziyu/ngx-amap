import { Component, OnInit } from '@angular/core';
import { AMapClass } from 'ngx-amap/types/class';

declare const require: any;
declare const AMap: AMapClass;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  code_ts = require('!!raw-loader!./events.component.ts');
  code_html = require('!!html-loader!./events.component.html');

  hide = false;
  options = {};

  constructor() {}

  ngOnInit() {}

  onMapReady() {
    const southWest = new AMap.LngLat(116.376533, 39.907878);
    const northEast = new AMap.LngLat(116.414124, 39.940799);
    const bounds = new AMap.Bounds(southWest, northEast);
    this.options = {
      bounds: bounds,
      strokeColor: 'red',
      strokeWeight: 10,
      strokeOpacity: 0.5,
      strokeDasharray: [30, 10],
      strokeStyle: 'dashed',
      fillColor: 'blue',
      fillOpacity: 0.5,
      zIndex: 10,
      bubble: true,
    };
  }

  onEvent(event: any, type: string) {
    console.log('rectangle event:', type, event);
  }

  onEditorEvent(event: any, type: string) {
    console.log('rectangle editor event:', type, event);
  }
}
