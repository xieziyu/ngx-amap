import { Component, OnInit } from '@angular/core';
import { TS, HTML } from './code';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  code_ts = TS;
  code_html = HTML;

  polygonArr = [];

  constructor() { }

  ngOnInit() {
    this.polygonArr.push([116.403322, 39.920255]);
    this.polygonArr.push([116.410703, 39.897555]);
    this.polygonArr.push([116.402292, 39.892353]);
    this.polygonArr.push([116.389846, 39.891365]);
  }

}
