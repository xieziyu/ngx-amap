import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  demo_md_html = require('!!html-loader!./events.component.html');
  demo_md_ts = require('!!raw-loader!./events.component.ts');

  hide = false;
  options = {
    center: [116.403322, 39.920255], // 圆心位置
    radius: 1000, // 半径
    strokeColor: '#F33', // 线颜色
    strokeOpacity: 1, // 线透明度
    strokeWeight: 3, // 线宽
    fillColor: '#ee2200', // 填充颜色
    fillOpacity: 0.35, // 填充透明度
  };

  constructor() {}

  ngOnInit() {}

  onEvent(event: any, type: string) {
    console.log('circle event:', type, event);
  }

  onEditorEvent(event: any, type: string) {
    console.log('circle editor event:', type, event);
  }
}
