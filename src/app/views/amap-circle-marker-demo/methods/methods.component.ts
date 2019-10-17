import { Component, OnInit, ViewChild } from '@angular/core';
import { AmapCircleMarkerDirective } from 'ngx-amap';

declare const require: any;

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss'],
})
export class MethodsComponent implements OnInit {
  demo_md_html = require('!!html-loader!./methods.component.html');
  demo_md_ts = require('!!raw-loader!./methods.component.ts');

  @ViewChild(AmapCircleMarkerDirective, { static: true })
  circle: AmapCircleMarkerDirective;

  constructor() {}

  ngOnInit() {}

  getMethods() {
    if (this.circle) {
      this.circle.getCenter().then(v => console.log('getCenter():', v));
      this.circle.getRadius().then(v => console.log('getRadius():', v));
      this.circle.getOptions().then(v => console.log('getOptions():', v));
      this.circle.getExtData().then(v => console.log('getExtData():', v));
    }
  }
}
