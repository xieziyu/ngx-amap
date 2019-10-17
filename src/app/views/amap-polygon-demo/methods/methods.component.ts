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

  polygonArr = [];
  editor = false;

  constructor() {}

  ngOnInit() {
    this.polygonArr.push([116.403322, 39.920255]);
    this.polygonArr.push([116.410703, 39.897555]);
    this.polygonArr.push([116.402292, 39.892353]);
    this.polygonArr.push([116.389846, 39.891365]);
  }

  getMethods(polygon) {
    if (polygon) {
      polygon.getOptions().then(v => console.log('getOptions():', v));
      polygon.getPath().then(v => console.log('getPath():', v));
      polygon.getBounds().then(v => console.log('getBounds():', v));
      polygon.getExtData().then(v => console.log('getExtData():', v));
    }
  }
}
