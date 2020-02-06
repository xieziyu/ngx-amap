import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AmapRectangleDirective } from 'ngx-amap';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-rectangle-methods',
  templateUrl: './demo-amap-rectangle-methods.component.html',
  styleUrls: ['./demo-amap-rectangle-methods.component.scss'],
})
export class DemoAmapRectangleMethodsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-rectangle-methods.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-rectangle-methods.component.ts').default; // DEMO IGNORE
  bounds: AMap.Bounds;
  editor = false;
  constructor(private msg: NzMessageService) {}

  ngOnInit() {}

  onChartReady() {
    const southWest = new AMap.LngLat(116.356449, 39.859008);
    const northEast = new AMap.LngLat(116.417901, 39.893797);
    this.bounds = new AMap.Bounds(southWest, northEast);
  }

  getMethods(p: AmapRectangleDirective) {
    if (p) {
      this.msg.info('请查看 console 输出');
      p.get().subscribe(v => {
        console.log('getOptions():', v.getOptions());
        console.log('getBounds():', v.getBounds());
        console.log('getArea():', v.getArea());
      });
    }
  }
}
