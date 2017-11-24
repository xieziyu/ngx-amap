import { Component, OnInit } from '@angular/core';
import { POINTS } from '../points';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  markers = POINTS;

  demo_md_html = `\
<ngx-amap class="demo-map-lg" [resizeEnable]="true" [center]="[105, 34]" [zoom]="4">
  <amap-marker-clusterer [gridSize]="80">
    <amap-marker *ngFor="let marker of markers"
      [inCluster]="true"
      [position]="marker"
      [offset]="{x:-15, y:-15}"
      [content]="markerContent">
    </amap-marker>
  </amap-marker-clusterer>
</ngx-amap>`;
  demo_md_ts = `\
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  markers = POINTS;
  markerContent = \`<div style="background-color: hsla(180, 100%, 50%, 0.7);
  height: 24px; width: 24px; border: 1px solid hsl(180, 100%, 40%);
  border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;">
</div>\`;

  constructor() { }

  ngOnInit() {
  }
}`;

  constructor() { }

  ngOnInit() {
  }
}
