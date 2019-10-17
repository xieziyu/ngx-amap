import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss'],
})
export class MethodsComponent implements OnInit {
  code_ts = require('!!raw-loader!./methods.component.ts');
  code_html = require('!!html-loader!./methods.component.html');

  marker1 = [116.403322, 39.920255];
  marker2 = [116.382122, 39.901176];
  editor = false;

  constructor() {}

  ngOnInit() {}

  getMethods(ellipse) {
    if (ellipse) {
      ellipse.getCenter().then(v => console.log('getCenter():', v));
      ellipse.getOptions().then(v => console.log('getOptions():', v));
      ellipse.getBounds().then(v => console.log('getBounds():', v));
      ellipse.getExtData().then(v => console.log('getExtData():', v));
    }
  }

  checkContains(ellipse) {
    if (ellipse) {
      ellipse.contains(this.marker1).then(v => console.log('contains marker1: ', v));
      ellipse.contains(this.marker2).then(v => console.log('contains marker2: ', v));
    }
  }
}
