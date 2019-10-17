import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
})
export class SimpleComponent implements OnInit {
  demo_md_html = require('!!html-loader!./simple.component.html');
  demo_md_ts = require('!!raw-loader!./simple.component.ts');

  lineArr = [
    [116.368904, 39.913423],
    [116.382122, 39.901176],
    [116.387271, 39.912501],
    [116.398258, 39.9046],
  ];

  constructor() {}

  ngOnInit() {}
}
