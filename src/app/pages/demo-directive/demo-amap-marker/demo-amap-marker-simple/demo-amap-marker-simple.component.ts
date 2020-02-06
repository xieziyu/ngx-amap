import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-marker-simple',
  templateUrl: './demo-amap-marker-simple.component.html',
  styleUrls: ['./demo-amap-marker-simple.component.scss'],
})
export class DemoAmapMarkerSimpleComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-marker-simple.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-marker-simple.component.ts').default; // DEMO IGNORE
  hidden = false;
  icon: AMap.Icon;
  label: AMap.Marker.Label;

  constructor() {}

  ngOnInit() {}

  toggleIcon() {
    this.icon = this.icon
      ? null
      : new AMap.Icon({
          size: [40, 50],
          image: 'http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png',
          imageOffset: new AMap.Pixel(0, -60),
        });
  }

  toggleLabel() {
    this.label = this.label
      ? null
      : {
          offset: new AMap.Pixel(20, 20),
          content: '我是marker的label标签',
        };
  }
}
