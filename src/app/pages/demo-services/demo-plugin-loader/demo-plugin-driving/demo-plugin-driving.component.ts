import { Component } from '@angular/core';
import { AmapPluginLoaderService } from 'ngx-amap';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-plugin-driving',
  templateUrl: './demo-plugin-driving.component.html',
  styleUrls: ['./demo-plugin-driving.component.scss'],
})
export class DemoPluginDrivingComponent {
  html = require('!!html-loader!./demo-plugin-driving.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-plugin-driving.component.ts').default; // DEMO IGNORE
  scss = require('!!raw-loader!./demo-plugin-driving.component.scss').default; // DEMO IGNORE
  /**
   * AMap.Driving needs:
   * + @types/amap-js-api-place-search
   * + @types/amap-js-api-driving
   */
  driving: AMap.Driving;

  constructor(private plugin: AmapPluginLoaderService) {}

  onMapReady(map: AMap.Map) {
    this.plugin.load('AMap.Driving').subscribe(() => {
      this.driving = new AMap.Driving({
        map,
        panel: 'panel',
      });

      this.driving.search([
        { keyword: '北京市地震局(公交站)', city: '北京' },
        { keyword: '亦庄文化园(地铁站)', city: '北京' },
      ]);
    });
  }
}
