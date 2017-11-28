import { Component, OnInit } from '@angular/core';
import { AmapGeocoderService, AmapGeocoderWrapper } from 'ngx-amap';
import { CODE_TS, CODE_HTML } from './code';

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.scss']
})
export class EncodeComponent implements OnInit {
  demo_md_html = CODE_HTML;
  demo_md_ts = CODE_TS;
  address: string;
  point: any;
  locationInfo: string;
  private geoPromise: Promise<AmapGeocoderWrapper>;

  constructor(private AmapGeocoder: AmapGeocoderService) {
    // 使用 AmapGeocoderService 创建 promise wrapper
    this.geoPromise = AmapGeocoder.of();
  }

  ngOnInit() {}

  query() {
    if (this.address) {
      // 使用AMap.Geocoder.getLocation方法获取地理编码:
      this.geoPromise.then(geocoder => geocoder.getLocation(this.address))
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
