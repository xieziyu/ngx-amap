import { Component, OnInit } from '@angular/core';
import { CODE_HTML, CODE_TS } from './code';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  demo_md_html = CODE_HTML;
  demo_md_ts = CODE_TS;

  constructor() { }

  ngOnInit() {
  }

}
