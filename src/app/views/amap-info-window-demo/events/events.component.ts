import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  demo_md_html = `\
<button type="button" class="btn btn-outline-primary" (click)="open = !open">触发显示隐藏事件</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]">
  <amap-info-window #infoWindow [(isOpen)]="open" [position]="[116.397428, 39.90923]"
    (windowOpen)="onInfoWindowEvent($event, 'windowOpen')"
    (windowClose)="onInfoWindowEvent($event, 'windowClose')"
    (windowChange)="onInfoWindowEvent($event, 'windowChange')"
  >
    我还是一个简单的信息窗体
  </amap-info-window>
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
  open = true;

  constructor() { }

  ngOnInit() {
  }

  onInfoWindowEvent(event: any, type: string) {
    console.log('info-window event:', type, event);
  }
}
`;
  open = true;

  constructor() { }

  ngOnInit() {
  }

  onInfoWindowEvent(event: any, type: string) {
    console.log('info-window event:', type, event);
  }
}
