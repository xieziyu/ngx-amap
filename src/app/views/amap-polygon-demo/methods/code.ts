export const TS = `\
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  polygonArr = [];

  constructor() { }

  ngOnInit() {
    this.polygonArr.push([116.403322, 39.920255]);
    this.polygonArr.push([116.410703, 39.897555]);
    this.polygonArr.push([116.402292, 39.892353]);
    this.polygonArr.push([116.389846, 39.891365]);
  }

  getMethods(polygon) {
    if (polygon) {
      polygon.getOptions().then(v => console.log('getOptions():', v));
      polygon.getPath().then(v => console.log('getPath():', v));
      polygon.getBounds().then(v => console.log('getBounds():', v));
      polygon.getExtData().then(v => console.log('getExtData():', v));
    }
  }
}
`;

export const HTML = `\
<button type="button" class="btn btn-outline-primary" (click)="getMethods(myPolygon)">调用Getter方法</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-polygon #myPolygon="polygon"
    [path]="polygonArr"
    [strokeColor]="'#FF33FF'"
    [strokeOpacity]="0.2"
    [strokeWeight]="3"
    [fillColor]="'#1791fc'"
    [fillOpacity]="0.35">
  </amap-polygon>
</ngx-amap>`;
