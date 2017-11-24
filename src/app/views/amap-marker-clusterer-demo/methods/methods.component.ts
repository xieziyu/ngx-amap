import { Component, OnInit, ViewChild } from '@angular/core';
import { AmapMarkerClustererDirective } from 'ngx-amap';
import { POINTS } from '../points';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  demo_md_html = `\
<ngx-amap class="demo-map-lg" [resizeEnable]="true" [center]="[105, 34]" [zoom]="4">
  <amap-marker-clusterer [gridSize]="80">
    <amap-marker *ngFor="let marker of markers"
      [inCluster]="true"
      [position]="marker"
      [offset]="{x:-15, y:-15}"
      [content]="markerContent">
    </amap-marker>
  </amap-marker-clusterer>
</ngx-amap>`;

  demo_md_ts = `\
import { Component, OnInit, ViewChild } from '@angular/core';
import { AmapMarkerClustererDirective } from 'ngx-amap';
import { POINTS } from '../points';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  markers = POINTS;

  @ViewChild(AmapMarkerClustererDirective) cluster: AmapMarkerClustererDirective;

  constructor() { }

  ngOnInit() {
  }

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
}`;

  markers = POINTS;

  @ViewChild(AmapMarkerClustererDirective) cluster: AmapMarkerClustererDirective;

  constructor() { }

  ngOnInit() {
  }

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
