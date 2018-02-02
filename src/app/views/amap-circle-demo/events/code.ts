export const CODE_HTML = `\
<button type="button" class="btn btn-outline-primary" (click)="hide = !hide">触发显示隐藏事件</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-circle [options]="options" [hidden]="hide"
    (circleClick)="onEvent($event, 'circleClick')"
    (ready)="onEvent($event, 'ready')"
    (dblClick)="onEvent($event, 'dblClick')"
    (rightClick)="onEvent($event, 'rightClick')"
    (circleHide)="onEvent($event, 'circleHide')"
    (circleShow)="onEvent($event, 'circleShow')"
    (mouseDown)="onEvent($event, 'mouseDown')"
    (mouseUp)="onEvent($event, 'mouseUp')"
    (mouseOver)="onEvent($event, 'mouseOver')"
    (mouseOut)="onEvent($event, 'mouseOut')"
    (change)="onEvent($event, 'change')"
    (touchStart)="onEvent($event, 'touchStart')"
    (touchMove)="onEvent($event, 'touchMove')"
    (touchEnd)="onEvent($event, 'touchEnd')"
  ></amap-circle>
</ngx-amap>
`;

export const CODE_TS = `\
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  hide = false;
  options = {
    center: [116.403322, 39.920255], // 圆心位置
    radius: 1000,             // 半径
    strokeColor: '#F33',      // 线颜色
    strokeOpacity: 1,         // 线透明度
    strokeWeight: 3,          // 线宽
    fillColor: '#ee2200',     // 填充颜色
    fillOpacity: 0.35         // 填充透明度
  };

  constructor() { }

  ngOnInit() {
  }

  onEvent(event: any, type: string) {
    console.log('circle event:', type, event);
  }
}`;
