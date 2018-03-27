import { Component, OnInit } from '@angular/core';
import { AMapClass, Bounds, Map } from 'ngx-amap/types/class';
import { TS, HTML } from './code';

declare const AMap: AMapClass;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  code_ts = TS;
  code_html = HTML;

  hide = false;
  options = {};

  constructor() { }

  ngOnInit() {
  }

  onMapReady() {
    let southWest = new AMap.LngLat(116.376533, 39.907878);
    let northEast = new AMap.LngLat(116.414124, 39.940799);
    let bounds = new AMap.Bounds(southWest, northEast);
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
      bubble: true
    };
  }

  onEvent(event: any, type: string) {
    console.log('rectangle event:', type, event);
  }

  onEditorEvent(event: any, type: string) {
    console.log('rectangle editor event:', type, event);
  }
}
