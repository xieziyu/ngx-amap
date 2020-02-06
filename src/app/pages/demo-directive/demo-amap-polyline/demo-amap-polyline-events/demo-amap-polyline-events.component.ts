import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-polyline-events',
  templateUrl: './demo-amap-polyline-events.component.html',
  styleUrls: ['./demo-amap-polyline-events.component.scss'],
})
export class DemoAmapPolylineEventsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-polyline-events.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-polyline-events.component.ts').default; // DEMO IGNORE
  hide = false;
  lineOptions = {
    path: [
      [116.368904, 39.913423],
      [116.382122, 39.901176],
      [116.387271, 39.912501],
      [116.398258, 39.9046],
    ], // 设置线覆盖物路径
    strokeColor: '#3366FF', // 线颜色
    strokeOpacity: 1, // 线透明度
    strokeWeight: 5, // 线宽
    strokeStyle: 'solid', // 线样式
    strokeDasharray: [10, 5], // 补充线样式
  };

  constructor() {}

  ngOnInit() {}

  onPolylineEvent(event: any, type: string) {
    console.log('polyline event:', type, event);
  }

  onEditorEvent(event: any, type: string) {
    console.log('polyline editor event:', type, event);
  }
}
