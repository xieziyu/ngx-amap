import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AmapRidingService, RidingOptions } from 'ngx-amap';

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

  constructor(private ts: AmapRidingService) {}

  ngOnInit() {}

  async onMapReady(map) {
    const ridingOpts: RidingOptions = {
      map: map,
      panel: 'panel',
    };

    // 使用of方法构造AMap.Riding插件的Wrapper
    const riding = await this.ts.of(ridingOpts);

    // 使用on方法侦听事件：
    this._subscription = riding
      .on('complete')
      .subscribe(event => console.log('Riding event: "complete"', event));
    this._subscription.add(
      riding.on('error').subscribe(event => console.log('Riding event: "error"', event)),
    );

    // 使用插件Wrapper搜索路径
    const { status, result } = await riding.search([
      { keyword: '临泓路６号院', city: '北京' },
      { keyword: '龙潭公园', city: '北京' },
    ]);

    map.setFitView();
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
