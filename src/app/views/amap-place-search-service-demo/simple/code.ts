export const CODE_TS = `\
import { Component, OnInit } from '@angular/core';
import { AmapPlaceSearchService, AmapPlaceSearchWrapper } from 'ngx-amap';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  private plugin: Promise<AmapPlaceSearchWrapper>;

  constructor(private amapPlaceSearch: AmapPlaceSearchService) { }

  ngOnInit() {
  }

  onMapReady(map) {
    // 构造地点查询 wrapper promise:
    this.plugin = this.amapPlaceSearch.of({
      pageSize: 5,
      pageIndex: 1,
      city: '010', // 城市
      map: map,
      panel: 'panel'
    });

    this.plugin.then(placeSearch => placeSearch.search('北京大学'))
        .then(data => {
          console.log('place search for 北京大学');
          console.log('status:', data.status);
          console.log('result:', data.result);
        });
  }
}`;

export const CODE_HTML = `\
<div class="relative">
  <div id="panel"></div>
  <ngx-amap class="demo-map-lg" [resizeEnable]="true" (ready)="onMapReady($event)"></ngx-amap>
</div>`;
