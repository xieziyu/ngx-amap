import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AmapPlaceSearchService, AmapPlaceSearchWrapper } from 'ngx-amap';
import { CODE_TS, CODE_HTML } from './code';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
  demo_md_html = CODE_HTML;
  demo_md_ts = CODE_TS;
  private _subscription: Subscription;
  private plugin: Promise<AmapPlaceSearchWrapper>;

  constructor(private amapPlaceSearch: AmapPlaceSearchService) { }

  ngOnInit() {
    // 构造地点查询 wrapper promise:
    // 不在地图上显示markers
    this.plugin = this.amapPlaceSearch.of({
      pageSize: 5,
      pageIndex: 1,
      city: '010',
      panel: 'panel'
    });

    // 绑定事件侦听：
    this.plugin.then(placeSearch => {
      this._subscription = placeSearch.on('complete').subscribe(event => console.log('PlaceSearch event: "complete"', event));
      this._subscription.add(placeSearch.on('error').subscribe(event => console.log('PlaceSearch event: "error"', event)));
      this._subscription.add(placeSearch.on('selectChanged').subscribe(event => console.log('PlaceSearch event: "selectChanged"', event)));
      this._subscription.add(
        placeSearch.on('listElementClick').subscribe(event => console.log('PlaceSearch event: "listElementClick"', event))
      );
      this._subscription.add(
        placeSearch.on('markerClick').subscribe(event => console.log('PlaceSearch event: "markerClick"', event))
      );
    });

    this.plugin.then(placeSearch => placeSearch.search('北京大学'));
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
