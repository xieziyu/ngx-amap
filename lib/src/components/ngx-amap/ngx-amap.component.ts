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
import { PolygonService } from '../../services/polygon/polygon.service';
import { ToolBarService } from '../../services/toolbar/toolbar.service';
import { MarkerClustererService } from '../../services/marker-clusterer/marker-clusterer.service';
import { CircleService } from '../../services/circle/circle.service';
import { CircleMarkerService } from '../../services/circle-marker/circle-marker.service';
import { TextService } from '../../services/text/text.service';
import { BezierCurveService } from '../../services/bezier-curve/bezier-curve.service';
import { EllipseService } from '../../services/ellipse/ellipse.service';
import { RectangleService } from '../../services/rectangle/rectangle.service';

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
  'showBuildingBlock',
  'viewMode',
  'pitch',
  'pitchEnable',
  'buildingAnimation',
  'skyColor',
  'gridMapForeign'
];

/**
 * @example
 * <ngx-amap></ngx-amap>
 */
@Component({
  selector: 'ngx-amap',
  exportAs: 'amap',
  templateUrl: 'ngx-amap.component.html',
  styleUrls: ['ngx-amap.component.scss'],
  providers: [
    MapAPIService,
    MarkerService,
    InfoWindowService,
    PolylineService,
    ToolBarService,
    MarkerClustererService,
    CircleService,
    CircleMarkerService,
    PolygonService,
    TextService,
    BezierCurveService,
    EllipseService,
    RectangleService
  ]
})
export class NgxAmapComponent implements OnInit, OnDestroy, OnChanges {
  TAG = 'ngx-amap';

  /** 地图视口，用于控制影响地图静态显示的属性 */
  @Input() view: any; // TODO: View2D
  /** 地图图层数组，数组可以是图层 中的一个或多个，默认为普通二维地图 */
  @Input() layers: any[]; // TODO: TileLayer
  /** 地图显示的缩放级别 */
  @Input() zoom: number;
  /** 地图中心点坐标值 */
  @Input() center: LngLat;
  /** 地图标注显示顺序，大于110即可将底图上的默认标注显示在覆盖物（圆、折线、面）之上 */
  @Input() labelzIndex: number;
  /** 地图显示的缩放级别范围 */
  @Input() zooms: number[];
  /** 地图语言类型，可选值：zh_cn：中文简体，en：英文，zh_en：中英文对照 */
  @Input() lang: string;
  /** 地图默认鼠标样式 */
  @Input() cursor: string;
  /** 地图显示的参考坐标系 */
  @Input() crs: string;
  /** 地图平移过程中是否使用动画 */
  @Input() animateEnable: boolean;
  /** 是否开启地图热点 */
  @Input() isHotspot: boolean;
  /** 当前地图中默认显示的图层 */
  @Input() defaultLayer: any; // TODO: TileLayer
  /** 地图是否可旋转 */
  @Input() rotateEnable: boolean;
  /** 是否监控地图容器尺寸变化 */
  @Input() resizeEnable: boolean;
  /** 是否在有矢量底图的时候自动展示室内地图 */
  @Input() showIndoorMap: boolean;
  /** 在展示矢量图的时候自动展示室内地图图层 */
  @Input() indoorMap: any; // TODO: IndoorMap
  /** 是否支持可以扩展最大缩放级别，和zooms属性配合使用 */
  @Input() expandZoomRange: boolean;
  /** 地图是否可通过鼠标拖拽平移 */
  @Input() dragEnable: boolean;
  /** 地图是否可缩放 */
  @Input() zoomEnable: boolean;
  /** 地图是否可通过双击鼠标放大地图 */
  @Input() doubleClickZoom: boolean;
  /** 地图是否可通过键盘控制 */
  @Input() keyboardEnable: boolean;
  /** 地图是否使用缓动效果 */
  @Input() jogEnable: boolean;
  /** 地图是否可通过鼠标滚轮缩放浏览 */
  @Input() scrollWheel: boolean;
  /** 地图在移动终端上是否可通过多点触控缩放浏览地图 */
  @Input() touchZoom: boolean;
  /** 设置地图的显示样式 */
  @Input() mapStyle: string;
  /** 设置地图上显示的元素种类 */
  @Input() features: string[];
  /** 设置地图显示3D楼块效果 */
  @Input() showBuildingBlock: boolean;
  /** 默认为'2D'，可选'3D' (amap v1.4.0)*/
  @Input() viewMode: string;
  /** 俯仰角度，默认0，[0,83]，2D地图下无效 (amap v1.4.0)*/
  @Input() pitch: number;
  /** 是否允许设置俯仰角度，3D视图下为true，2D视图下无效 (amap v1.4.0)*/
  @Input() pitchEnable: boolean;
  /** 楼块出现和消失的时候是否显示动画过程，3D视图有效 (amap v1.4.0)*/
  @Input() buildingAnimation: boolean;
  /** 调整天空颜色，配合自定义地图，3D视图有效，如'#ff0000' (amap v1.4.0)*/
  @Input() skyColor: string;
  /** 显示国外的地图细节 */
  @Input() gridMapForeign: boolean;

  /** 额外：设置城市 */
  @Input() city: string;
  /** 额外：设置地图名字 */
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
