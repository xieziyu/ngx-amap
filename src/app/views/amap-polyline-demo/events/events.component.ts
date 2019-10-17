import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  code_ts = require('!!raw-loader!./events.component.ts');
  code_html = require('!!html-loader!./events.component.html');

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
