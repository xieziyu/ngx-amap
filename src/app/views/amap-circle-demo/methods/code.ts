export const CODE_HTML = `\
<button type="button" class="btn btn-outline-primary" (click)="getMethods(myCircle)">调用Getter方法</button>
<button type="button" class="btn btn-outline-primary" (click)="checkContains(myCircle)">判断contains方法</button>
<button type="button" class="btn btn-outline-primary" (click)="editor = !editor">打开/关闭编辑功能</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-circle #myCircle="circle"
    [editor]="editor"
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
</ngx-amap>`;

export const CODE_TS = `\
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  marker1 = [116.403322, 39.920255];
  marker2 = [116.382122, 39.901176];

  editor = false;

  constructor() { }

  ngOnInit() {
  }

  getMethods(circle) {
    if (circle) {
      circle.getCenter().then(v => console.log('getCenter():', v));
      circle.getRadius().then(v => console.log('getRadius():', v));
      circle.getOptions().then(v => console.log('getOptions():', v));
      circle.getBounds().then(v => console.log('getBounds():', v));
      circle.getExtData().then(v => console.log('getExtData():', v));
    }
  }

  checkContains(circle) {
    if (circle) {
      circle.contains(this.marker1).then(v => console.log('contains marker1: ', v));
      circle.contains(this.marker2).then(v => console.log('contains marker2: ', v));
    }
  }
}`;
