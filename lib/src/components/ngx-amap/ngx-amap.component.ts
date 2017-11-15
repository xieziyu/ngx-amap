import { Component, ElementRef, OnInit, Input,
  OnDestroy, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { MapAPIService } from '../../services/map-api/map-api.service';
import { MapOptions } from '../../types/interface';
import { Utils } from '../../utils/utils';
import { LoggerService } from '../../utils/logger.service';

const ALL_OPTIONS = [
  'view',
  'layers',
  'zoom',
  'center',
  'labelzIndex',
  'zooms',
  'lang',
  'cursor',
  'crs',
  'animateEnable',
  'isHotspot',
  'defaultLayer',
  'rotateEnable',
  'resizeEnable',
  'showIndoorMap',
  'indoorMap',
  'expandZoomRange',
  'dragEnable',
  'zoomEnable',
  'doubleClickZoom',
  'keyboardEnable',
  'jogEnable',
  'scrollWheel',
  'touchZoom',
  'mapStyle',
  'features',
  'showBuildingBlock'
];

@Component({
  selector: 'ngx-amap',
  templateUrl: 'ngx-amap.component.html',
  styleUrls: ['ngx-amap.component.scss'],
  providers: [
    MapAPIService
  ]
})
export class NgxAmapComponent implements OnInit, OnDestroy, OnChanges {
  TAG = 'ngx-amap';

  // These properties are supported in MapOptions:
  @Input() view: any; // TODO: View2D
  @Input() layers: Array<any>; // TODO: TileLayer
  @Input() zoom: number;
  @Input() center: Array<number>;
  @Input() labelzIndex: number;
  @Input() zooms: Array<number>;
  @Input() lang: string;
  @Input() cursor: string;
  @Input() crs: string;
  @Input() animateEnable: boolean;
  @Input() isHotspot: boolean;
  @Input() defaultLayer: any; // TODO: TileLayer
  @Input() rotateEnable: boolean;
  @Input() resizeEnable: boolean;
  @Input() showIndoorMap: boolean;
  @Input() indoorMap: any; // TODO: IndoorMap
  @Input() expandZoomRange: boolean;
  @Input() dragEnable: boolean;
  @Input() zoomEnable: boolean;
  @Input() doubleClickZoom: boolean;
  @Input() keyboardEnable: boolean;
  @Input() jogEnable: boolean;
  @Input() scrollWheel: boolean;
  @Input() touchZoom: boolean;
  @Input() mapStyle: string;
  @Input() features: Array<string>;
  @Input() showBuildingBlock: boolean;

  // Extra property:
  @Input() city: string;
  @Input() name: string;

  // ngx-amap events:
  @Output() mapReady = new EventEmitter();

  constructor(private el: ElementRef,
    private api: MapAPIService,
    private logger: LoggerService) { }

  ngOnInit() {
    this.logger.d(this.TAG, 'on init');
    const container = this.el.nativeElement.querySelector('div.ngx-amap-container-inner');
    const options = Utils.getOptionsFor<MapOptions>(this, ALL_OPTIONS);
    this.api.createMap(container, options)
      .then(map => this.mapReady.emit(map))
      .then(() => this.logger.d(this.TAG, 'map is ready.'))
      .catch(() => this.logger.e(this.TAG, 'failed to load AMap script.'));
  }

  ngOnDestroy() {
    this.api.destroyMap();
    this.logger.d(this.TAG, 'map api destroyed.');
  }

  ngOnChanges(changes: SimpleChanges) {
    // TODO:
  }

  setFitView() {
    this.api.map.subscribe(map => map.setFitView());
  }
}
