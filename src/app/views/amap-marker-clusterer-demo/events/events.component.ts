import { Component, OnInit } from '@angular/core';
import { POINTS } from '../points';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  demo_md_html = `\
<ngx-amap class="demo-map-lg" [resizeEnable]="true" [center]="[105, 34]" [zoom]="4">
  <amap-marker-clusterer [gridSize]="80"
    (ready)="onClusterEvent($event, 'ready')"
    (clusterClick)="onClusterEvent($event, 'clusterClick')">
    <amap-marker *ngFor="let marker of markers"
      [inCluster]="true"
      [position]="marker"
      [offset]="{x:-15, y:-15}"
      [content]="markerContent">
    </amap-marker>
  </amap-marker-clusterer>
</ngx-amap>
  `;

  demo_md_ts = `\
import { Component, OnInit } from '@angular/core';
import { POINTS } from '../points';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  markers = POINTS;

  constructor() { }

  ngOnInit() {
  }

  onClusterEvent(event: any, type: string) {
    console.log('clusterer event:', type, event);
  }
}`;

  markers = POINTS;

  constructor() { }

  ngOnInit() {
  }

  onClusterEvent(event: any, type: string) {
    console.log('clusterer event:', type, event);
  }
}
