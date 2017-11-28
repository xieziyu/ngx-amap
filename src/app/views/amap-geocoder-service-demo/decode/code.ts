export const CODE_TS = `\
import { Component, OnInit } from '@angular/core';
import { AmapGeocoderService, AmapGeocoderWrapper } from 'ngx-amap';

@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.scss']
})
export class DecodeComponent implements OnInit {
  address: string;
  point: any;
  locationInfo: string;
  private geoPromise: Promise<AmapGeocoderWrapper>;

  constructor(private AmapGeocoder: AmapGeocoderService) {
    // 使用 AmapGeocoderService 创建 promise wrapper
    this.geoPromise = AmapGeocoder.of();
  }

  ngOnInit() {
  }

  onMapClick(e) {
    this.point = e.lnglat;
    this.locationInfo = \`经纬度： \${this.point.getLng()}, \${this.point.getLat()}\`;

    if (this.point) {
      // 使用AMap.Geocoder.getAddress方法逆向地理编码:
      this.geoPromise.then(geocoder => geocoder.getAddress(this.point))
        .then(data => {
          console.log('get address of position:', this.point);
          console.log('status:', data.status);
          console.log('result:', data.result);

          if (data.status === 'complete' && data.result.info === 'OK') {
            this.address = data.result.regeocode.formattedAddress;
          }
        });
    }
  }
}`;

export const CODE_HTML = `\
<div class="alert alert-info">点击地图查询地址：{{address}}</div>
<hr>
<ngx-amap class="demo-map" [resizeEnable]="true" [zoom]="13" (mapClick)="onMapClick($event)">
  <amap-marker [position]="point">
    <amap-info-window [offset]="{x: 0, y: -30}" [isOpen]="true">
      {{locationInfo}}
    </amap-info-window>
  </amap-marker>
</ngx-amap>`;
