import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AmapPolygonDirective } from 'ngx-amap';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-polygon-methods',
  templateUrl: './demo-amap-polygon-methods.component.html',
  styleUrls: ['./demo-amap-polygon-methods.component.scss'],
})
export class DemoAmapPolygonMethodsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-polygon-methods.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-polygon-methods.component.ts').default; // DEMO IGNORE
  polygonArr = [
    [116.403322, 39.920255],
    [116.410703, 39.897555],
    [116.402292, 39.892353],
    [116.389846, 39.891365],
  ];
  editor = false;
  constructor(private msg: NzMessageService) {}

  ngOnInit() {}

  getMethods(p: AmapPolygonDirective) {
    if (p) {
      this.msg.info('请查看 console 输出');
      p.get().subscribe(v => {
        console.log('getOptions():', v.getOptions());
        console.log('getPath():', v.getPath());
        console.log('getArea():', v.getArea());
      });
    }
  }
}
