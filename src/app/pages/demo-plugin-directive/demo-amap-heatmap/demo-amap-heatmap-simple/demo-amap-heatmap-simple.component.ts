import { Component } from '@angular/core';
import { heatmapData } from './heatmap-data';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-heatmap-simple',
  templateUrl: './demo-amap-heatmap-simple.component.html',
  styleUrls: ['./demo-amap-heatmap-simple.component.scss'],
})
export class DemoAmapHeatmapSimpleComponent {
  html = require('!!html-loader!./demo-amap-heatmap-simple.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-heatmap-simple.component.ts').default; // DEMO IGNORE
  data = require('!!raw-loader!./heatmap-data.ts').default; // DEMO IGNORE
  options = {
    radius: 25,
    opacity: [0, 0.8],
    gradient: {
      0.5: 'blue',
      0.65: 'rgb(117,211,248)',
      0.7: 'rgb(0, 255, 0)',
      0.9: '#ffea00',
      '1.0': 'red',
    },
  };

  dataset = {
    data: heatmapData,
    max: 100,
  };

  onHeatmapReady(heatmap) {
    console.log('heatmap ready:', heatmap);
  }
}
