import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AmapToolBarDirective } from 'ngx-amap';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-tool-bar-methods',
  templateUrl: './demo-amap-tool-bar-methods.component.html',
  styleUrls: ['./demo-amap-tool-bar-methods.component.scss'],
})
export class DemoAmapToolBarMethodsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-tool-bar-methods.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-tool-bar-methods.component.ts').default; // DEMO IGNORE

  constructor(private msg: NzMessageService) {}

  ngOnInit() {}

  getMethods(p: AmapToolBarDirective) {
    if (p) {
      this.msg.info('请查看 console 输出');
      p.get().subscribe(v => {
        console.log('getOffset():', v.getOffset());
        console.log('getLocation():', v.getLocation());
      });
    }
  }
}
