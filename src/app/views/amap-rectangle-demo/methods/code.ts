export const TS = `\
import { Component, OnInit } from '@angular/core';
import { AMapClass, Bounds, Map } from 'ngx-amap/types/class';

declare const AMap: AMapClass;

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  bounds: Bounds;

  marker1 = [116.403322, 39.920255];
  marker2 = [116.382122, 39.901176];

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
}`;

export const HTML = `\
<button type="button" class="btn btn-outline-primary" (click)="getMethods(myRectangle)">调用Getter方法</button>
<button type="button" class="btn btn-outline-primary" (click)="checkContains(myRectangle)">判断contains方法</button>
<hr>
<ngx-amap #myMap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13" (ready)="onMapReady()">
  <amap-rectangle #myRectangle="rectangle"
    [bounds]="bounds"
    [strokeColor]="'#F33'"
    [strokeOpacity]="1"
    [strokeWeight]="3"
    [fillColor]="'#ee2200'"
    [fillOpacity]="0.35"
    strokeStyle="dashed"
    [draggable]="true"
    (ready)="myMap.setFitView()">
  </amap-rectangle>
  <amap-marker [position]="marker1" title="marker1" [label]="{offset: {x: 20, y: 20}, content: 'marker1'}"></amap-marker>
  <amap-marker [position]="marker2" title="marker2" [label]="{offset: {x: 20, y: 20}, content: 'marker2'}"></amap-marker>
</ngx-amap>`;
