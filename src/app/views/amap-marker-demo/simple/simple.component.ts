import { Component, OnInit } from '@angular/core';
import { IIcon, ILabel } from 'ngx-amap/types/interface';

declare const require: any;

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
})
export class SimpleComponent implements OnInit {
  demo_md_html = require('!!html-loader!./simple.component.html');
  demo_md_ts = require('!!raw-loader!./simple.component.ts');

  hidden = false;
  icon: IIcon;
  label: ILabel;

  constructor() {}

  ngOnInit() {}

  toggleIcon() {
    this.icon = this.icon
      ? null
      : {
          size: {
            width: 40,
            height: 50,
          },
          image: 'http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png',
          imageOffset: {
            x: 0,
            y: -60,
          },
        };
  }

  toggleLabel() {
    this.label = this.label
      ? null
      : {
          offset: {
            x: 20,
            y: 20,
          },
          content: '我是marker的label标签',
        };
  }
}
