export const TS = `\
import { Component, OnInit } from '@angular/core';
import { TS, HTML } from './code';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  code_ts = TS;
  code_html = HTML;

  lineArr = [
    // 起点
    [116.39, 39.91, 116.37, 39.91],

    // 第一段弧线
    [116.380298, 39.907771, 116.38, 39.90],

    // 第二段弧线
    [116.385298, 39.907771, 116.40, 39.90],

    // 第三段弧线，另一种描述方式
    [
      [116.392872, 39.887391],
      [116.40772, 39.909252],
      [116.41, 39.89]
    ],

    // 第四段弧线，每段最多两控制点
    [116.423857, 39.889498, 116.422312, 39.899639, 116.425273, 39.902273]
  ];

  constructor() { }

  ngOnInit() {
  }

}`;

export const HTML = `\
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-bezier-curve
    [path]="lineArr"
    [strokeColor]="'#FF33FF'"
    [strokeOpacity]="1"
    [strokeWeight]="3"
    strokeStyle="solid">
  </amap-bezier-curve>
</ngx-amap>`;
