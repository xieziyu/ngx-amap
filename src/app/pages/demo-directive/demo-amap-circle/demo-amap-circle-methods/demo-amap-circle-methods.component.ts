import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AmapCircleDirective } from 'ngx-amap';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-circle-methods',
  templateUrl: './demo-amap-circle-methods.component.html',
  styleUrls: ['./demo-amap-circle-methods.component.scss'],
})
export class DemoAmapCircleMethodsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-circle-methods.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-circle-methods.component.ts').default; // DEMO IGNORE
  editor = false;
  marker1: AMap.LocationValue = [116.403322, 39.920255];
  marker2: AMap.LocationValue = [116.382122, 39.901176];
  constructor(private msg: NzMessageService) {}

  ngOnInit() {}

  getMethods(p: AmapCircleDirective) {
    if (p) {
      this.msg.info('请查看 console 输出');
      p.get().subscribe(v => {
        console.log('getOptions():', v.getOptions());
        console.log('getBounds():', v.getBounds());
        console.log('getRadius():', v.getRadius());
        console.log('getCenter():', v.getCenter());
        console.log('getExtData():', v.getExtData());
      });
    }
  }

  checkContains(p: AmapCircleDirective) {
    if (p) {
      p.get().subscribe(v => {
        const c1 = v.contains(this.marker1);
        const c2 = v.contains(this.marker2);
        this.msg.info(`contains: marker1 ${c1} | marker2 ${c2}`);
      });
    }
  }
}
