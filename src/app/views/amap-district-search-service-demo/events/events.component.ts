import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AmapDistrictSearchService, AmapDistrictSearchWrapper } from 'ngx-amap';
import { CODE_HTML, CODE_TS } from './code';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
  demo_md_html = CODE_HTML;
  demo_md_ts = CODE_TS;
  private _subscription: Subscription;

  private plugin: Promise<AmapDistrictSearchWrapper>;

  constructor(private amapDistrictSearch: AmapDistrictSearchService) {
  }

  ngOnInit() {
    // 构造地点查询 wrapper promise:
    this.plugin = this.amapDistrictSearch.of({
      subdistrict: 1,   // 返回下一级行政区
      extensions: 'all',  // 返回行政区边界坐标组等具体信息
      level: 'district'  // 查询行政级别为 市
    });

    // 绑定事件侦听：
    this.plugin.then(districtSearch => {
      this._subscription = districtSearch.on('complete').subscribe(event => console.log('DistrictSearch event: "complete"', event));
      this._subscription.add(districtSearch.on('error').subscribe(event => console.log('DistrictSearch event: "error"', event)));
    });

    this.plugin.then(districtSearch => districtSearch.search('朝阳区'));
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
