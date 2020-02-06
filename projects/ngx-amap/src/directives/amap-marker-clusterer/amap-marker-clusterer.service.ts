/// <reference types="../../types/marker-cluster" />

import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { AMapService } from '../../shared/amap.service';
import { PluginLoaderService } from '../../shared/plugin-loader.service';
import { LoggerService } from '../../shared/logger';
import { Getter } from '../../base/interfaces';

const TAG = 'AmapMarkerCluster';

@Injectable()
export class AmapMarkerClustererService implements Getter<AMap.MarkerClusterer> {
  private markerClusterer: AMap.MarkerClusterer;
  private markerClusterer$ = new ReplaySubject<AMap.MarkerClusterer>(1);

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
  create(options: AMap.MarkerClusterer.Options) {
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
