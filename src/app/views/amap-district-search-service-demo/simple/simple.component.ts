import { Component, OnInit } from '@angular/core';
import { AmapDistrictSearchService } from 'ngx-amap';
import { AMapClass } from 'ngx-amap/types/class';

declare const require: any;
declare const AMap: AMapClass;

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
})
export class SimpleComponent implements OnInit {
  demo_md_html = require('!!html-loader!./simple.component.html');
  demo_md_ts = require('!!raw-loader!./simple.component.ts');

  constructor(private amapDistrictSearch: AmapDistrictSearchService) {}

  ngOnInit() {}

  async onMapReady(map) {
    const wrapper = await this.amapDistrictSearch.of({
      subdistrict: 1, // 返回下一级行政区
      extensions: 'all', // 返回行政区边界坐标组等具体信息
      level: 'district', // 查询行政级别为 市
    });

    const { status, result } = await wrapper.search('朝阳区');
    console.log('district search for 朝阳区');
    console.log('status:', status);
    console.log('result:', result);

    if (typeof result === 'string') {
      return;
    }

    const bounds = result.districtList[0].boundaries;
    bounds.forEach(e => {
      return new AMap.Polygon({
        map,
        strokeWeight: 1,
        path: e,
        fillOpacity: 0.7,
        fillColor: '#CCF3FF',
        strokeColor: '#CC66CC',
      });
    });
    map.setFitView();
  }
}
