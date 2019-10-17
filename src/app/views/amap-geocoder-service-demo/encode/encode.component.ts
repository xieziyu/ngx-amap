import { Component, OnInit } from '@angular/core';
import { AmapGeocoderService, AmapGeocoderWrapper } from 'ngx-amap';

declare const require: any;

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.scss'],
})
export class EncodeComponent implements OnInit {
  demo_md_html = require('!!html-loader!./encode.component.html');
  demo_md_ts = require('!!raw-loader!./encode.component.ts');

  address: string;
  point: any;
  locationInfo: string;
  private plugin: Promise<AmapGeocoderWrapper>;

  constructor(private AmapGeocoder: AmapGeocoderService) {
    // 使用 AmapGeocoderService 创建 promise wrapper
    this.plugin = AmapGeocoder.of();
  }

  ngOnInit() {}

  query() {
    if (this.address) {
      // 使用AMap.Geocoder.getLocation方法获取地理编码:
      this.plugin
        .then(geocoder => geocoder.getLocation(this.address))
        .then(data => {
          console.log('get location of address:', this.address);
          console.log('status:', data.status);
          console.log('result:', data.result);

          if (data.status === 'complete' && data.result.info === 'OK') {
            this.point = data.result.geocodes[0].location;
            this.locationInfo = data.result.geocodes[0].formattedAddress;
          }
        });
    }
  }
}
