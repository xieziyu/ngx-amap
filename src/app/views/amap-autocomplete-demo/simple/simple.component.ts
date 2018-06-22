import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  demo_html = require('!!html-loader!./simple.component.html');
  demo_ts = require('!!raw-loader!./simple.component.ts');

  myCity = '';

  constructor() { }

  ngOnInit() {
  }

}
