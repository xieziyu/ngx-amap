import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-ngx-amap-simple',
  templateUrl: './demo-ngx-amap-simple.component.html',
  styleUrls: ['./demo-ngx-amap-simple.component.scss'],
})
export class DemoNgxAmapSimpleComponent implements OnInit {
  html = require('!!html-loader!./demo-ngx-amap-simple.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-ngx-amap-simple.component.ts').default; // DEMO IGNORE
  city = '北京';
  constructor() {}

  ngOnInit() {}
}
