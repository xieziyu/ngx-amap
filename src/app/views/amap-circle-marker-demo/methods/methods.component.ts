import { Component, OnInit, ViewChild } from '@angular/core';
import { AmapCircleMarkerDirective } from 'ngx-amap';
import { CODE_HTML, CODE_TS } from './code';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  demo_md_html = CODE_HTML;
  demo_md_ts = CODE_TS;

  @ViewChild(AmapCircleMarkerDirective) circle: AmapCircleMarkerDirective;

  constructor() { }

  ngOnInit() {
  }

  getMethods() {
    if (this.circle) {
      this.circle.getCenter().then(v => console.log('getCenter():', v));
      this.circle.getRadius().then(v => console.log('getRadius():', v));
      this.circle.getOptions().then(v => console.log('getOptions():', v));
      this.circle.getExtData().then(v => console.log('getExtData():', v));
    }
  }

}
