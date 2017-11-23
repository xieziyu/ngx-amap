import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  demo_md_html = `\
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

  demo_md_ts = `\
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  lineArr = [
    [116.368904, 39.913423],
    [116.382122, 39.901176],
    [116.387271, 39.912501],
    [116.398258, 39.904600]
  ];

  constructor() { }

  ngOnInit() {
  }

}
`;

  lineArr = [
    [116.368904, 39.913423],
    [116.382122, 39.901176],
    [116.387271, 39.912501],
    [116.398258, 39.904600]
  ];

  constructor() { }

  ngOnInit() {
  }

}
