import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AmapWalkingService, WalkingOptions } from 'ngx-amap';

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

  constructor(private ts: AmapWalkingService) { }

  ngOnInit() {
  }

  async onMapReady(map) {
    const walkingOpts: WalkingOptions = {
      map: map,
      panel: 'panel'
    };

    // 使用of方法构造AMap.Walking插件的Wrapper
    const walking = await this.ts.of(walkingOpts);

    // 使用on方法侦听事件：
    this._subscription = walking.on('complete').subscribe(event => console.log('Walking event: "complete"', event));
    this._subscription.add(walking.on('error').subscribe(event => console.log('Walking event: "error"', event)));

    // 使用插件Wrapper搜索路径
    const { status, result } = await walking.search([
      { keyword: '北京市地震局(公交站)', city: '北京' },
      { keyword: '亦庄文化园(地铁站)', city: '北京' }
    ]);

    map.setFitView();
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}
