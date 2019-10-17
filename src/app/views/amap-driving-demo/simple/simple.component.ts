import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AmapDrivingService } from 'ngx-amap';

declare const require: any;

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
})
export class SimpleComponent implements OnInit, OnDestroy {
  demo_html = require('!!html-loader!./simple.component.html');
  demo_ts = require('!!raw-loader!./simple.component.ts');

  private _subscription: Subscription;

  constructor(private ds: AmapDrivingService) {}

  ngOnInit() {}

  async onMapReady(map) {
    // 使用of方法构造AMap.Driving插件的Wrapper
    const driving = await this.ds.of({
      map: map,
      panel: 'panel',
    });

    // 使用on方法侦听事件：
    this._subscription = driving
      .on('complete')
      .subscribe(event => console.log('Driving event: "complete"', event));
    this._subscription.add(
      driving.on('error').subscribe(event => console.log('Driving event: "error"', event)),
    );

    // 使用插件Wrapper搜索路径
    const { status, result } = await driving.search([
      { keyword: '北京市地震局(公交站)', city: '北京' },
      { keyword: '亦庄文化园(地铁站)', city: '北京' },
    ]);

    map.setFitView();
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
