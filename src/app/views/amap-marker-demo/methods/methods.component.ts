import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { AmapMarkerDirective } from 'ngx-amap';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit, AfterViewInit {
  demo_md_html = `\
<button class="btn btn-primary" (click)="startMove()">开始动画</button>
<button class="btn btn-primary" (click)="pauseMove()">暂停动画</button>
<button class="btn btn-primary" (click)="resumeMove()">继续动画</button>
<button class="btn btn-primary" (click)="stopMove()">停止动画</button>
<hr>
<ngx-amap #map class="demo-map" [resizeEnable]="true" [center]="[116.397428, 39.90923]" [zoom]="17">
  <amap-marker
    [position]="[116.397428, 39.90923]"
    icon="http://webapi.amap.com/images/car.png"
    [offset]="{x:-26,y:-13}"
    [autoRotation]="true"
    (moving)="passedPath = $event.passedPath"
    (ready)="onMarkerReady(map)">
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
</ngx-amap>
`;

  demo_md_ts = `\
import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { AmapMarkerDirective } from 'ngx-amap';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit, AfterViewInit {
  lineArr: number[][];
  passedPath: number[][];
  car: AmapMarkerDirective;

  @ViewChildren(AmapMarkerDirective) markers: QueryList<AmapMarkerDirective>;

  constructor() { }

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
`;

  lineArr: number[][];
  passedPath: number[][];
  car: AmapMarkerDirective;

  @ViewChildren(AmapMarkerDirective) markers: QueryList<AmapMarkerDirective>;

  constructor() { }

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
