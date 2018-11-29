import { Component, OnInit } from '@angular/core';
import { heatmapData } from '../heatmapData';

declare const require: any;

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  demo_html = require('!!html-loader!./simple.component.html');
  demo_ts = require('!!raw-loader!./simple.component.ts');

  options = {
    radius: 25,
    opacity: [0, 0.8],
    gradient: {
      '0.5': 'blue',
      '0.65': 'rgb(117,211,248)',
      '0.7': 'rgb(0, 255, 0)',
      '0.9': '#ffea00',
      '1.0': 'red'
    }
  };

  dataset = {
    data: heatmapData,
    max: 100
  };

  constructor() { }

  ngOnInit() {
  }

  onHeatmapReady(heatmap) {
    console.log('heatmap ready:', heatmap);
  }
}
