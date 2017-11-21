import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amap-polyline-demo',
  templateUrl: './amap-polyline-demo.component.html',
  styleUrls: ['./amap-polyline-demo.component.scss']
})
export class AmapPolylineDemoComponent implements OnInit {
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

  demo1_md_html = `\
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-polyline
    [path]="lineArr"
    [strokeColor]="'#3366FF'"
    [strokeOpacity]="1"
    [strokeWeight]="5"
    [strokeStyle]="'solid'"
    [strokeDasharray]="[10, 5]">
  </amap-polyline>
</ngx-amap>
`;

  demo2_md_html = `\
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-polyline [options]="lineOptions"></amap-polyline>
</ngx-amap>
`;

  demo2_md_ts = `\
lineOptions = {
  path: this.lineArr,       // 设置线覆盖物路径
  strokeColor: '#3366FF',   // 线颜色
  strokeOpacity: 1,         // 线透明度
  strokeWeight: 5,          // 线宽
  strokeStyle: 'solid',     // 线样式
  strokeDasharray: [10, 5]  // 补充线样式
};
`;

  constructor() { }

  ngOnInit() {
  }

}
