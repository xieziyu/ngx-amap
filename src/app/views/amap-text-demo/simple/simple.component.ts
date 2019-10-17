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

  hidden = false;
  style = {
    'background-color': 'yellow',
    border: 'solid 1px #0088ff',
    padding: '10px 20px',
  };

  constructor() {}

  ngOnInit() {}
}
