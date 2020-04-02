import {
  Component,
  OnInit,
  Input,
  ElementRef,
  OnDestroy,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  NgZone,
} from '@angular/core';
import { zip } from 'rxjs';
import { AMapService } from '../../shared/amap.service';
import { EventBinderService } from '../../shared/event-binder.service';
import { PluginLoaderService } from '../../shared/plugin-loader.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { getOptions, ChangeFilter } from '../../utils';

const TAG = 'ngx-amap';
const ALL_OPTIONS = [
  'view',
  'layers',
  'zoom',
  'center',
  'labelzIndex',
  'zooms',
  'lang',
  'defaultCursor',
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
  'touchZoomCenter',
  'mapStyle',
  'features',
  'showBuildingBlock',
  'viewMode',
  'pitch',
  'pitchEnable',
  'buildingAnimation',
  'skyColor',
  'preloadMode',
  'mask',
  'maxPitch',
  'rotation',
  'forceVector',
  'gridMapForeign',
];

@Component({
  selector: 'ngx-amap',
  exportAs: 'amap',
  templateUrl: './ngx-amap.component.html',
  styleUrls: ['./ngx-amap.component.scss'],
  providers: [AMapService, PluginLoaderService],
})
export class NgxAmapComponent implements OnInit, OnDestroy, OnChanges {
  // ---- Map Options ----
  /**
   * 地图视口，用于控制影响地图静态显示的属性
   */
  @Input() view: AMap.View2D;
  /**
   * 地图图层数组，数组可以是图层 中的一个或多个，默认为普通二维地图
   */
  @Input() layers: AMap.Layer[];
  /**
   * 地图显示的缩放级别
   */
  @Input() zoom: number;
  /**
   * 地图中心点坐标值
   */
  @Input() center: AMap.LocationValue;
  /**
   * 地图标注显示顺序
   */
  @Input() labelzIndex: number;
  /**
   * 地图显示的缩放级别范围
   */
  @Input() zooms: [number, number];
  /**
   * 地图语言类型
   */
  @Input() lang: AMap.Lang;
  /**
   * 地图默认鼠标样式
   */
  @Input() defaultCursor: string;
  /**
   * 地图显示的参考坐标系
   */
  @Input() crs: 'EPSG3857' | 'EPSG3395' | 'EPSG4326';
  /**
   * 地图平移过程中是否使用动画
   */
  @Input() animateEnable: boolean;
  /**
   * 是否开启地图热点和标注的hover效果
   */
  @Input() isHotspot: boolean;
  /**
   * 当前地图中默认显示的图层
   */
  @Input() defaultLayer: AMap.TileLayer;
  /**
   * 地图是否可旋转
   */
  @Input() rotateEnable: boolean;
  /**
   * 是否监控地图容器尺寸变化
   */
  @Input() resizeEnable: boolean;
  /**
   * 是否在有矢量底图的时候自动展示室内地图
   */
  @Input() showIndoorMap: boolean;
  /**
   * 在展示矢量图的时候自动展示室内地图图层
   */
  @Input() indoorMap: any;
  /**
   * 是否支持可以扩展最大缩放级别
   */
  @Input() expandZoomRange: boolean;
  /**
   * 地图是否可通过鼠标拖拽平移
   */
  @Input() dragEnable: boolean;
  /**
   * 地图是否可缩放
   */
  @Input() zoomEnable: boolean;
  /**
   * 地图是否可通过双击鼠标放大地图
   */
  @Input() doubleClickZoom: boolean;
  /**
   * 地图是否可通过键盘控制
   */
  @Input() keyboardEnable: boolean;
  /**
   * 地图是否使用缓动效果
   */
  @Input() jogEnable: boolean;
  /**
   * 地图是否可通过鼠标滚轮缩放浏览
   */
  @Input() scrollWheel: boolean;
  /**
   * 地图在移动终端上是否可通过多点触控缩放浏览地图
   */
  @Input() touchZoom: boolean;
  /**
   * 当touchZoomCenter=1的时候，手机端双指缩放的以地图中心为中心，否则默认以双指中间点为中心
   */
  @Input() touchZoomCenter: number;
  /**
   * 设置地图的显示样式
   */
  @Input() mapStyle: string;
  /**
   * 设置地图上显示的元素种类
   */
  @Input() features: AMap.Map.Feature[] | 'all' | AMap.Map.Feature;
  /**
   * 设置地图显示3D楼块效果
   */
  @Input() showBuildingBlock: boolean;
  /**
   * 视图模式
   */
  @Input() viewMode: AMap.Map.ViewMode;
  /**
   * 俯仰角度
   */
  @Input() pitch: number;
  /**
   * 是否允许设置俯仰角度
   */
  @Input() pitchEnable: boolean;
  /**
   * 楼块出现和消失的时候是否显示动画过程
   */
  @Input() buildingAnimation: boolean;
  /**
   * 调整天空颜色
   */
  @Input() skyColor: string;
  /**
   * 设置地图的预加载模式
   */
  @Input() preloadMode: boolean;
  /**
   * 为 Map 实例指定掩模的路径，各图层将只显示路径范围内图像
   */
  @Input() mask: [number, number][] | [number, number][][] | [number, number][][][];
  @Input() maxPitch: number;
  @Input() rotation: number;
  @Input() forceVector: boolean;
  @Input() gridMapForeign: boolean;

  /**
   * 额外: 设置城市
   */
  @Input() city: string;
  /**
   * 额外: 设置地图名
   */
  @Input() name: string;
  /**
   * 额外：加载插件
   */
  @Input() plugins: string[];

  // ---- Map Events ----
  @Output() naReady = new EventEmitter();
  @Output() naComplete: EventEmitter<any>;
  @Output() naClick: EventEmitter<any>;
  @Output() naDblClick: EventEmitter<any>;
  @Output() naRightClick: EventEmitter<any>;
  @Output() naMouseMove: EventEmitter<any>;
  @Output() naMouseOver: EventEmitter<any>;
  @Output() naMouseWheel: EventEmitter<any>;
  @Output() naMouseUp: EventEmitter<any>;
  @Output() naMouseOut: EventEmitter<any>;
  @Output() naMouseDown: EventEmitter<any>;
  @Output() naTouchStart: EventEmitter<any>;
  @Output() naTouchMove: EventEmitter<any>;
  @Output() naTouchEnd: EventEmitter<any>;
  @Output() naHotspotClick: EventEmitter<any>;
  @Output() naHotspotOver: EventEmitter<any>;
  @Output() naHotspotOut: EventEmitter<any>;
  @Output() naDragStart: EventEmitter<any>;
  @Output() naDragging: EventEmitter<any>;
  @Output() naDragEnd: EventEmitter<any>;
  @Output() naResize: EventEmitter<any>;
  @Output() naZoomStart: EventEmitter<any>;
  @Output() naZoomEnd: EventEmitter<any>;
  @Output() naZoomChange: EventEmitter<any>;
  @Output() naMoveStart: EventEmitter<any>;
  @Output() naMoveEnd: EventEmitter<any>;
  @Output() naMove: EventEmitter<any>;
  @Output() naPluginsLoaded = new EventEmitter<AMap.Map>();

  private inited = false;

  constructor(
    private el: ElementRef,
    private amap: AMapService,
    private pluginLoader: PluginLoaderService,
    private logger: LoggerService,
    private binder: EventBinderService,
    private ngZone: NgZone,
  ) {
    const m = this.amap.get();
    this.naComplete = this.binder.bindEvent(m, 'complete');
    this.naClick = this.binder.bindEvent(m, 'click');
    this.naDblClick = this.binder.bindEvent(m, 'dblclick');
    this.naRightClick = this.binder.bindEvent(m, 'rightclick');
    this.naMouseMove = this.binder.bindEvent(m, 'mousemove');
    this.naMouseOver = this.binder.bindEvent(m, 'mouseover');
    this.naMouseWheel = this.binder.bindEvent(m, 'mousewheel');
    this.naMouseUp = this.binder.bindEvent(m, 'mouseup');
    this.naMouseOut = this.binder.bindEvent(m, 'mouseout');
    this.naMouseDown = this.binder.bindEvent(m, 'mousedown');
    this.naTouchStart = this.binder.bindEvent(m, 'touchstart');
    this.naTouchMove = this.binder.bindEvent(m, 'touchmove');
    this.naTouchEnd = this.binder.bindEvent(m, 'touchend');
    this.naHotspotClick = this.binder.bindEvent(m, 'hotspotclick');
    this.naHotspotOver = this.binder.bindEvent(m, 'hotspotover');
    this.naHotspotOut = this.binder.bindEvent(m, 'hotspotout');
    this.naDragStart = this.binder.bindEvent(m, 'dragstart');
    this.naDragging = this.binder.bindEvent(m, 'dragging');
    this.naDragEnd = this.binder.bindEvent(m, 'dragend');
    this.naResize = this.binder.bindEvent(m, 'resize');
    this.naZoomStart = this.binder.bindEvent(m, 'zoomstart');
    this.naZoomEnd = this.binder.bindEvent(m, 'zoomend');
    this.naZoomChange = this.binder.bindEvent(m, 'zoomchange');
    this.naMoveStart = this.binder.bindEvent(m, 'movestart');
    this.naMoveEnd = this.binder.bindEvent(m, 'moveend');
    this.naMove = this.binder.bindEvent(m, 'mapmove');
  }

  ngOnInit() {
    this.logger.d(TAG, 'initializing ...');
    const container = this.el.nativeElement.querySelector('div.ngx-amap-container-inner');
    const options = getOptions<AMap.Map.Options>(this, ALL_OPTIONS);
    this.logger.d(TAG, 'options:', options);
    this.amap.create(container, options).subscribe(amap => {
      this.logger.d(TAG, 'map is ready.');
      this.ngZone.run(() => this.naReady.emit(amap));
    });
    this.inited = true;
  }

  ngOnDestroy() {
    this.amap.destroy();
  }

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);
    const amap = this.get();

    if (this.inited) {
      zip(filter.has<number>('zoom'), amap).subscribe(([v, m]) => {
        this.logger.d(TAG, 'setZoom:', v);
        m.setZoom(v);
      });
      zip(filter.has<AMap.LocationValue>('center'), amap).subscribe(([v, m]) => {
        this.logger.d(TAG, 'setCenter:', v);
        m.setCenter(v);
      });
    }

    // Not included in OPTIONS
    zip(filter.has<string>('city'), amap).subscribe(([v, m]) => {
      m.setCity(v, () => {
        this.logger.d(TAG, 'setCity:', v);
      });
    });
    zip(filter.notEmpty<string[]>('plugins'), amap).subscribe(([v, m]) => {
      this.pluginLoader.load(v).subscribe(() => {
        this.logger.d(TAG, 'plugins loaded.');
        this.ngZone.run(() => this.naPluginsLoaded.emit(m));
      });
    });
  }

  /**
   * 获取已创建的 AMap.Map 对象
   */
  get() {
    return this.amap.get();
  }
}
