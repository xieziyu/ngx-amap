import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { getGridLngLats } from '../../../../shared/utils/get-grid';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-simple-marker-custom-text',
  templateUrl: './demo-simple-marker-custom-text.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./demo-simple-marker-custom-text.component.scss'],
})
export class DemoSimpleMarkerCustomTextComponent implements OnInit {
  html = require('!!html-loader!./demo-simple-marker-custom-text.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-simple-marker-custom-text.component.ts').default; // DEMO IGNORE
  scss = require('!!raw-loader!./demo-simple-marker-custom-text.component.scss').default; // DEMO IGNORE
  p1: AMap.LngLat;
  p2: AMap.LngLat;
  p3: AMap.LngLat;
  p4: AMap.LngLat;

  p3Label = {
    // 普通文本
    innerHTML: '热',
    style: {
      color: '#fff',
      fontSize: '120%',
      marginTop: '2px',
    },
  };

  p4Label = {
    // HTML
    innerHTML:
      '<div class="my-blue-point"><img src="https://webapi.amap.com/theme/v1.3/hotNew.png"/></div>',
  };

  constructor() {}

  ngOnInit() {}

  onMapReady(map: AMap.Map) {
    const lngLats = getGridLngLats(map, 4, 4);
    this.p1 = lngLats[0];
    this.p2 = lngLats[1];
    this.p3 = lngLats[2];
    this.p4 = lngLats[3];
  }
}
