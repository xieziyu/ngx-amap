import { Component, OnInit, ViewChild } from '@angular/core';
import { AmapCircleDirective } from 'ngx-amap';
import { CODE_HTML, CODE_TS } from './code';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  demo_md_html = CODE_HTML;
  demo_md_ts = CODE_TS;

  @ViewChild(AmapCircleDirective) circle: AmapCircleDirective;
  marker1 = [116.403322, 39.920255];
  marker2 = [116.382122, 39.901176];

  constructor() { }

  ngOnInit() {
  }

  getMethods() {
    if (this.circle) {
      this.circle.getCenter().then(v => console.log('getCenter():', v));
      this.circle.getRadius().then(v => console.log('getRadius():', v));
      this.circle.getOptions().then(v => console.log('getOptions():', v));
      this.circle.getBounds().then(v => console.log('getBounds():', v));
      this.circle.getExtData().then(v => console.log('getExtData():', v));
    }
  }

  checkContains() {
    if (this.circle) {
      this.circle.contains(this.marker1).then(v => console.log('contains marker1: ', v));
      this.circle.contains(this.marker2).then(v => console.log('contains marker2: ', v));
    }
  }
}
