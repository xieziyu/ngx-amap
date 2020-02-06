import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AmapBezierCurveDirective } from 'ngx-amap';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-bezier-curve-methods',
  templateUrl: './demo-amap-bezier-curve-methods.component.html',
  styleUrls: ['./demo-amap-bezier-curve-methods.component.scss'],
})
export class DemoAmapBezierCurveMethodsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-bezier-curve-methods.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-bezier-curve-methods.component.ts').default; // DEMO IGNORE
  path = [
    [116.39, 39.91, 116.37, 39.91],
    [116.380298, 39.907771, 116.38, 39.9],
    [116.385298, 39.907771, 116.4, 39.9],
    [[116.392872, 39.887391], [116.40772, 39.909252], [116.41, 39.89]],
    [116.423857, 39.889498, 116.422312, 39.899639, 116.425273, 39.902273],
  ];
  editor = false;
  constructor(private msg: NzMessageService) {}

  ngOnInit() {}

  getMethods(p: AmapBezierCurveDirective) {
    if (p) {
      this.msg.info('请查看 console 输出');
      p.get().subscribe(v => {
        console.log('getOptions():', v.getOptions());
        console.log('getPath():', v.getPath());
        console.log('getLength():', v.getLength());
        console.log('getBounds():', v.getBounds());
        console.log('getExtData():', v.getBounds());
      });
    }
  }
}
