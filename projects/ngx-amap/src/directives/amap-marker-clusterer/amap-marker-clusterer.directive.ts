import { Directive, OnInit, Input, AfterContentInit, ContentChildren, QueryList,
  OnDestroy, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { MarkerClustererOptions, IClusterStyle, RenderObject } from '../../types/interface';
import { MarkerClusterer, Marker, ClusterStyle, Map } from '../../types/class';
import { Utils } from '../../utils/utils';
import { ChangeFilter } from '../../utils/change-filter';
import { AmapMarkerDirective } from '../../directives/amap-marker/amap-marker.directive';
import { MarkerClustererService } from '../../services/marker-clusterer/marker-clusterer.service';

const ALL_OPTIONS = [
  'gridSize',
  'minClusterSize',
  'maxZoom',
  'averageCenter',
  'styles',
  'renderCluserMarker',
  'zoomOnClick'
];

/**
 * 用于地图上加载大量点标记，提高地图的绘制和显示性能。
 *
 * @example
 * <ngx-amap class="demo-map-lg" [resizeEnable]="true">
 *   <amap-marker-clusterer [gridSize]="80">
 *     <amap-marker *ngFor="let marker of markers" [position]="marker"></amap-marker>
 *   </amap-marker-clusterer>
 * </ngx-amap>
 */
@Directive({
  selector: 'amap-marker-clusterer',
  exportAs: 'marker-clusterer'
})
export class AmapMarkerClustererDirective implements OnInit, OnChanges, OnDestroy, AfterContentInit {
  TAG = 'amap-marker-clusterer';

  /** 聚合计算时网格的像素大小，默认60 */
  @Input() gridSize: number;
  /** 聚合的最小数量。默认值为2，即小于2个点则不能成为一个聚合 */
  @Input() minClusterSize: number;
  /** 最大的聚合级别，大于该级别就不进行相应的聚合。默认值为18 */
  @Input() maxZoom: number;
  /** 聚合点的图标位置是否是所有聚合内点的中心点。默认为否 */
  @Input() averageCenter: boolean;
  /** 指定聚合后的点标记的图标样式 */
  @Input() styles: IClusterStyle[];
  /** 该方法用来实现聚合点的自定义绘制，由开发者自己实现 */
  @Input() renderCluserMarker: (object: RenderObject) => void;
  /** 点击聚合点时，是否散开，默认值为：true */
  @Input() zoomOnClick: boolean;

  /** 点聚合渲染完成后触发 */
  @Output() ready = new EventEmitter();
  /** 点击事件 */
  @Output() clusterClick = new EventEmitter();

  // amap-marker directives:
  @ContentChildren(AmapMarkerDirective) markerList = new QueryList<AmapMarkerDirective>();

  private _cluster: Promise<MarkerClusterer>;
  private _markers: Promise<Marker[]>;
  private _subscriptions: Subscription;

  constructor(
    private clusters: MarkerClustererService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (!this._cluster) {
      return;
    }

    const filter = ChangeFilter.of(changes);
    filter.notEmpty<number>('gridSize').subscribe(v => this.setGridSize(v));
    filter.notEmpty<number>('minClusterSize').subscribe(v => this.setMinClusterSize(v));
    filter.has<number>('maxZoom').subscribe(v => this.setMaxZoom(v));
    filter.has<boolean>('averageCenter').subscribe(v => this.setAverageCenter(v));
    filter.has<IClusterStyle[]>('styles').subscribe(v => this.setStyles(v));
  }

  ngOnInit() {
    const options = Utils.getOptionsFor<MarkerClustererOptions>(this, ALL_OPTIONS);
    this._cluster = this.clusters.create(options);
    this.bindEvents();
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this.clusters.destroy(this._cluster);
  }

  ngAfterContentInit() {
    this.updateMarkers()
      .then(() => this._cluster)
      .then(c => this.ready.emit(c));
    this.markerList.changes.subscribe(() => this.updateMarkers());
  }

  private updateMarkers() {
    const markerPromiseList = this.markerList.map(d => d.marker);
    this._markers = Promise.all(markerPromiseList);
    return this._markers.then(list => this.setMarkers(list));
  }

  private bindEvents() {
    this._subscriptions = this.clusters.bindEvent(this._cluster, 'click').subscribe(e => this.clusterClick.emit(e));
  }

  /**
   * 添加一个需进行聚合的点标记
   * @param marker
   * @returns
   */
  addMarker(marker: Marker): Promise<void> {
    return this._cluster.then(cluster => cluster.addMarker(marker));
  }

  /**
   * 删除一个聚合的点标记
   * @param marker
   * @returns
   */
  removeMarker(marker: Marker): Promise<void> {
    return this._cluster.then(cluster => cluster.removeMarker(marker));
  }

  /**
   * 获取聚合点的总数量
   * @returns
   */
  getClustersCount(): Promise<number> {
    return this._cluster.then(cluster => cluster.getClustersCount());
  }

  /**
   * 获取聚合网格的像素大小
   * @returns
   */
  getGridSize(): Promise<number> {
    return this._cluster.then(cluster => cluster.getGridSize());
  }

  /**
   * 获取地图中点标记的最大聚合级别
   * @returns
   */
  getMaxZoom(): Promise<number> {
    return this._cluster.then(cluster => cluster.getMaxZoom());
  }

  /**
   * 获取单个聚合的最小数量
   * @returns
   */
  getMinClusterSize(): Promise<number> {
    return this._cluster.then(cluster => cluster.getMinClusterSize());
  }

  /**
   * 获取聚合的样式风格集合
   * @returns
   */
  getStyles(): Promise<ClusterStyle[]> {
    return this._cluster.then(cluster => cluster.getStyles());
  }

  /**
   * 设置聚合网格的像素大小
   * @param size
   * @returns
   */
  setGridSize(size: number): Promise<void> {
    return this._cluster.then(cluster => cluster.setGridSize(size));
  }

  /**
   * 设置地图中点标记的最大聚合级别
   * @param zoom
   * @returns
   */
  setMaxZoom(zoom: number): Promise<void> {
    return this._cluster.then(cluster => cluster.setMaxZoom(zoom));
  }

  /**
   * 设置单个聚合的最小数量
   * @param size
   * @returns
   */
  setMinClusterSize(size: number): Promise<void> {
    return this._cluster.then(cluster => cluster.setMinClusterSize(size));
  }

  /**
   * 设置聚合的样式风格
   * @param styles
   * @returns
   */
  setStyles(styles: IClusterStyle[]): Promise<void> {
    return this._cluster.then(cluster => {
      const s = styles.map(style => this.clusters.createStyle(style));
      return cluster.setStyles(s);
    });
  }

  /**
   * 从地图上彻底清除所有聚合点标记
   * @returns
   */
  clearMarkers(): Promise<void> {
    return this._cluster.then(cluster => cluster.clearMarkers());
  }

  /**
   * 设置将进行点聚合的地图对象
   * @param map
   * @returns
   */
  setMap(map: Map): Promise<void> {
    return this._cluster.then(cluster => cluster.setMap(map));
  }

  /**
   * 设置将进行点聚合显示的点标记集合
   * @param markers
   * @returns
   */
  setMarkers(markers: Marker[]): Promise<void> {
    return this._cluster.then(cluster => cluster.setMarkers(markers));
  }

  /**
   * 获取该点聚合的地图对象
   * @returns
   */
  getMap(): Promise<Map> {
    return this._cluster.then(cluster => cluster.getMap());
  }

  /**
   * 获取该点聚合中的点标记集合
   * @returns
   */
  getMarkers(): Promise<Marker[]> {
    return this._cluster.then(cluster => cluster.getMarkers());
  }

  /**
   * 添加一组需进行聚合的点标记
   * @param markers
   * @returns
   */
  addMarkers(markers: Marker[]): Promise<void> {
    return this._cluster.then(cluster => cluster.addMarkers(markers));
  }

  /**
   * 删除一组聚合的点标记
   * @param markers
   * @returns
   */
  removeMarkers(markers: Marker[]): Promise<void> {
    return this._cluster.then(cluster => cluster.removeMarkers(markers));
  }

  /**
   * 获取单个聚合点位置是否是聚合内所有标记的平均中心
   * @returns
   */
  isAverageCenter(): Promise<boolean> {
    return this._cluster.then(cluster => cluster.isAverageCenter());
  }

  /**
   * 设置单个聚合点位置是否是聚合内所有标记的平均中心
   * @param averageCenter
   * @returns
   */
  setAverageCenter(averageCenter: boolean): Promise<void> {
    return this._cluster.then(cluster => cluster.setAverageCenter(averageCenter));
  }
}
