export const TS = `\
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
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
  editor = false;
  editorOptions = {
    'getCtrlLineOptions': function() {
      // 自定义控制线的样式
      return {
        'lineCap': 'round',
        'strokeDasharray': [10, 10],
        'strokeColor': 'blue', // 线颜色
        'strokeOpacity': 0.5, // 线透明度
        'strokeWeight': 3, // 线宽
        'strokeStyle': 'dashed' // 线样式
      };
    }
  };

  constructor() { }

  ngOnInit() {
  }

  getMethods(curve) {
    if (curve) {
      curve.getOptions().then(v => console.log('getOptions():', v));
      curve.getPath().then(v => console.log('getPath():', v));
      curve.getBounds().then(v => console.log('getBounds():', v));
      curve.getLength().then(v => console.log('getLength():', v));
      curve.getExtData().then(v => console.log('getExtData():', v));
    }
  }
}`;

export const HTML = `\
<button type="button" class="btn btn-outline-primary" (click)="getMethods(myCurve)">调用Getter方法</button>
<button type="button" class="btn btn-outline-primary" (click)="editor = !editor">打开/关闭编辑功能</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-bezier-curve #myCurve="bezier-curve"
    [editor]="editor"
    [editorOptions]="editorOptions"
    [path]="lineArr"
    [strokeColor]="'#FF33FF'"
    [strokeOpacity]="1"
    [strokeWeight]="3"
    strokeStyle="solid">
  </amap-bezier-curve>
</ngx-amap>`;
