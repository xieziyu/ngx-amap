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

  options = {};
  lineArr = [
    // 起点
    [116.39, 39.91, 116.37, 39.91],

    // 第一段弧线
    [116.380298, 39.907771, 116.38, 39.9],

    // 第二段弧线
    [116.385298, 39.907771, 116.4, 39.9],

    // 第三段弧线，另一种描述方式
    [[116.392872, 39.887391], [116.40772, 39.909252], [116.41, 39.89]],

    // 第四段弧线，每段最多两控制点
    [116.423857, 39.889498, 116.422312, 39.899639, 116.425273, 39.902273],
  ];
  hide = false;

  constructor() {}

  ngOnInit() {
    this.options = {
      path: this.lineArr,
      strokeColor: '#FF33FF',
      strokeOpacity: 1,
      strokeWeight: 3,
      strokeStyle: 'solid',
    };
  }

  onEvent(event: any, type: string) {
    console.log('bezier curve event:', type, event);
  }

  onEditorEvent(event: any, type: string) {
    console.log('bezier curve editor event:', type, event);
  }
}
