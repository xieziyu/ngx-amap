import { Component, OnInit } from '@angular/core';
import { IIcon, ILabel, IconLabel } from 'ngx-amap/types/interface';

@Component({
  selector: 'app-simple-marker',
  templateUrl: './simple-marker.component.html',
  styleUrls: ['./simple-marker.component.scss']
})
export class SimpleMarkerComponent implements OnInit {
  hidden = false;
  icon: string | IIcon;
  label: ILabel;
  iconLabel: IconLabel;
  flag = false;
  demo_md_html = `\
<button class="btn btn-outline-primary" (click)="hidden = !hidden">显示/隐藏 点标记</button>
<button class="btn btn-outline-primary" (click)="toggleIcon()">切换自定义图标</button>
<button class="btn btn-outline-primary" (click)="toggleLabel()">切换自定义文本标签</button>
<hr>
<ngx-amap class="demo-map" [resizeEnable]="true" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-marker [position]="[116.397428, 39.90923]" [hidden]="hidden" [icon]="icon" [label]="label"
  [iconLabel]="iconLabel"
  type="simple"
  (markerClick)="markerClick($event)"></amap-marker>
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
    this.toggle();
  }

  toggle() {
    this.icon = this.icon ? null : {
      src: '//webapi.amap.com/theme/v1.3/markers/b/mark_r.png',
      style: {
        width: '30px',
        height: '40px'
      }
    };
  }

  toggleIcon() {
    this.flag = !this.flag;

    this.icon = this.flag ? '<div style="background:red;width:20px;height:60px;"></div>' : {
      src: '//webapi.amap.com/theme/v1.3/markers/b/mark_r.png',
      style: {
        width: '30px',
        height: '40px'
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

  toggleIconLabel() {
    this.iconLabel = {
      innerHTML: String.fromCharCode('A'.charCodeAt(0) + Math.round(Math.random() * 10)),
      style: {
        color: '#fff',
        fontSize: '16px'
      }
    };
  }

  markerClick(e) {
    console.log(e);
  }
}
`;

  constructor() { }

  ngOnInit() {
    this.toggle();
  }

  toggle() {
    this.icon = this.icon ? null : {
      src: '//webapi.amap.com/theme/v1.3/markers/b/mark_r.png',
      style: {
        width: '30px',
        height: '40px'
      }
    };
  }

  toggleIcon() {
    this.flag = !this.flag;

    this.icon = this.flag ? '<div style="background:red;width:20px;height:60px;"></div>' : {
      src: '//webapi.amap.com/theme/v1.3/markers/b/mark_r.png',
      style: {
        width: '30px',
        height: '40px'
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

  toggleIconLabel() {
    this.iconLabel = {
      innerHTML: String.fromCharCode('A'.charCodeAt(0) + Math.round(Math.random() * 10)),
      style: {
        color: '#fff',
        fontSize: '16px'
      }
    };
  }

  markerClick(e) {
    console.log(e);
  }
}
