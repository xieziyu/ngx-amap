import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { IIcon, ILabel } from 'ngx-amap/types/interface';
import { AmapMarkerDirective } from 'ngx-amap';

@Component({
  selector: 'app-amap-marker-demo',
  templateUrl: './amap-marker-demo.component.html',
  styleUrls: ['./amap-marker-demo.component.scss']
})
export class AmapMarkerDemoComponent implements OnInit, AfterViewInit {
  // tslint:disable-next-line:max-line-length
  demo1_md_html = `<ngx-amap class="demo-map" [resizeEnable]="true" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-marker [position]="[116.397428, 39.90923]" [hidden]="markerHidden" [icon]="customIcon" [label]="customLabel" (markerClick)="onMarkerClick($event)"></amap-marker>
</ngx-amap>`;
  demo1_md_ts = `\
  onMarkerClick(event) {
    console.log('on marker click:', event);
  }

  toggleMarker() {
    this.markerHidden = !this.markerHidden;
  }

  toggleIcon() {
    this.customIcon = this.customIcon ? null : {
      size: {
        width: 40,
        height: 50
      },  // ISize
      image: 'http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png',
      imageOffset: {
        x: 0,
        y: -60
      } // IPixel
    };
  }

  toggleLabel() {
    this.customLabel = this.customLabel ? null : {
      offset: {
        x: 20,
        y: 20
      }, // IPixel
      content: '我是marker的label标签'
    };
  }
`;

  demo2_md_html = `\
<button class="btn btn-primary" (click)="startMove()">开始动画</button>
<button class="btn btn-primary" (click)="pauseMove()">暂停动画</button>
<button class="btn btn-primary" (click)="resumeMove()">继续动画</button>
<button class="btn btn-primary" (click)="stopMove()">停止动画</button>
<hr>
<ngx-amap class="demo-map" [resizeEnable]="true" [center]="[116.397428, 39.90923]" [zoom]="17">
  <amap-marker #car
    [position]="[116.397428, 39.90923]"
    icon="http://webapi.amap.com/images/car.png"
    [offset]="{x:-26,y:-13}"
    [autoRotation]="true"
    (moving)="passedPath = $event.passedPath"
    (markerReady)="onMarkerReady(map)">
  </amap-marker>
  <amap-polyline
    [path]="lineArr"
    [strokeColor]="'#00A'"
    [strokeWeight]="3">
  </amap-polyline>
  <amap-polyline
    [path]="passedPath"
    [strokeColor]="'#F00'"
    [strokeWeight]="3">
  </amap-polyline>
</ngx-amap>`;

  demo2_md_ts = `\
ngOnInit() {
  this.lineArr = [];
  let lngX = 116.397428, latY = 39.90923;
  this.lineArr.push([lngX, latY]);
  for (let i = 1; i < 4; i++) {
      lngX = lngX + Math.random() * 0.05;
      if (i % 2) {
          latY = latY + Math.random() * 0.0001;
      } else {
          latY = latY + Math.random() * 0.06;
      }
      this.lineArr.push([lngX, latY]);
  }
}

ngAfterViewInit() {
  this.car = this.markers.last;
}

startMove() {
  this.car.moveAlong(this.lineArr, 500);
}

pauseMove() {
  this.car.pauseMove();
}

resumeMove() {
  this.car.resumeMove();
}

stopMove() {
  this.car.stopMove();
}

onMarkerReady(map: any) {
  map.setFitView();
}
`;

  markerHidden = false;
  customIcon: IIcon;
  customLabel: ILabel;
  lineArr: number[][];
  passedPath: number[][];
  car: AmapMarkerDirective;

  @ViewChildren(AmapMarkerDirective) markers: QueryList<AmapMarkerDirective>;

  constructor() { }

  onMarkerClick(event) {
    console.log('on marker click:', event);
  }

  toggleMarker() {
    this.markerHidden = !this.markerHidden;
  }

  toggleIcon() {
    this.customIcon = this.customIcon ? null : {
      size: {
        width: 40,
        height: 50
      },  // ISize
      image: 'http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png',
      imageOffset: {
        x: 0,
        y: -60
      } // IPixel
    };
  }

  toggleLabel() {
    this.customLabel = this.customLabel ? null : {
      offset: {
        x: 20,
        y: 20
      }, // IPixel
      content: '我是marker的label标签'
    };
  }

  ngOnInit() {
    this.lineArr = [];
    let lngX = 116.397428, latY = 39.90923;
    this.lineArr.push([lngX, latY]);
    for (let i = 1; i < 4; i++) {
        lngX = lngX + Math.random() * 0.05;
        if (i % 2) {
            latY = latY + Math.random() * 0.0001;
        } else {
            latY = latY + Math.random() * 0.06;
        }
        this.lineArr.push([lngX, latY]);
    }
  }

  ngAfterViewInit() {
    this.car = this.markers.last;
  }

  startMove() {
    this.car.moveAlong(this.lineArr, 500);
  }

  pauseMove() {
    this.car.pauseMove();
  }

  resumeMove() {
    this.car.resumeMove();
  }

  stopMove() {
    this.car.stopMove();
  }

  onMarkerReady(map: any) {
    map.setFitView();
  }
}
