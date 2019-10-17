import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-inside-marker',
  templateUrl: './inside-marker.component.html',
  styleUrls: ['./inside-marker.component.scss'],
})
export class InsideMarkerComponent implements OnInit {
  demo_md_html = require('!!html-loader!./inside-marker.component.html');
  demo_md_ts = require('!!raw-loader!./inside-marker.component.ts');

  markers = [
    [116.368904, 39.923423],
    [116.382122, 39.921176],
    [116.387271, 39.922501],
    [116.398258, 39.9146],
  ];

  infoWindowOffset = {
    x: 0,
    y: -30,
  };

  constructor() {}

  ngOnInit() {}
}
