import { Component, OnDestroy } from '@angular/core';
import { AmapUILoaderService } from 'ngx-amap';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-ui-svg-marker',
  templateUrl: './demo-ui-svg-marker.component.html',
  styleUrls: ['./demo-ui-svg-marker.component.scss'],
})
export class DemoUiSvgMarkerComponent implements OnDestroy {
  html = require('!!html-loader!./demo-ui-svg-marker.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-ui-svg-marker.component.ts').default; // DEMO IGNORE
  marker1: any;
  marker2: any;

  constructor(private uiLoader: AmapUILoaderService) {}

  onMapReady(map: AMap.Map) {
    this.uiLoader.load(['overlay/SvgMarker']).subscribe(SvgMarker => {
      /**
       * 示例选自官方示例文档：
       * https://lbs.amap.com/api/amap-ui/demos/amap-ui-svgmarker/index/
       */
      if (!SvgMarker.supportSvg) {
        // 当前环境并不支持 SVG，此时 SvgMarker 会回退到父类，即 SimpleMarker
        alert('当前环境不支持SVG');
      }

      // 创建一个水滴状的 shape
      const shape = new SvgMarker.Shape.WaterDrop({
        height: 60, // 高度
        // width: **, // 不指定,维持默认的宽高比
        fillColor: 'orange', // 填充色
        // strokeWidth: 1, // 描边宽度
        // strokeColor: '#666' // 描边颜色
      });

      // 利用该shape构建SvgMarker
      this.marker1 = new SvgMarker(shape, {
        zIndex: 120,
        map,
        position: map.getCenter(),
        showPositionPoint: true,
      });

      // 另外一个SvgMarker
      this.marker2 = new SvgMarker(
        new SvgMarker.Shape.WaterDrop({
          height: 100, // 高度
          fillColor: 'purple',
        }),
        {
          zIndex: 110,
          map,
          position: map.getCenter(),
          showPositionPoint: true,
        },
      );
    });
  }

  ngOnDestroy() {
    this.marker1.setMap(null);
    this.marker2.setMap(null);
  }
}
