import { Component, OnInit, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import * as AMapType from 'ngx-amap/types';
import { AmapMarkerDirective, NgxAmapComponent, AmapPolylineDirective } from 'ngx-amap';

@Component({
  selector: 'app-demo-3',
  templateUrl: './demo-3.component.html',
  styleUrls: ['./demo-3.component.scss']
})
export class Demo3Component implements OnInit, AfterViewInit {
  markerHidden = false;
  customIcon: AMapType.IconOptions;
  customLabel: AMapType.LabelOptions;
  lineArr: number[][];
  passedPath: number[][];
  car: AmapMarkerDirective;

  @ViewChildren(NgxAmapComponent) maps: QueryList<NgxAmapComponent>;
  @ViewChildren(AmapMarkerDirective) markers: QueryList<AmapMarkerDirective>;

  onMarkerClick(event) {
    console.log('on marker click:', event);
  }

  toggle() {
    this.markerHidden = !this.markerHidden;
  }

  toggleIcon() {
    this.customIcon = this.customIcon ? undefined : {
      size: {
        width: 40,
        height: 50
      },  // AMapType.SizeOptions
      image: 'http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png',
      imageOffset: {
        x: 0,
        y: -60
      } // AMapType.PixelOptions
    };
  }

  toggleLabel() {
    this.customLabel = this.customLabel ? undefined : {
      offset: {
        x: 20,
        y: 20
      }, // AMapType.PixelOptions
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
    this.maps.last.setFitView();
    this.car = this.markers.last;
  }

  onMoving(e) {
    this.passedPath = e.passedPath;
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
}
