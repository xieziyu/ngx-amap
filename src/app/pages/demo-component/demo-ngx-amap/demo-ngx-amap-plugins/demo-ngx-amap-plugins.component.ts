import { Component } from '@angular/core';
declare const require: any; // DEMO IGNORE
declare const AMap: any;

@Component({
  selector: 'demo-ngx-amap-plugins',
  templateUrl: './demo-ngx-amap-plugins.component.html',
  styleUrls: ['./demo-ngx-amap-plugins.component.scss'],
})
export class DemoNgxAmapPluginsComponent {
  html = require('!!html-loader!./demo-ngx-amap-plugins.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-ngx-amap-plugins.component.ts').default; // DEMO IGNORE

  onPluginsLoaded(mapObj: AMap.Map) {
    const mousetool = new AMap.MouseTool(mapObj);
    mousetool.marker(); // 使用鼠标工具，在地图上画标记点
    const ruler = new AMap.RangingTool(mapObj);
    ruler.turnOn();
  }
}
