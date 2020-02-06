import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxAmapComponent } from 'ngx-amap';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-ngx-amap-methods',
  templateUrl: './demo-ngx-amap-methods.component.html',
  styleUrls: ['./demo-ngx-amap-methods.component.scss'],
})
export class DemoNgxAmapMethodsComponent implements OnInit {
  html = require('!!html-loader!./demo-ngx-amap-methods.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-ngx-amap-methods.component.ts').default; // DEMO IGNORE
  // 方法一：使用 NgxAmapComponent 的 get 方法:
  @ViewChild(NgxAmapComponent, { static: true })
  amapComp: NgxAmapComponent;

  // 方法二：使用 naReady 事件输出的 AMap 原生对象:
  amap: AMap.Map;

  constructor() {}

  ngOnInit() {}

  onMapReady(amap: AMap.Map) {
    this.amap = amap;
  }

  zoomIn() {
    // 方法一：使用 NgxAmapComponent 的 get 方法:
    this.amapComp.get().subscribe(m => m.zoomIn());
  }

  zoomOut() {
    // 方法二：使用 naReady 事件输出的 AMap 原生对象:
    if (this.amap) {
      this.amap.zoomOut();
    }
  }
}
