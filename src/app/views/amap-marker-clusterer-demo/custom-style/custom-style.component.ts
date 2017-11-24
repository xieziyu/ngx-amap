import { Component, OnInit } from '@angular/core';
import { POINTS } from '../points';

@Component({
  selector: 'app-custom-style',
  templateUrl: './custom-style.component.html',
  styleUrls: ['./custom-style.component.scss']
})
export class CustomStyleComponent implements OnInit {
  demo_md_html = `\
<ngx-amap class="demo-map-lg" [resizeEnable]="true" [center]="[105, 34]" [zoom]="4">
  <amap-marker-clusterer [gridSize]="80" [styles]="customStyles">
    <amap-marker *ngFor="let marker of markers"
      [inCluster]="true"
      [position]="marker"
      [offset]="{x:-15, y:-15}">
    </amap-marker>
  </amap-marker-clusterer>
</ngx-amap>`;
  demo_md_ts = `\
import { Component, OnInit } from '@angular/core';
import { POINTS } from '../points';

@Component({
  selector: 'app-custom-style',
  templateUrl: './custom-style.component.html',
  styleUrls: ['./custom-style.component.scss']
})
export class CustomStyleComponent implements OnInit {
  customStyles =  [{
    url: 'http://a.amap.com/jsapi_demos/static/images/blue.png',
    size: { width: 32, height: 32 },
    offset: { x: -16, y: -16 }
  }, {
      url: 'http://a.amap.com/jsapi_demos/static/images/green.png',
      size: { width: 32, height: 32 },
      offset: { x: -16, y: -16 }
  }];

  markers = POINTS;

  constructor() { }

  ngOnInit() {
  }

}
`;

  customStyles =  [{
    url: 'http://a.amap.com/jsapi_demos/static/images/blue.png',
    size: { width: 32, height: 32 },
    offset: { x: -16, y: -16 }
  }, {
      url: 'http://a.amap.com/jsapi_demos/static/images/green.png',
      size: { width: 32, height: 32 },
      offset: { x: -16, y: -16 }
  }];

  markers = POINTS;

  constructor() { }

  ngOnInit() {
  }

}
