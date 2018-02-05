export const CODE_HTML = `\
<button type="button" class="btn btn-outline-primary" (click)="hide = !hide">触发显示隐藏事件</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.407394, 39.904211]" [zoom]="8">
  <amap-circle-marker [options]="options" [hidden]="hide"
    (circleMarkerClick)="onEvent($event, 'circleMarkerClick')"
    (ready)="onEvent($event, 'ready')"
    (dblClick)="onEvent($event, 'dblClick')"
    (rightClick)="onEvent($event, 'rightClick')"
    (circleMarkerHide)="onEvent($event, 'circleMarkerHide')"
    (circleMarkerShow)="onEvent($event, 'circleMarkerShow')"
    (mouseDown)="onEvent($event, 'mouseDown')"
    (mouseUp)="onEvent($event, 'mouseUp')"
    (mouseOver)="onEvent($event, 'mouseOver')"
    (mouseOut)="onEvent($event, 'mouseOut')"
    (change)="onEvent($event, 'change')"
    (touchStart)="onEvent($event, 'touchStart')"
    (touchMove)="onEvent($event, 'touchMove')"
    (touchEnd)="onEvent($event, 'touchEnd')"
  ></amap-circle-marker>
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
    center: [116.407394, 39.904211], // 圆心位置
    radius: 12,
    strokeColor: 'white',
    strokeOpacity: 0.5,
    strokeWeight: 2,
    fillColor: 'rgba(0,0,255,1)',
    fillOpacity: 0.5,
    zIndex: 10,
    bubble: true,
    cursor: 'pointer',
  };

  constructor() { }

  ngOnInit() {
  }

  onEvent(event: any, type: string) {
    console.log('circle marker event:', type, event);
  }
}`;
