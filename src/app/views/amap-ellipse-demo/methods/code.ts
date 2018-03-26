export const TS = `\
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  marker1 = [116.403322, 39.920255];
  marker2 = [116.382122, 39.901176];

  constructor() { }

  ngOnInit() {
  }

  getMethods(ellipse) {
    if (ellipse) {
      ellipse.getCenter().then(v => console.log('getCenter():', v));
      ellipse.getOptions().then(v => console.log('getOptions():', v));
      ellipse.getBounds().then(v => console.log('getBounds():', v));
      ellipse.getExtData().then(v => console.log('getExtData():', v));
    }
  }

  checkContains(ellipse) {
    if (ellipse) {
      ellipse.contains(this.marker1).then(v => console.log('contains marker1: ', v));
      ellipse.contains(this.marker2).then(v => console.log('contains marker2: ', v));
    }
  }
}
`;

export const HTML = `\
<button type="button" class="btn btn-outline-primary" (click)="getMethods(myEllipse)">调用Getter方法</button>
<button type="button" class="btn btn-outline-primary" (click)="checkContains(myEllipse)">判断contains方法</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-ellipse #myEllipse="ellipse"
    [center]="[116.403322, 39.920255]"
    [radius]="[2000, 1000]"
    [strokeColor]="'#F33'"
    [strokeOpacity]="1"
    [strokeWeight]="3"
    [fillColor]="'#ee2200'"
    [fillOpacity]="0.35"
    strokeStyle="dashed">
  </amap-ellipse>
  <amap-marker [position]="marker1" title="marker1" [label]="{offset: {x: 20, y: 20}, content: 'marker1'}"></amap-marker>
  <amap-marker [position]="marker2" title="marker2" [label]="{offset: {x: 20, y: 20}, content: 'marker2'}"></amap-marker>
</ngx-amap>`;
