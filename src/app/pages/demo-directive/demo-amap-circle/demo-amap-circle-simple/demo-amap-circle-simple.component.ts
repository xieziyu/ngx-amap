import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-circle-simple',
  templateUrl: './demo-amap-circle-simple.component.html',
  styleUrls: ['./demo-amap-circle-simple.component.scss'],
})
export class DemoAmapCircleSimpleComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-circle-simple.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-circle-simple.component.ts').default; // DEMO IGNORE

  constructor() {}

  ngOnInit() {}
}
