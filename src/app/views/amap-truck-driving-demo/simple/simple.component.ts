import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AmapTruckDrivingService } from 'ngx-amap';

declare const require: any;

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit, OnDestroy {
  demo_html = require('!!html-loader!./simple.component.html');
  demo_ts = require('!!raw-loader!./simple.component.ts');

  private _subscription: Subscription;

  constructor(private ds: AmapTruckDrivingService) { }

  ngOnInit() {
  }

  async onMapReady(map) {
    // 使用of方法构造AMap.TruckDriving插件的Wrapper
    const driving = await this.ds.of({
      map: map,
      policy: 0,
      size: 1,
      panel: 'panel'
    });

    // 使用on方法侦听事件：
    this._subscription = driving.on('complete').subscribe(event => console.log('TruckDriving event: "complete"', event));
    this._subscription.add(driving.on('error').subscribe(event => console.log('TruckDriving event: "error"', event)));

    // 使用插件Wrapper搜索路径
    const { status, result } = await driving.search([
      { keyword: '北京站', city: '010' },     // 起点
      { keyword: '北京西站', city: '010' },   // 途径
      { keyword: '北京大学', city: '010' }    // 终点
    ]);

    map.setFitView();
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}
