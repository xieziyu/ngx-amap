import { Component, OnInit, ViewChild } from '@angular/core';
import { AmapToolBarDirective } from 'ngx-amap';

declare const require: any;

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss'],
})
export class MethodsComponent implements OnInit {
  demo_md_html = require('!!html-loader!./methods.component.html');
  demo_md_ts = require('!!raw-loader!./methods.component.ts');

  @ViewChild(AmapToolBarDirective, { static: true }) toolbar: AmapToolBarDirective;

  constructor() {}

  ngOnInit() {}

  getMethods() {
    if (this.toolbar) {
      this.toolbar.getOffset().then(v => console.log('getOffset():', v));
      this.toolbar.getLocation().then(v => console.log('getLocation():', v));
    }
  }

  doLocation() {
    if (this.toolbar) {
      this.toolbar.doLocation().then(() => console.log('called doLocation()'));
    }
  }
}
