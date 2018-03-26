export const TS = `\
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  hide = false;
  options = {
    center: [116.403322, 39.920255],
    radius: [2000, 1000],
    strokeColor: '#F33',
    strokeOpacity: 1,
    strokeWeight: 3,
    fillColor: '#ee2200',
    fillOpacity: 0.35
  };

  constructor() { }

  ngOnInit() {
  }

  onEvent(event: any, type: string) {
    console.log('ellipse event:', type, event);
  }
}
`;

export const HTML = `\
<button type="button" class="btn btn-outline-primary" (click)="hide = !hide">触发显示隐藏事件</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-ellipse [options]="options" [hidden]="hide"
    (ellipseClick)="onEvent($event, 'ellipseClick')"
    (ready)="onEvent($event, 'ready')"
    (dblClick)="onEvent($event, 'dblClick')"
    (rightClick)="onEvent($event, 'rightClick')"
    (ellipseHide)="onEvent($event, 'ellipseHide')"
    (ellipseShow)="onEvent($event, 'ellipseShow')"
    (mouseDown)="onEvent($event, 'mouseDown')"
    (mouseUp)="onEvent($event, 'mouseUp')"
    (mouseOver)="onEvent($event, 'mouseOver')"
    (mouseOut)="onEvent($event, 'mouseOut')"
    (change)="onEvent($event, 'change')"
    (touchStart)="onEvent($event, 'touchStart')"
    (touchMove)="onEvent($event, 'touchMove')"
    (touchEnd)="onEvent($event, 'touchEnd')"
  ></amap-ellipse>
</ngx-amap>`;
