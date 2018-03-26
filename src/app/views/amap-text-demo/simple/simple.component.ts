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

  hidden = false;
  style = {
    'background-color': 'yellow',
    'border': 'solid 1px #0088ff',
    'padding': '10px 20px'
  };

  constructor() { }

  ngOnInit() {
  }

}
