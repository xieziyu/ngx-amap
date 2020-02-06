/// <reference types="../../types/marker-cluster" />

import {
  Directive,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  ContentChildren,
  QueryList,
  AfterContentInit,
  NgZone,
} from '@angular/core';
import { zip, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { AmapMarkerClustererService } from './amap-marker-clusterer.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { EventBinderService } from '../../shared/event-binder.service';
import { getOptions, ChangeFilter } from '../../utils';
import { PixelService } from '../../shared/pixel.service';
import { SizeService } from '../../shared/size.service';
import { AmapMarkerDirective } from '../amap-marker/amap-marker.directive';
import { AMapService } from '../../shared/amap.service';

const TAG = 'amap-marker-clusterer';
const MarkerClusterOptions = [
  'gridSize',
  'minClusterSize',
  'maxZoom',
  'averageCenter',
  'styles',
  'renderClusterMarker',
  'zoomOnClick',
];

@Directive({
  selector: 'amap-marker-clusterer',
  exportAs: 'marker-clusterer',
  providers: [AmapMarkerClustererService],
})
export class AmapMarkerClustererDirective
  implements OnInit, OnChanges, OnDestroy, AfterContentInit {
  // ---- Options ----
  /**
   * 聚合计算时网格的像素大小，默认60
   */
  @Input() gridSize: number;
  /**
   * 聚合的最小数量。默认值为2，即小于2个点则不能成为一个聚合
   */
  @Input() minClusterSize: number;
  /**
   * 最大的聚合级别，大于该级别就不进行相应的聚合。默认值为18
   */
  @Input() maxZoom: number;
  /**
   * 聚合点的图标位置是否是所有聚合内点的中心点。默认为否
   */
  @Input() averageCenter: boolean;
  /**
   * 指定聚合后的点标记的图标样式，可缺省，缺省时为默认样式
   */
  @Input() styles: AMap.MarkerClusterer.StyleObject[];
  /**
   * 该方法用来实现聚合点的自定义绘制
   */
  @Input() renderClusterMarker: (obj: {
    count: number;
    markers: AMap.Marker<any>[];
    marker: AMap.Marker<any>;
  }) => void;
  /**
   * 点击聚合点时，是否散开，默认值为：true
   */
  @Input() zoomOnClick: boolean;

  // ---- Events ----
  @Output() naReady = new EventEmitter();
  @Output() naClick: EventEmitter<any>;

  // amap-marker directives:
  @ContentChildren(AmapMarkerDirective) markerList = new QueryList<AmapMarkerDirective>();

  private inited = false;

  constructor(
    protected os: AmapMarkerClustererService,
    protected binder: EventBinderService,
    private amaps: AMapService,
    private pixels: PixelService,
    private sizes: SizeService,
    private logger: LoggerService,
    private ngZone: NgZone,
  ) {
    const target = this.os.get();
    this.naClick = this.binder.bindEvent(target, 'click');
  }

  ngOnDestroy() {
    this.os.destroy();
  }

  ngOnInit() {
    this.amaps.get().subscribe(() => {
      this.logger.d(TAG, 'initializing ...');
      const options = getOptions<AMap.MarkerClusterer.Options>(this, MarkerClusterOptions);
      if (options.styles) {
        options.styles = options.styles.map(style => {
          if (style.size) {
            style.size = this.sizes.create(style.size) as AMap.Size;
          }
          if (style.offset) {
            style.offset = this.pixels.create(style.offset);
          }
          if (style.imageOffset) {
            style.imageOffset = this.pixels.create(style.imageOffset);
          }
          return style;
        });
      }
      this.logger.d(TAG, 'options:', options);
      this.os.create(options).subscribe();
      this.inited = true;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.inited) {
      return;
    }
    const filter = ChangeFilter.of(changes);
    const cluster = this.get();
    zip(filter.notEmpty<number>('gridSize'), cluster).subscribe(([v, c]) => c.setGridSize(v));
    zip(filter.notEmpty<number>('minClusterSize'), cluster).subscribe(([v, c]) =>
      c.setMinClusterSize(v),
    );
    zip(filter.has<number>('maxZoom'), cluster).subscribe(([v, c]) => c.setMaxZoom(v));
    zip(filter.has<boolean>('averageCenter'), cluster).subscribe(([v, c]) => c.setAverageCenter(v));
    zip(filter.has<AMap.MarkerClusterer.StyleObject[]>('styles'), cluster).subscribe(([v, c]) =>
      c.setStyles(v),
    );
  }

  ngAfterContentInit() {
    this.updateMarkers().subscribe(c => {
      this.ngZone.run(() => this.naReady.emit(c));
      this.logger.d(TAG, 'markerClusterer is ready.');
    });
    this.markerList.changes.subscribe(() => this.updateMarkers().subscribe());
  }

  private updateMarkers() {
    return zip(combineLatest(this.markerList.map(d => d.get())), this.get()).pipe(
      map(([markers, cluster]) => {
        cluster.setMarkers(markers);
        return cluster;
      }),
    );
  }

  /**
   * 获取已创建的 AMap.MarkerClusterer 对象
   */
  get() {
    return this.os.get();
  }
}
