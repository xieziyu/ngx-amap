export const CODE_HTML = `\
<button type="button" class="btn btn-outline-primary" (click)="getMethods()">调用Getter方法</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.407394, 39.904211]" [zoom]="8">
  <amap-circle-marker
    [center]="[116.407394, 39.904211]"
    [radius]="12"
    [strokeColor]="'white'"
    [strokeOpacity]="0.5"
    [strokeWeight]="2"
    [fillColor]="'rgba(0,0,255,1)'"
    [fillOpacity]="0.5"
    [zIndex]="10"
    [bubble]="true"
    [cursor]="'pointer'">
  </amap-circle-marker>
</ngx-amap>
`;

export const CODE_TS = `\
import { Component, OnInit, ViewChild } from '@angular/core';
import { AmapCircleMarkerDirective } from 'ngx-amap';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  @ViewChild(AmapCircleMarkerDirective) circle: AmapCircleMarkerDirective;

  constructor() { }

  ngOnInit() {
  }

  getMethods() {
    if (this.circle) {
      this.circle.getCenter().then(v => console.log('getCenter():', v));
      this.circle.getRadius().then(v => console.log('getRadius():', v));
      this.circle.getOptions().then(v => console.log('getOptions():', v));
      this.circle.getExtData().then(v => console.log('getExtData():', v));
    }
  }

}
`;
