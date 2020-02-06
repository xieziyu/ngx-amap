import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AmapEllipseDirective } from 'ngx-amap';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-ellipse-methods',
  templateUrl: './demo-amap-ellipse-methods.component.html',
  styleUrls: ['./demo-amap-ellipse-methods.component.scss'],
})
export class DemoAmapEllipseMethodsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-ellipse-methods.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-ellipse-methods.component.ts').default; // DEMO IGNORE
  editor = false;
  marker1: AMap.LocationValue = [116.403322, 39.920255];
  marker2: AMap.LocationValue = [116.382122, 39.901176];
  constructor(private msg: NzMessageService) {}

  ngOnInit() {}

  getMethods(p: AmapEllipseDirective) {
    if (p) {
      this.msg.info('请查看 console 输出');
      p.get().subscribe(v => {
        console.log('getOptions():', v.getOptions());
        console.log('getBounds():', v.getBounds());
        console.log('getCenter():', v.getCenter());
        console.log('getExtData():', v.getExtData());
      });
    }
  }

  checkContains(p: AmapEllipseDirective) {
    if (p) {
      p.get().subscribe(v => {
        const c1 = v.contains(this.marker1);
        const c2 = v.contains(this.marker2);
        this.msg.info(`contains: marker1 ${c1} | marker2 ${c2}`);
      });
    }
  }
}
