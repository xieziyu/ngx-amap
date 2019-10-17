import { Component, OnInit, ViewChild } from '@angular/core';
import { AmapMarkerClustererDirective } from 'ngx-amap';
import { POINTS } from '../points';

declare const require: any;

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss'],
})
export class MethodsComponent implements OnInit {
  demo_md_html = require('!!html-loader!./methods.component.html');
  demo_md_ts = require('!!raw-loader!./methods.component.ts');

  markers = POINTS;

  @ViewChild(AmapMarkerClustererDirective, { static: true })
  cluster: AmapMarkerClustererDirective;

  constructor() {}

  ngOnInit() {}

  getMethods() {
    if (this.cluster) {
      this.cluster.getMap().then(v => console.log('getMap()', v));
      this.cluster.getClustersCount().then(v => console.log('getClustersCount()', v));
      this.cluster.getGridSize().then(v => console.log('getGridSize()', v));
      this.cluster.getMarkers().then(v => console.log('getMarkers()', v));
      this.cluster.getMaxZoom().then(v => console.log('getMaxZoom()', v));
      this.cluster.getMinClusterSize().then(v => console.log('getMinClusterSize()', v));
      this.cluster.getStyles().then(v => console.log('getStyles()', v));
    }
  }
}
