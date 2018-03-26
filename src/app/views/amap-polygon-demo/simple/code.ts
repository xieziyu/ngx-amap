export const TS = `\
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  polygonArr = [];

  constructor() { }

  ngOnInit() {
    this.polygonArr.push([116.403322, 39.920255]);
    this.polygonArr.push([116.410703, 39.897555]);
    this.polygonArr.push([116.402292, 39.892353]);
    this.polygonArr.push([116.389846, 39.891365]);
  }

}
`;

export const HTML = `\
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-polygon
    [path]="polygonArr"
    [strokeColor]="'#FF33FF'"
    [strokeOpacity]="0.2"
    [strokeWeight]="3"
    [fillColor]="'#1791fc'"
    [fillOpacity]="0.35">
  </amap-polygon>
</ngx-amap>
`;
