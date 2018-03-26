import { Component, OnInit } from '@angular/core';
import { TS, HTML } from './code';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  code_ts = TS;
  code_html = HTML;

  lineArr = [
    [116.368904, 39.913423],
    [116.382122, 39.901176],
    [116.387271, 39.912501],
    [116.398258, 39.904600]
  ];
  editor = false;

  constructor() { }

  ngOnInit() {
  }

  getMethods(polyline) {
    if (polyline) {
      polyline.getOptions().then(v => console.log('getOptions():', v));
      polyline.getPath().then(v => console.log('getPath():', v));
      polyline.getLength().then(v => console.log('getLength():', v));
      polyline.getBounds().then(v => console.log('getBounds():', v));
      polyline.getExtData().then(v => console.log('getExtData():', v));
    }
  }
}
