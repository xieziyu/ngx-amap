import { Component, ElementRef, OnInit, Input,
  OnDestroy, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoggerService } from '../../services/logger/logger.service';
import { MapAPIService } from '../../services/map-api/map-api.service';
import { MarkerService } from '../../services/marker/marker.service';
import { InfoWindowService } from '../../services/info-window/info-window.service';
import { MapOptions } from '../../types/interface';
import { LngLat, Size } from '../../types/class';
import { Utils } from '../../utils/utils';
import { ChangeFilter } from '../../utils/change-filter';
import { PolylineService } from '../../services/polyline/polyline.service';
import { ToolBarService } from '../../services/toolbar/toolbar.service';

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
    MapAPIService,
    MarkerService,
    InfoWindowService,
    PolylineService,
    ToolBarService
  ]
})
export class NgxAmapComponent implements OnInit, OnDestroy, OnChanges {
  TAG = 'ngx-amap';

  // These properties are supported in MapOptions:
  @Input() view: any; // TODO: View2D
  @Input() layers: any[]; // TODO: TileLayer
  @Input() zoom: number;
  @Input() center: LngLat;
  @Input() labelzIndex: number;
  @Input() zooms: number[];
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
  @Input() features: string[];
  @Input() showBuildingBlock: boolean;

  // Extra property:
  @Input() city: string;
  @Input() name: string;

  // ngx-amap events:
  @Output() ready = new EventEmitter();
  @Output() mapClick = new EventEmitter();
  @Output() dblClick = new EventEmitter();
  @Output() complete = new EventEmitter();
  @Output() mapmove = new EventEmitter();
  @Output() movestart = new EventEmitter();
  @Output() moveend = new EventEmitter();
  @Output() zoomchange = new EventEmitter();
  @Output() zoomstart = new EventEmitter();
  @Output() zoomend = new EventEmitter();
  @Output() resize = new EventEmitter();
  @Output() rightClick = new EventEmitter();
  @Output() mouseMove = new EventEmitter();
  @Output() mouseOver = new EventEmitter();
  @Output() mouseWheel = new EventEmitter();
  @Output() mouseOut = new EventEmitter();
  @Output() mouseUp = new EventEmitter();
  @Output() mouseDown = new EventEmitter();
  @Output() touchStart = new EventEmitter();
  @Output() touchMove = new EventEmitter();
  @Output() touchEnd = new EventEmitter();
  @Output() hotspotClick = new EventEmitter();
  @Output() hotspotOver = new EventEmitter();
  @Output() hotspotOut = new EventEmitter();
  @Output() dragStart = new EventEmitter();
  @Output() dragging = new EventEmitter();
  @Output() dragEnd = new EventEmitter();

  private _inited = false;
  private _subscriptions: Subscription;

  constructor(private el: ElementRef,
    private api: MapAPIService,
    private logger: LoggerService) { }

  ngOnInit() {
    this.logger.d(this.TAG, 'map api initializing...');
    const container = this.el.nativeElement.querySelector('div.ngx-amap-container-inner');
    const options = Utils.getOptionsFor<MapOptions>(this, ALL_OPTIONS);
    this.logger.d(this.TAG, 'map options:', options);
    this.api.createMap(container, options)
      .then(map => this.ready.emit(map))
      .then(() => this.logger.d(this.TAG, 'map is ready.'))
      .catch(() => this.logger.e(this.TAG, 'failed to load AMap script.'));
    this.bindEvents();
    this._inited = true;
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this.api.destroyMap();
    this.logger.d(this.TAG, 'map api destroyed.');
  }

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);
    if (this._inited) {
      filter.has<number>('zoom').subscribe(v => this.setZoom(v));
      filter.has<number[]>('center').subscribe(v => this.setCenter(v));
    }

    // Not included in OPTIONS
    filter.has<string>('city').subscribe(v => this.setCity(v));
  }

  private bindEvents() {
    this._subscriptions = this.api.bindMapEvents('complete').subscribe(e => this.complete.emit(e));
    this._subscriptions.add(this.api.bindMapEvents('mapmove').subscribe(e => this.mapmove.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('movestart').subscribe(e => this.movestart.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('moveend').subscribe(e => this.moveend.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('zoomchange').subscribe(e => this.zoomchange.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('zoomstart').subscribe(e => this.zoomstart.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('zoomend').subscribe(e => this.zoomend.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('resize').subscribe(e => this.resize.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('click').subscribe(e => this.mapClick.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('dblclick').subscribe(e => this.dblClick.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('rightclick').subscribe(e => this.rightClick.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('mousemove').subscribe(e => this.mouseMove.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('mouseover').subscribe(e => this.mouseOver.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('mousewheel').subscribe(e => this.mouseWheel.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('mouseup').subscribe(e => this.mouseUp.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('mouseout').subscribe(e => this.mouseOut.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('mousedown').subscribe(e => this.mouseDown.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('touchstart').subscribe(e => this.touchStart.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('touchmove').subscribe(e => this.touchMove.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('touchend').subscribe(e => this.touchEnd.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('hotspotclick').subscribe(e => this.hotspotClick.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('hotspotover').subscribe(e => this.hotspotOver.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('hotspotout').subscribe(e => this.hotspotOut.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('dragstart').subscribe(e => this.dragStart.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('dragging').subscribe(e => this.dragging.emit(e)));
    this._subscriptions.add(this.api.bindMapEvents('dragend').subscribe(e => this.dragEnd.emit(e)));
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

  getSize(): Promise<Size> {
    return this.api.map.then(map => map.getSize());
  }
}
