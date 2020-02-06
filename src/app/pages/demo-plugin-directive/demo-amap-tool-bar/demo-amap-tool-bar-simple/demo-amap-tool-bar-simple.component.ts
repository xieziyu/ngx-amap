import { Component } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-tool-bar-simple',
  templateUrl: './demo-amap-tool-bar-simple.component.html',
  styleUrls: ['./demo-amap-tool-bar-simple.component.scss'],
})
export class DemoAmapToolBarSimpleComponent {
  html = require('!!html-loader!./demo-amap-tool-bar-simple.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-tool-bar-simple.component.ts').default; // DEMO IGNORE
}
