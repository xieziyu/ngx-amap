export const TS = `\
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  options = {};
  lineArr = [
    // 起点
    [116.39, 39.91, 116.37, 39.91],

    // 第一段弧线
    [116.380298, 39.907771, 116.38, 39.90],

    // 第二段弧线
    [116.385298, 39.907771, 116.40, 39.90],

    // 第三段弧线，另一种描述方式
    [
      [116.392872, 39.887391],
      [116.40772, 39.909252],
      [116.41, 39.89]
    ],

    // 第四段弧线，每段最多两控制点
    [116.423857, 39.889498, 116.422312, 39.899639, 116.425273, 39.902273]
  ];
  hide = false;

  constructor() { }

  ngOnInit() {
    this.options = {
      path: this.lineArr,
      strokeColor: '#FF33FF',
      strokeOpacity: 1,
      strokeWeight: 3,
      strokeStyle: 'solid'
    };
  }

  onEvent(event: any, type: string) {
    console.log('bezier curve event:', type, event);
  }
}`;

export const HTML = `\
<button type="button" class="btn btn-outline-primary" (click)="hide = !hide">触发显示隐藏事件</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-bezier-curve [options]="options" [hidden]="hide"
    (bezierCurveClick)="onEvent($event, 'bezierCurveClick')"
    (ready)="onEvent($event, 'ready')"
    (dblClick)="onEvent($event, 'dblClick')"
    (rightClick)="onEvent($event, 'rightClick')"
    (bezierCurveHide)="onEvent($event, 'bezierCurveHide')"
    (bezierCurveShow)="onEvent($event, 'bezierCurveShow')"
    (mouseDown)="onEvent($event, 'mouseDown')"
    (mouseUp)="onEvent($event, 'mouseUp')"
    (mouseOver)="onEvent($event, 'mouseOver')"
    (mouseOut)="onEvent($event, 'mouseOut')"
    (change)="onEvent($event, 'change')"
    (touchStart)="onEvent($event, 'touchStart')"
    (touchMove)="onEvent($event, 'touchMove')"
    (touchEnd)="onEvent($event, 'touchEnd')"
  ></amap-bezier-curve>
</ngx-amap>`;
