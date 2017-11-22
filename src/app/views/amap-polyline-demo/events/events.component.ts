import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  demo_md_html = `\
<button type="button" class="btn btn-outline-primary" (click)="hide = !hide">触发显示隐藏事件</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-polyline [options]="lineOptions" [hidden]="hide"
    (polylineClick)="onPolylineEvent($event, 'polylineClick')"
    (ready)="onPolylineEvent($event, 'ready')"
    (dblClick)="onPolylineEvent($event, 'dblClick')"
    (rightClick)="onPolylineEvent($event, 'rightClick')"
    (polylineHide)="onPolylineEvent($event, 'polylineHide')"
    (polylineShow)="onPolylineEvent($event, 'polylineShow')"
    (mouseDown)="onPolylineEvent($event, 'mouseDown')"
    (mouseUp)="onPolylineEvent($event, 'mouseUp')"
    (mouseOver)="onPolylineEvent($event, 'mouseOver')"
    (mouseOut)="onPolylineEvent($event, 'mouseOut')"
    (change)="onPolylineEvent($event, 'change')"
    (touchStart)="onPolylineEvent($event, 'touchStart')"
    (touchMove)="onPolylineEvent($event, 'touchMove')"
    (touchEnd)="onPolylineEvent($event, 'touchEnd')"
  ></amap-polyline>
</ngx-amap>
`;

  demo_md_ts = `\
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  hide = false;
  lineOptions = {
    path: [
      [116.368904, 39.913423],
      [116.382122, 39.901176],
      [116.387271, 39.912501],
      [116.398258, 39.904600]
    ],                        // 设置线覆盖物路径
    strokeColor: '#3366FF',   // 线颜色
    strokeOpacity: 1,         // 线透明度
    strokeWeight: 5,          // 线宽
    strokeStyle: 'solid',     // 线样式
    strokeDasharray: [10, 5]  // 补充线样式
  };

  constructor() { }

  ngOnInit() {
  }

  onPolylineEvent(event: any, type: string) {
    console.log('polyline event:', type, event);
  }
}
`;

  hide = false;
  lineOptions = {
    path: [
      [116.368904, 39.913423],
      [116.382122, 39.901176],
      [116.387271, 39.912501],
      [116.398258, 39.904600]
    ],                        // 设置线覆盖物路径
    strokeColor: '#3366FF',   // 线颜色
    strokeOpacity: 1,         // 线透明度
    strokeWeight: 5,          // 线宽
    strokeStyle: 'solid',     // 线样式
    strokeDasharray: [10, 5]  // 补充线样式
  };

  constructor() { }

  ngOnInit() {
  }

  onPolylineEvent(event: any, type: string) {
    console.log('polyline event:', type, event);
  }
}
