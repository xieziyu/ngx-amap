import { Component, OnInit, ViewChild } from '@angular/core';
import { AmapPolylineDirective } from 'ngx-amap';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  demo_md_html = `\
<button type="button" class="btn btn-outline-primary" (click)="getMethods()">调用Getter方法</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-polyline
    [path]="lineArr"
    [strokeColor]="'#3366FF'"
    [strokeOpacity]="1"
    [strokeWeight]="5"
    [strokeStyle]="'solid'"
    [strokeDasharray]="[10, 5]">
  </amap-polyline>
</ngx-amap>
`;
  demo_md_ts = `
import { Component, OnInit, ViewChild } from '@angular/core';
import { AmapPolylineDirective } from 'ngx-amap';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  @ViewChild(AmapPolylineDirective) polyline: AmapPolylineDirective;

  lineArr = [
    [116.368904, 39.913423],
    [116.382122, 39.901176],
    [116.387271, 39.912501],
    [116.398258, 39.904600]
  ];

  constructor() { }

  ngOnInit() {
  }

  getMethods() {
    if (this.polyline) {
      this.polyline.getOptions().then(v => console.log('getOptions():', v));
      this.polyline.getPath().then(v => console.log('getPath():', v));
      this.polyline.getLength().then(v => console.log('getLength():', v));
      this.polyline.getBounds().then(v => console.log('getBounds():', v));
      this.polyline.getExtData().then(v => console.log('getExtData():', v));
    }
  }
}
`;

  @ViewChild(AmapPolylineDirective) polyline: AmapPolylineDirective;

  lineArr = [
    [116.368904, 39.913423],
    [116.382122, 39.901176],
    [116.387271, 39.912501],
    [116.398258, 39.904600]
  ];

  constructor() { }

  ngOnInit() {
  }

  getMethods() {
    if (this.polyline) {
      this.polyline.getOptions().then(v => console.log('getOptions():', v));
      this.polyline.getPath().then(v => console.log('getPath():', v));
      this.polyline.getLength().then(v => console.log('getLength():', v));
      this.polyline.getBounds().then(v => console.log('getBounds():', v));
      this.polyline.getExtData().then(v => console.log('getExtData():', v));
    }
  }
}
