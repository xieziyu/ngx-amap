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

  demo_md_html = `\
<button class="btn btn-outline-primary" (click)="hidden = !hidden">显示/隐藏 点标记</button>
<button class="btn btn-outline-primary" (click)="toggleIcon()">切换自定义图标</button>
<button class="btn btn-outline-primary" (click)="toggleLabel()">切换自定义文本标签</button>
<hr>
<ngx-amap class="demo-map" [resizeEnable]="true" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-marker [position]="[116.397428, 39.90923]" [hidden]="hidden" [icon]="icon" [label]="label" type="svg"></amap-marker>
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

  constructor() { }

  ngOnInit() {
  }

  toggleIcon() {
    this.icon = this.icon ? null : {
      size: {
        width: 40,
        height: 50
      },
      image: 'http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png',
      imageOffset: {
        x: 0,
        y: -60
      }
    };
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

  toggleIcon() {
    this.icon = this.icon ? null : {
      size: {
        width: 40,
        height: 50
      },
      image: 'http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png',
      imageOffset: {
        x: 0,
        y: -60
      }
    };
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
