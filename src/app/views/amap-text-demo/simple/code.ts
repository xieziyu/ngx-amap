export const TS = `\
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  hidden = false;
  style = {
    'background-color': 'yellow',
    'border': 'solid 1px #0088ff',
    'padding': '10px 20px'
  };

  constructor() { }

  ngOnInit() {
  }

}`;

export const HTML = `\
<button class="btn btn-outline-primary" (click)="hidden = !hidden">显示/隐藏 点标记</button>
<hr>
<ngx-amap class="demo-map" [resizeEnable]="true" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-marker
    text="纯文本标记"
    textAlign="center"
    verticalAlign="middle"
    cursor="pointer"
    [position]="[116.397428, 39.90923]"
    [hidden]="hidden"
    [draggable]="true"
    [angle]="10"
    [style]="style">
  </amap-marker>
</ngx-amap>`;
