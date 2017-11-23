import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inside-marker',
  templateUrl: './inside-marker.component.html',
  styleUrls: ['./inside-marker.component.scss']
})
export class InsideMarkerComponent implements OnInit {
  demo_md_html = `\
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-marker *ngFor="let marker of markers; index as i" [position]="marker">
    <amap-info-window [offset]="infoWindowOffset">
      我是第 <span class="text-danger">{{i+1}}</span> 个marker
    </amap-info-window>
  </amap-marker>
</ngx-amap>
`;

  demo_md_ts = `\
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inside-marker',
  templateUrl: './inside-marker.component.html',
  styleUrls: ['./inside-marker.component.scss']
})
export class InsideMarkerComponent implements OnInit {
  markers = [
    [116.368904, 39.923423],
    [116.382122, 39.921176],
    [116.387271, 39.922501],
    [116.398258, 39.914600]
  ];

  infoWindowOffset = {
    x: 0,
    y: -30
  };

  constructor() { }

  ngOnInit() {
  }

}
`;

  markers = [
    [116.368904, 39.923423],
    [116.382122, 39.921176],
    [116.387271, 39.922501],
    [116.398258, 39.914600]
  ];

  infoWindowOffset = {
    x: 0,
    y: -30
  };

  constructor() { }

  ngOnInit() {
  }

}
