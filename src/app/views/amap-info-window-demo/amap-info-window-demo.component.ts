import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amap-info-window-demo',
  templateUrl: './amap-info-window-demo.component.html',
  styleUrls: ['./amap-info-window-demo.component.scss']
})
export class AmapInfoWindowDemoComponent implements OnInit {
  windowOpen = false;

  markers = [
    [116.368904, 39.923423], [116.382122, 39.921176],
    [116.387271, 39.922501], [116.398258, 39.914600]
  ];

  infoWindowOffset = {
    x: 0,
    y: -30
  };

  demo1_md_html = `\
<button class="btn btn-primary" (click)="windowOpen = !windowOpen">显示/隐藏 信息窗体</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]">
  <amap-info-window
    [(isOpen)]="windowOpen"
    [position]="[116.397428, 39.90923]"
    (windowChange)="onWindowChange($event)"
    (windowOpen)="onWindowOpen($event)"
    (windowClose)="onWindowClose($event)">
    我是一个简单的信息窗体
  </amap-info-window>
</ngx-amap>`;

  demo2_md_html = `\
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-marker *ngFor="let marker of markers; index as i" [position]="marker">
    <amap-info-window [offset]="infoWindowOffset">
      我是第 <span class="text-danger">{{i+1}}</span> 个marker
    </amap-info-window>
  </amap-marker>
</ngx-amap>
`;

  constructor() { }

  ngOnInit() {
  }

  onWindowChange(e) {
    console.log('on info window change: ', e);
  }

  onWindowOpen(e) {
    console.log('on info window open: ', e);
  }

  onWindowClose(e) {
    console.log('on info window close: ', e);
  }
}
