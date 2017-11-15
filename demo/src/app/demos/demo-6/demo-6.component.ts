import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-6',
  templateUrl: './demo-6.component.html'
})
export class Demo6Component implements OnInit {
  lineArr = [
    [116.368904, 39.913423],
    [116.382122, 39.901176],
    [116.387271, 39.912501],
    [116.398258, 39.904600]
  ];

  lineOptions = {
    path: this.lineArr,       // 设置线覆盖物路径
    strokeColor: '#3366FF',   // 线颜色
    strokeOpacity: 1,         // 线透明度
    strokeWeight: 5,          // 线宽
    strokeStyle: 'solid',     // 线样式
    strokeDasharray: [10, 5]  // 补充线样式
  };

  constructor() { }

  ngOnInit() {
  }
}
