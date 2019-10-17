import { Component, OnInit } from '@angular/core';
import { AmapInfoWindowComponent } from 'ngx-amap';

declare const require: any;

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss'],
})
export class MethodsComponent implements OnInit {
  demo_md_html = require('!!html-loader!./methods.component.html');
  demo_md_ts = require('!!raw-loader!./methods.component.ts');

  constructor() {}

  ngOnInit() {}

  getMethods(infoWindow: AmapInfoWindowComponent) {
    if (infoWindow) {
      infoWindow.getIsOpen().then(v => console.log('getIsOpen():', v));
      infoWindow.getContent().then(v => console.log('getContent():', v));
      infoWindow.getPosition().then(v => console.log('getPosition():', v));
      infoWindow.getSize().then(v => console.log('getSize():', v));
    }
  }
}
