export const CODE_HTML = `\
<button type="button" class="btn btn-outline-primary" (click)="getMethods()">调用Getter方法</button>
<button type="button" class="btn btn-outline-primary" (click)="checkContains()">判断contains方法</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-circle
    [center]="[116.403322, 39.920255]"
    [radius]="1000"
    [strokeColor]="'#F33'"
    [strokeOpacity]="1"
    [strokeWeight]="3"
    [fillColor]="'#ee2200'"
    [fillOpacity]="0.35">
  </amap-circle>
  <amap-marker [position]="marker1" title="marker1" [label]="{offset: {x: 20, y: 20}, content: 'marker1'}"></amap-marker>
  <amap-marker [position]="marker2" title="marker2" [label]="{offset: {x: 20, y: 20}, content: 'marker2'}"></amap-marker>
</ngx-amap>
`;

export const CODE_TS = `\
import { Component, OnInit, ViewChild } from '@angular/core';
import { AmapCircleDirective } from 'ngx-amap';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  @ViewChild(AmapCircleDirective) circle: AmapCircleDirective;
  marker1 = [116.403322, 39.920255];
  marker2 = [116.382122, 39.901176];

  constructor() { }

  ngOnInit() {
  }

  getMethods() {
    if (this.circle) {
      this.circle.getCenter().then(v => console.log('getCenter():', v));
      this.circle.getRadius().then(v => console.log('getRadius():', v));
      this.circle.getOptions().then(v => console.log('getOptions():', v));
      this.circle.getBounds().then(v => console.log('getBounds():', v));
      this.circle.getExtData().then(v => console.log('getExtData():', v));
    }
  }

  checkContains() {
    if (this.circle) {
      this.circle.contains(this.marker1).then(v => console.log('contains marker1: ', v));
      this.circle.contains(this.marker2).then(v => console.log('contains marker2: ', v));
    }
  }
}`;
