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

  open = true;

  constructor() {}

  ngOnInit() {}
}
