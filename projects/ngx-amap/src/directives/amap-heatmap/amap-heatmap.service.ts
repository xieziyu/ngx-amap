import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { AMapService } from '../../shared/amap.service';
import { PluginLoaderService } from '../../shared/plugin-loader.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { Getter } from '../../base/interfaces';
declare const AMap: any;

const TAG = 'AmapHeatmap';

export namespace AMapHeatmap {
  export interface Options {
    /**
     * 热力图中单个点的半径，默认：30，单位：pixel
     */
    radius?: number;
    /**
     * 热力图的渐变区间
     */
    gradient?: { [key: string]: string };
    /**
     * 热力图透明度数组，取值范围[0,1]，0表示完全透明，1表示不透明
     * 默认：[0,1]
     */
    opacity?: [number, number];
    /**
     * 支持的缩放级别范围，取值范围[3-18]
     * 默认：[3,18]
     */
    zooms?: [number, number];

    rejectMapMask?: boolean;
    visible?: boolean;
    radiusUnit?: string;
    blur?: number;
    zIndex?: number;
    renderOnZooming?: boolean;
    ['3d']?: {
      heightScale?: number;
      heightBezier?: number[];
      gridSize?: number;
      drawGridLine?: boolean;
    };
  }
  export interface Data {
    /**
     * 经度
     */
    lng: number;
    /**
     * 维度
     */
    lat: number;
    /**
     * 权重
     */
    count: number;
  }
  export interface DataSet {
    /**
     * 权重的最大值
     */
    max?: number;
    /**
     * 坐标数据集
     */
    data: Data[];
  }
}

@Injectable()
export class AmapHeatmapService implements Getter<any> {
  private heatmap: any;
  private heatmap$ = new ReplaySubject<any>(1);

  constructor(
    private amaps: AMapService,
    private plugin: PluginLoaderService,
    private logger: LoggerService,
    private ngZone: NgZone,
  ) {}

  /**
   * 获取热力图
   */
  get() {
    return this.heatmap$.asObservable();
  }

  /**
   * 创建热力图 AMap.Heatmap
   * @param options 选项
   */
  create(options: AMapHeatmap.Options) {
    return zip(this.amaps.get(), this.plugin.load('AMap.Heatmap')).pipe(
      map(([m]) => {
        this.heatmap = this.ngZone.runOutsideAngular(() => new AMap.Heatmap(m, options));
        this.logger.d(TAG, 'new Heatmap created.');
        this.heatmap$.next(this.heatmap);
        this.heatmap$.complete();
        return this.heatmap;
      }),
    );
  }

  /**
   * 销毁热力图
   */
  destroy() {
    this.get().subscribe(heatmap => {
      heatmap.setMap(null);
      this.logger.d(TAG, 'Heatmap destroyed.');
      this.heatmap = null;
    });
  }
}
