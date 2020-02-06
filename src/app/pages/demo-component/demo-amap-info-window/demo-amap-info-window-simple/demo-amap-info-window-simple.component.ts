import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-info-window-simple',
  templateUrl: './demo-amap-info-window-simple.component.html',
  styleUrls: ['./demo-amap-info-window-simple.component.scss'],
})
export class DemoAmapInfoWindowSimpleComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-info-window-simple.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-info-window-simple.component.ts').default; // DEMO IGNORE
  open = true;

  constructor() {}

  ngOnInit() {}
}
