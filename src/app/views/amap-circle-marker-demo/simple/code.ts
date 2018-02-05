export const CODE_HTML = `\
<ngx-amap class="demo-map" [center]="[108, 34]" [zoom]="4">
  <amap-circle-marker *ngFor="let marker of markers"
    [center]="marker.center"
    [radius]="marker.radius"
    [strokeColor]="'white'"
    [strokeOpacity]="0.5"
    [strokeWeight]="2"
    [fillColor]="'rgba(0,0,255,1)'"
    [fillOpacity]="0.5"
    [zIndex]="10"
    [bubble]="true"
    [cursor]="'pointer'">
  </amap-circle-marker>
</ngx-amap>
`;

export const CODE_TS = `\
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  markers = [
    { center: [116.407394, 39.904211], radius: 10 + Math.random() * 10 },
    { center: [121.473662, 31.230372], radius: 10 + Math.random() * 10 },
    { center: [106.551643, 29.562849], radius: 10 + Math.random() * 10 },
    { center: [113.543028, 22.186835], radius: 10 + Math.random() * 10 },
    { center: [121.509062, 25.044332], radius: 10 + Math.random() * 10 },
    { center: [114.171203, 22.277468], radius: 10 + Math.random() * 10 },
    { center: [117.200983, 39.084158], radius: 10 + Math.random() * 10 },
    { center: [91.117525, 29.647535], radius: 10 + Math.random() * 10 },
  ];

  constructor() { }

  ngOnInit() {
  }

}`;
