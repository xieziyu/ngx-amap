import { Component, OnInit } from '@angular/core';
import { POINTS } from '../points';

declare const require: any;

@Component({
  selector: 'app-custom-style',
  templateUrl: './custom-style.component.html',
  styleUrls: ['./custom-style.component.scss'],
})
export class CustomStyleComponent implements OnInit {
  demo_md_html = require('!!html-loader!./custom-style.component.html');
  demo_md_ts = require('!!raw-loader!./custom-style.component.ts');

  customStyles = [
    {
      url: 'http://a.amap.com/jsapi_demos/static/images/blue.png',
      size: { width: 32, height: 32 },
      offset: { x: -16, y: -16 },
    },
    {
      url: 'http://a.amap.com/jsapi_demos/static/images/green.png',
      size: { width: 32, height: 32 },
      offset: { x: -16, y: -16 },
    },
  ];

  markers = POINTS;

  constructor() {}

  ngOnInit() {}
}
