export const TS = `\
import { Component, OnInit } from '@angular/core';
import { AMapClass, Bounds, Map } from 'ngx-amap/types/class';

declare const AMap: AMapClass;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
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
      bubble: true,
      cursor: 'pointer',
      draggable: true
    };
  }

  onEvent(event: any, type: string) {
    console.log('ellipse event:', type, event);
  }
}`;

export const HTML = `\
<button type="button" class="btn btn-outline-primary" (click)="hide = !hide">触发显示隐藏事件</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13" (ready)="onMapReady()">
  <amap-rectangle [options]="options" [hidden]="hide"
    (rectangleClick)="onEvent($event, 'rectangleClick')"
    (ready)="onEvent($event, 'ready')"
    (dblClick)="onEvent($event, 'dblClick')"
    (rightClick)="onEvent($event, 'rightClick')"
    (rectangleHide)="onEvent($event, 'rectangleHide')"
    (rectangleShow)="onEvent($event, 'rectangleShow')"
    (mouseDown)="onEvent($event, 'mouseDown')"
    (mouseUp)="onEvent($event, 'mouseUp')"
    (mouseOver)="onEvent($event, 'mouseOver')"
    (mouseOut)="onEvent($event, 'mouseOut')"
    (change)="onEvent($event, 'change')"
    (touchStart)="onEvent($event, 'touchStart')"
    (touchMove)="onEvent($event, 'touchMove')"
    (touchEnd)="onEvent($event, 'touchEnd')"
  ></amap-rectangle>
</ngx-amap>`;
