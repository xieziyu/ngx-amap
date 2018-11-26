import { Component, OnInit } from '@angular/core';
import { AmapDrivingService } from 'ngx-amap';

declare const require: any;

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  demo_html = require('!!html-loader!./simple.component.html');
  demo_ts = require('!!raw-loader!./simple.component.ts');

  constructor(private ds: AmapDrivingService) { }

  ngOnInit() {
  }

  async onMapReady(map) {
    // 构造AMap.Driving插件的Wrapper
    const driving = await this.ds.of({
      map: map,
      panel: 'panel'
    });

    // 使用插件Wrapper搜索路径，这里使用起点和终点的地名
    const { status, result } = await driving.search([
      { keyword: '北京市地震局(公交站)', city: '北京' },
      { keyword: '亦庄文化园(地铁站)', city: '北京' }
    ]);
    console.log('driving search');
    console.log('status:', status);
    console.log('result:', result);

    if (typeof result === 'string') {
      return;
    }

    map.setFitView();
  }
}
