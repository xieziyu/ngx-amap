import { Component, OnInit, ViewChild } from '@angular/core';
import { CODE_HTML, CODE_TS } from './code';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  code_html = CODE_HTML;
  code_ts = CODE_TS;

  marker1 = [116.403322, 39.920255];
  marker2 = [116.382122, 39.901176];

  editor = false;

  constructor() { }

  ngOnInit() {
  }

  getMethods(circle) {
    if (circle) {
      circle.getCenter().then(v => console.log('getCenter():', v));
      circle.getRadius().then(v => console.log('getRadius():', v));
      circle.getOptions().then(v => console.log('getOptions():', v));
      circle.getBounds().then(v => console.log('getBounds():', v));
      circle.getExtData().then(v => console.log('getExtData():', v));
    }
  }

  checkContains(circle) {
    if (circle) {
      circle.contains(this.marker1).then(v => console.log('contains marker1: ', v));
      circle.contains(this.marker2).then(v => console.log('contains marker2: ', v));
    }
  }
}
