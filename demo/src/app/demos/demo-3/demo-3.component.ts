import { Component } from '@angular/core';
import * as AMapType from 'ngx-amap/types';

@Component({
  selector: 'app-demo-3',
  templateUrl: './demo-3.component.html',
  styleUrls: ['./demo-3.component.scss']
})
export class Demo3Component {
  markerHidden = false;
  customIcon: AMapType.IconOptions;
  customLabel: AMapType.LabelOptions;

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
}
