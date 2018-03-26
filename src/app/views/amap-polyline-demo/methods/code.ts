export const TS = `\
import { Component, OnInit, ViewChild } from '@angular/core';
import { AmapPolylineDirective } from 'ngx-amap';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  lineArr = [
    [116.368904, 39.913423],
    [116.382122, 39.901176],
    [116.387271, 39.912501],
    [116.398258, 39.904600]
  ];
  editor = false;

  constructor() { }

  ngOnInit() {
  }

  getMethods(polyline) {
    if (polyline) {
      polyline.getOptions().then(v => console.log('getOptions():', v));
      polyline.getPath().then(v => console.log('getPath():', v));
      polyline.getLength().then(v => console.log('getLength():', v));
      polyline.getBounds().then(v => console.log('getBounds():', v));
      polyline.getExtData().then(v => console.log('getExtData():', v));
    }
  }
}`;

export const HTML = `\
<button type="button" class="btn btn-outline-primary" (click)="getMethods(myPolyline)">调用Getter方法</button>
<button type="button" class="btn btn-outline-primary" (click)="editor = !editor">打开/关闭编辑功能</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-polyline #myPolyline="polyline"
    [editor]="editor"
    [path]="lineArr"
    [strokeColor]="'#3366FF'"
    [strokeOpacity]="1"
    [strokeWeight]="5"
    [strokeStyle]="'solid'"
    [strokeDasharray]="[10, 5]">
  </amap-polyline>
</ngx-amap>`;
