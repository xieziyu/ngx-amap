export const TS = `\
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  options = {};
  hide = false;

  constructor() { }

  ngOnInit() {
    let polygonArr = [];
    polygonArr.push([116.403322, 39.920255]);
    polygonArr.push([116.410703, 39.897555]);
    polygonArr.push([116.402292, 39.892353]);
    polygonArr.push([116.389846, 39.891365]);
    this.options = {
        path: polygonArr,
        strokeColor: '#FF33FF',
        strokeOpacity: 0.2,
        strokeWeight: 3,
        fillColor: '#1791fc',
        fillOpacity: 0.35
    };
  }

  onEvent(event: any, type: string) {
    console.log('polygon event:', type, event);
  }

  onEditorEvent(event: any, type: string) {
    console.log('polygon editor event:', type, event);
  }
}`;

export const HTML = `\
<button type="button" class="btn btn-outline-primary" (click)="hide = !hide">触发显示隐藏事件</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-polygon [options]="options" [hidden]="hide" [editor]="true"
    (polygonClick)="onEvent($event, 'polygonClick')"
    (ready)="onEvent($event, 'ready')"
    (dblClick)="onEvent($event, 'dblClick')"
    (rightClick)="onEvent($event, 'rightClick')"
    (polygonHide)="onEvent($event, 'polygonHide')"
    (polygonShow)="onEvent($event, 'polygonShow')"
    (mouseDown)="onEvent($event, 'mouseDown')"
    (mouseUp)="onEvent($event, 'mouseUp')"
    (mouseOver)="onEvent($event, 'mouseOver')"
    (mouseOut)="onEvent($event, 'mouseOut')"
    (change)="onEvent($event, 'change')"
    (touchStart)="onEvent($event, 'touchStart')"
    (touchMove)="onEvent($event, 'touchMove')"
    (touchEnd)="onEvent($event, 'touchEnd')"
    (editorAddnode)="onEditorEvent($event, 'editorAddnode')"
    (editorRemovenode)="onEditorEvent($event, 'editorRemovenode')"
    (editorAdjust)="onEditorEvent($event, 'editorAdjust')"
    (editorEnd)="onEditorEvent($event, 'editorEnd')"
  ></amap-polygon>
</ngx-amap>`;
