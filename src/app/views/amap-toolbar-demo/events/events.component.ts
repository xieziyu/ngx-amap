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
<ngx-amap class="demo-map">
  <amap-tool-bar [hidden]="hide"
    (zoomchanged)="onToolBarEvent($event, 'zoomchanged')"
    (location)="onToolBarEvent($event, 'location')"
    (ready)="onToolBarEvent($event, 'ready')"
    (toolbarHide)="onToolBarEvent($event, 'toolbarHide')"
    (toolbarShow)="onToolBarEvent($event, 'toolbarShow')"
  ></amap-tool-bar>
</ngx-amap>
`;

  hide = false;

  constructor() { }

  ngOnInit() {
  }

  onToolBarEvent(event: any, type: string) {
    console.log('toolbar event:', type, event);
  }
}
