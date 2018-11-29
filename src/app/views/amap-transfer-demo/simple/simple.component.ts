import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AmapTransferService, TransferOptions } from 'ngx-amap';

declare const require: any;
declare const AMap: any;

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit, OnDestroy {
  demo_html = require('!!html-loader!./simple.component.html');
  demo_ts = require('!!raw-loader!./simple.component.ts');

  private _subscription: Subscription;

  constructor(private ts: AmapTransferService) { }

  ngOnInit() {
  }

  async onMapReady(map) {
    // 懒加载AMap.Transfer插件，只有加载完后才可使用AMap.TransferPolicy
    await this.ts.loaded;

    const transferOption: TransferOptions = {
      map: map,
      city: '北京市',
      panel: 'panel',
      policy: AMap.TransferPolicy.LEAST_TIME
    };

    // 使用of方法构造AMap.Transfer插件的Wrapper
    const transfer = await this.ts.of(transferOption);

    // 使用on方法侦听事件：
    this._subscription = transfer.on('complete').subscribe(event => console.log('Transfer event: "complete"', event));
    this._subscription.add(transfer.on('error').subscribe(event => console.log('Transfer event: "error"', event)));

    // 使用插件Wrapper搜索路径
    const { status, result } = await transfer.search([
      { keyword: '地震局', city: '北京' },
      { keyword: '望京西园4区', city: '北京' }
    ]);

    map.setFitView();
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}
