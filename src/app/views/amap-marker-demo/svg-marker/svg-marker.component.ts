import { Component, OnInit } from '@angular/core';
import { IIcon, ILabel } from 'ngx-amap/types/interface';

@Component({
  selector: 'app-svg-marker',
  templateUrl: './svg-marker.component.html',
  styleUrls: ['./svg-marker.component.scss']
})
export class SvgMarkerComponent implements OnInit {
  hidden = false;
  icon: IIcon;
  label: ILabel;
  shape = {
    shapeType: 'WaterDrop',
    fillColor: '#1f77b4',
    strokeWidth: 1,
    strokeColor: '#ccc',
    width: 28
  };
  shape2 = {
    shapeType: 'ShieldPin',
    fillColor: '#8c564b',
    strokeWidth: 1,
    strokeColor: '#ccc',
    width: 32
  };
  shape3 = {
    shapeType: 'SquarePin',
    fillColor: '#ff7f0e',
    strokeWidth: 1,
    strokeColor: '#ccc',
    width: 36
  };
  shape4 = {
    shapeType: 'FivePointsStar',
    fillColor: 'red',
    strokeWidth: 1,
    strokeColor: '#ccc',
    width: 40
  };
  demo_md_html = `\
  <ngx-amap
  class="demo-map"
  [resizeEnable]="true"
  [center]="[116.397428, 39.90923]"
  [zoom]="13"
>
  <amap-marker
    [position]="[116.311428, 39.90923]"
    [icon]="icon"
    [label]="label"
    type="svg"
  ></amap-marker>
  <amap-marker
    [position]="[116.411428, 39.90923]"
    [icon]="icon"
    [label]="label"
    type="svg"
    iconLabel="A"
    [shape]="shape"
  ></amap-marker>
  <amap-marker
    [position]="[116.422428, 39.90923]"
    [icon]="icon"
    [label]="label"
    type="svg"
    iconLabel="B"
    [shape]="shape2"
  ></amap-marker>
  <amap-marker
    [position]="[116.433428, 39.90923]"
    [icon]="icon"
    [label]="label"
    type="svg"
    iconLabel="C"
    [shape]="shape3"
  ></amap-marker>
  <amap-marker
    [position]="[116.444428, 39.90923]"
    [icon]="icon"
    [label]="label"
    type="svg"
    iconLabel="D"
    [shape]="shape4"
  ></amap-marker>
</ngx-amap>

`;

  demo_md_ts = `\
import { Component, OnInit } from '@angular/core';
import { IIcon, ILabel } from 'ngx-amap/types/interface';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  hidden = false;
  icon: IIcon;
  label: ILabel;
  shape = {
    shapeType: 'WaterDrop',
    fillColor: '#1f77b4',
    strokeWidth: 1,
    strokeColor: '#ccc',
    width: 28
  };
  shape2 = {
    shapeType: 'ShieldPin',
    fillColor: '#8c564b',
    strokeWidth: 1,
    strokeColor: '#ccc',
    width: 32
  };
  shape3 = {
    shapeType: 'SquarePin',
    fillColor: '#ff7f0e',
    strokeWidth: 1,
    strokeColor: '#ccc',
    width: 36
  };
  shape4 = {
    shapeType: 'FivePointsStar',
    fillColor: 'red',
    strokeWidth: 1,
    strokeColor: '#ccc',
    width: 40
  };
  constructor() { }

  ngOnInit() {
  }

  toggleLabel() {
    this.label = this.label ? null : {
      offset: {
        x: 20,
        y: 20
      },
      content: '我是marker的label标签'
    };
  }
}
`;

  constructor() { }

  ngOnInit() {
  }

  toggleLabel() {
    this.label = this.label ? null : {
      offset: {
        x: 20,
        y: 20
      },
      content: '我是marker的label标签'
    };
  }
}
