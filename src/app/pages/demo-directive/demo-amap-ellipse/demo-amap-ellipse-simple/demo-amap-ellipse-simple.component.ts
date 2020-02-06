import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-ellipse-simple',
  templateUrl: './demo-amap-ellipse-simple.component.html',
  styleUrls: ['./demo-amap-ellipse-simple.component.scss'],
})
export class DemoAmapEllipseSimpleComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-ellipse-simple.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-ellipse-simple.component.ts').default; // DEMO IGNORE

  constructor() {}

  ngOnInit() {}
}
