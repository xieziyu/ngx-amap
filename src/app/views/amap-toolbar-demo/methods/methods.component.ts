import { Component, OnInit, ViewChild } from '@angular/core';
import { AmapToolBarDirective } from 'ngx-amap';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  demo_md_html = `\
<button type="button" class="btn btn-outline-primary" (click)="getMethods()">调用Getter方法</button>
<button type="button" class="btn btn-outline-primary" (click)="doLocation()">调用doLocation方法</button>
<hr>
<ngx-amap class="demo-map">
  <amap-tool-bar></amap-tool-bar>
</ngx-amap>
`;

  demo_md_ts = `\
import { Component, OnInit, ViewChild } from '@angular/core';
import { AmapToolBarDirective } from 'ngx-amap';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  @ViewChild(AmapToolBarDirective) toolbar: AmapToolBarDirective;

  constructor() { }

  ngOnInit() {
  }

  getMethods() {
    if (this.toolbar) {
      this.toolbar.getOffset().then(v => console.log('getOffset():', v));
      this.toolbar.getLocation().then(v => console.log('getLocation():', v));
    }
  }

  doLocation() {
    if (this.toolbar) {
      this.toolbar.doLocation().then(() => console.log('called doLocation()'));
    }
  }
}
`;

  @ViewChild(AmapToolBarDirective) toolbar: AmapToolBarDirective;

  constructor() { }

  ngOnInit() {
  }

  getMethods() {
    if (this.toolbar) {
      this.toolbar.getOffset().then(v => console.log('getOffset():', v));
      this.toolbar.getLocation().then(v => console.log('getLocation():', v));
    }
  }

  doLocation() {
    if (this.toolbar) {
      this.toolbar.doLocation().then(() => console.log('called doLocation()'));
    }
  }
}
