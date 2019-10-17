import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss'],
})
export class MethodsComponent implements OnInit {
  demo_md_html = require('!!html-loader!./methods.component.html');

  constructor() {}

  ngOnInit() {}
}
