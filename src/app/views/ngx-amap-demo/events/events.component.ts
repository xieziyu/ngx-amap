import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  demo_md_html = `\
<ngx-amap class="demo-map" [resizeEnable]="true"
  (complete)="onMapEvent($event, 'complete')"
  (ready)="onMapEvent($event, 'ready')"
  (mapmove)="onMapEvent($event, 'mapMove')"
  (moveStart)="onMapEvent($event, 'moveStart')"
  (moveEnd)="onMapEvent($event, 'moveEnd')"
  (zoomChange)="onMapEvent($event, 'zoomChange')"
  (zoomStart)="onMapEvent($event, 'zoomStart')"
  (zoomEnd)="onMapEvent($event, 'zoomEnd')"
  (resize)="onMapEvent($event, 'resize')"
  (mapClick)="onMapEvent($event, 'mapClick')"
  (mapDblClick)="onMapEvent($event, 'mapDblClick')"
  (rightClick)="onMapEvent($event, 'rightClick')"
  (mouseMove)="onMapEvent($event, 'mouseMove')"
  (mouseOver)="onMapEvent($event, 'mouseOver')"
  (mouseWheel)="onMapEvent($event, 'mouseWheel')"
  (mouseOut)="onMapEvent($event, 'mouseOut')"
  (mouseUp)="onMapEvent($event, 'mouseUp')"
  (mouseDown)="onMapEvent($event, 'mouseDown')"
  (touchStart)="onMapEvent($event, 'touchStart')"
  (touchMove)="onMapEvent($event, 'touchMove')"
  (touchEnd)="onMapEvent($event, 'touchEnd')"
  (hotspotClick)="onMapEvent($event, 'hotspotClick')"
  (hotspotOver)="onMapEvent($event, 'hotspotOver')"
  (hotspotOut)="onMapEvent($event, 'hotspotOut')"
  (dragStart)="onMapEvent($event, 'dragStart')"
  (dragging)="onMapEvent($event, 'dragging')"
  (dragEnd)="onMapEvent($event, 'dragEnd')"
></ngx-amap>
`;
  constructor() { }

  ngOnInit() {
  }

  onMapEvent(event: any, type: string) {
    console.log('map event:', type, event);
  }
}
