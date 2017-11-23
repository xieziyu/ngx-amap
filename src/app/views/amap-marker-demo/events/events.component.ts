import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  demo_md_html = `\
<ngx-amap class="demo-map" [resizeEnable]="true" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-marker [position]="[116.397428, 39.90923]" [draggable]="true"
    (ready)="onMarkerEvent($event, 'ready')"
    (markerClick)="onMarkerEvent($event, 'markerClick')"
    (dblClick)="onMarkerEvent($event, 'dblClick')"
    (rightClick)="onMarkerEvent($event, 'rightClick')"
    (mouseMove)="onMarkerEvent($event, 'mouseMove')"
    (mouseOver)="onMarkerEvent($event, 'mouseOver')"
    (mouseOut)="onMarkerEvent($event, 'mouseOut')"
    (mouseDown)="onMarkerEvent($event, 'mouseDown')"
    (mouseUp)="onMarkerEvent($event, 'mouseUp')"
    (dragStart)="onMarkerEvent($event, 'dragStart')"
    (dragging)="onMarkerEvent($event, 'dragging')"
    (dragEnd)="onMarkerEvent($event, 'dragEnd')"
    (touchStart)="onMarkerEvent($event, 'touchStart')"
    (touchMove)="onMarkerEvent($event, 'touchMove')"
    (touchEnd)="onMarkerEvent($event, 'touchEnd')"
    (moving)="onMarkerEvent($event, 'moving')"
    (moveend)="onMarkerEvent($event, 'moveend')"
    (movealong)="onMarkerEvent($event, 'movealong')"
  ></amap-marker>
</ngx-amap>
`;
  constructor() { }

  ngOnInit() {
  }

  onMarkerEvent(event: any, type: string) {
    console.log('marker event:', type, event);
  }
}
