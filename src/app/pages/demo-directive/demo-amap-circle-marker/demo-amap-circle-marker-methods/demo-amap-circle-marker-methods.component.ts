import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AmapCircleMarkerDirective } from 'ngx-amap';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-circle-marker-methods',
  templateUrl: './demo-amap-circle-marker-methods.component.html',
  styleUrls: ['./demo-amap-circle-marker-methods.component.scss'],
})
export class DemoAmapCircleMarkerMethodsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-circle-marker-methods.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-circle-marker-methods.component.ts').default; // DEMO IGNORE
  editor = false;
  constructor(private msg: NzMessageService) {}

  ngOnInit() {}

  getMethods(p: AmapCircleMarkerDirective) {
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
}
