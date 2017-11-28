export const CODE_TS = `\
import { Component, OnInit } from '@angular/core';
import { AmapGeocoderService, AmapGeocoderWrapper } from 'ngx-amap';

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.scss']
})
export class EncodeComponent implements OnInit {
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
}`;

export const CODE_HTML = `\
<form (ngSubmit)="query()" class="form-inline">
  <div class="form-group">
    <input type="text" class="form-control" id="address" required [(ngModel)]="address" name="inputAddress" placeholder="输入地址">
  </div>
  <button type="submit" class="btn btn-outline-primary">查询</button>
</form>
<hr>
<ngx-amap class="demo-map" [resizeEnable]="true" [center]="point" [zoom]="16">
  <amap-marker [position]="point">
    <amap-info-window [offset]="{x: 0, y: -30}" [isOpen]="true">
      {{locationInfo}}
    </amap-info-window>
  </amap-marker>
</ngx-amap>`;
