import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { AMapService } from '../../shared/amap.service';
import { PluginLoaderService } from '../../shared/plugin-loader.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { Getter } from '../../base/interfaces';
declare const AMap: any;

export namespace AMapMarkerClusterer {
  export interface StyleObject {
    url?: string;
    size?: AMap.Size;
    offset?: AMap.Pixel;
    imageOffset?: AMap.Pixel;
    textColor?: string;
    textSize?: number;
  }

  export interface Options {
    /**
     * 聚合计算时网格的像素大小，默认60
     */
    gridSize?: number;
    /**
     * 聚合的最小数量。默认值为2，即小于2个点则不能成为一个聚合
     */
    minClusterSize?: number;
    /**
     * 最大的聚合级别，大于该级别就不进行相应的聚合。默认值为18
     */
    maxZoom?: number;
    /**
     * 聚合点的图标位置是否是所有聚合内点的中心点。默认为否
     */
    averageCenter?: boolean;
    /**
     * 指定聚合后的点标记的图标样式，可缺省，缺省时为默认样式
     */
    styles?: StyleObject[];
    /**
     * 该方法用来实现聚合点的自定义绘制
     */
    renderClusterMarker?: (obj: {
      count: number;
      markers: AMap.Marker<any>[];
      marker: AMap.Marker<any>;
    }) => void;
    /**
     * 点击聚合点时，是否散开，默认值为：true
     */
    zoomOnClick?: boolean;
  }
}

const TAG = 'AmapMarkerCluster';

@Injectable()
export class AmapMarkerClustererService implements Getter<any> {
  private markerClusterer: any;
  private markerClusterer$ = new ReplaySubject<any>(1);

  constructor(
    private amaps: AMapService,
    private plugins: PluginLoaderService,
    private logger: LoggerService,
    private ngZone: NgZone,
  ) {}

  /**
   * 获取点聚合
   */
  get() {
    return this.markerClusterer$.asObservable();
  }

  /**
   * 创建点聚合 AMap.MarkerClusterer
   * @param options 选项
   */
  create(options: AMapMarkerClusterer.Options) {
    return zip(this.amaps.get(), this.plugins.load('AMap.MarkerClusterer')).pipe(
      map(([m]) => {
        this.markerClusterer = this.ngZone.runOutsideAngular(
          () => new AMap.MarkerClusterer(m, [], options),
        );
        this.logger.d(TAG, 'new markerClusterer created.');
        this.markerClusterer$.next(this.markerClusterer);
        this.markerClusterer$.complete();
        return this.markerClusterer;
      }),
    );
  }

  /**
   * 销毁点聚合
   */
  destroy() {
    this.get().subscribe(m => {
      m.clearMarkers();
      m.setMap(null);
      this.logger.d(TAG, 'markerClusterer destroyed.');
      this.markerClusterer = null;
    });
  }
}
