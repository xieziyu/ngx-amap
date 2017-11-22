import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amap-toolbar-demo',
  templateUrl: './amap-toolbar-demo.component.html',
  styleUrls: ['./amap-toolbar-demo.component.scss']
})
export class AmapToolbarDemoComponent implements OnInit {
  demo1_md_html = `\
<ngx-amap class="demo-map">
  <amap-tool-bar></amap-tool-bar>
</ngx-amap>
`;

  demo2_md_html = `\
<button class="btn btn-primary" (click)="hidden = !hidden">显示/隐藏 控件</button>
<button class="btn btn-primary" (click)="ruler = !ruler">显示/隐藏 标尺</button>
<button class="btn btn-primary" (click)="direction = !direction">显示/隐藏 方向键盘</button>
<button class="btn btn-primary" (click)="locate = !locate">显示/隐藏 定位部件</button>
<hr>
<ngx-amap class="demo-map">
  <amap-tool-bar [ruler]="ruler" [direction]="direction" [locate]="locate" [hidden]="hidden"
      (zoomchanged)="onZoomChanged($event)"></amap-tool-bar>
</ngx-amap>
`;

  ruler = true;
  direction = true;
  locate = false;
  hidden = false;

  constructor() { }

  ngOnInit() {
  }

  onZoomChanged(event) {
    console.log('on zoom changed:', event);
  }

}
