import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AmapPolylineDirective } from 'ngx-amap';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-polyline-methods',
  templateUrl: './demo-amap-polyline-methods.component.html',
  styleUrls: ['./demo-amap-polyline-methods.component.scss'],
})
export class DemoAmapPolylineMethodsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-polyline-methods.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-polyline-methods.component.ts').default; // DEMO IGNORE
  lineArr = [
    [116.368904, 39.913423],
    [116.382122, 39.901176],
    [116.387271, 39.912501],
    [116.398258, 39.9046],
  ];
  editor = false;
  constructor(private msg: NzMessageService) {}

  ngOnInit() {}

  getMethods(p: AmapPolylineDirective) {
    if (p) {
      this.msg.info('请查看 console 输出');
      p.get().subscribe(v => {
        console.log('getOptions():', v.getOptions());
        console.log('getPath():', v.getPath());
        console.log('getBounds():', v.getBounds());
        console.log('getExtData():', v.getBounds());
      });
    }
  }
}
