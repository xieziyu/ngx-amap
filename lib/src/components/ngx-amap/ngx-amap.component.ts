import { Component, ElementRef, OnInit, Input,
  OnDestroy, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { LoggerService } from '../../services/logger';
import { MapAPIService } from '../../services/map-api/map-api.service';
import { MapOptions } from '../../types/interface';
import { LngLat, Size } from '../../types/class';
import { Utils } from '../../utils/utils';
import { ChangeFilter } from '../../utils/change-filter';

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

  private _inited = false;

  constructor(private el: ElementRef,
    private api: MapAPIService,
    private logger: LoggerService) { }

  ngOnInit() {
    this.logger.d(this.TAG, 'map api initializing...');
    const container = this.el.nativeElement.querySelector('div.ngx-amap-container-inner');
    const options = Utils.getOptionsFor<MapOptions>(this, ALL_OPTIONS);
    this.logger.d(this.TAG, 'map options:', options);
    this.api.createMap(container, options)
      .then(map => this.mapReady.emit(map))
      .then(() => this.logger.d(this.TAG, 'map is ready.'))
      .catch(() => this.logger.e(this.TAG, 'failed to load AMap script.'));
    this._inited = true;
  }

  ngOnDestroy() {
    this.api.destroyMap();
    this.logger.d(this.TAG, 'map api destroyed.');
  }

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);
    if (this._inited) {
      filter.notEmpty<number>('labelzIndex').subscribe(v => this.setlabelzIndex(v));
      filter.notEmpty<number>('zoom').subscribe(v => this.setZoom(v));
      filter.notEmpty<number[]>('center').subscribe(v => this.setCenter(v));
    }

    // Not included in OPTIONS
    filter.notEmpty<string>('city').subscribe(v => this.setCity(v));
  }

  // Setters
  setFitView() {
    return this.api.map.then(map => map.setFitView());
  }

  setZoom(level: number) {
    return this.api.map.then(map => map.setZoom(level));
  }

  setCenter(position: LngLat|number[]) {
    return this.api.map.then(map => map.setCenter(position));
  }

  setZoomAndCenter(zoomLevel: number, center: LngLat|number[]) {
    return this.api.map.then(map => map.setZoomAndCenter(zoomLevel, center));
  }

  setlabelzIndex(index: number) {
    return this.api.map.then(map => map.setlabelzIndex(index));
  }

  setCity(city: string) {
    return this.api.map.then(map => new Promise(resolve => map.setCity(city, resolve)));
  }

  clearMap() {
    return this.api.map.then(map => map.clearMap());
  }

  // Getters
  getZoom() {
    return this.api.map.then(map => map.getZoom());
  }

  getCenter() {
    return this.api.map.then(map => map.getCenter());
  }

  getCity() {
    return this.api.map.then(map => new Promise(resolve => map.getCity(resolve)));
  }

  getSize() {
    return this.api.map.then(map => map.getSize());
  }
}
