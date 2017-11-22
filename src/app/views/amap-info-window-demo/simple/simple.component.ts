import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  demo_md_html = `\
<button class="btn btn-outline-primary" (click)="open = !open">显示/隐藏 信息窗体</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]">
  <amap-info-window [(isOpen)]="open" [position]="[116.397428, 39.90923]">
    我是一个简单的信息窗体
  </amap-info-window>
</ngx-amap>
`;

  open = true;

  constructor() { }

  ngOnInit() {
  }

}
