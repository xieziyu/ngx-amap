import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
})
export class SimpleComponent implements OnInit {
  code_ts = require('!!raw-loader!./simple.component.ts');
  code_html = require('!!html-loader!./simple.component.html');

  polygonArr = [];

  constructor() {}

  ngOnInit() {
    this.polygonArr.push([116.403322, 39.920255]);
    this.polygonArr.push([116.410703, 39.897555]);
    this.polygonArr.push([116.402292, 39.892353]);
    this.polygonArr.push([116.389846, 39.891365]);
  }
}
