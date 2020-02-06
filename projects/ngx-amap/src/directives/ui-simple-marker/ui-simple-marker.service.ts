/// <reference types="../../types/simple-marker" />

import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject, zip, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AMapService } from '../../shared/amap.service';
import { AmapUILoaderService } from '../../shared/amap-ui-loader.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { Getter } from '../../base/interfaces';

const TAG = 'UISimpleMarker';

@Injectable()
export class UISimpleMarkerService implements Getter<AMapUI.SimpleMarker> {
  private marker: AMapUI.SimpleMarker;
  private marker$ = new ReplaySubject<AMapUI.SimpleMarker>(1);
  private ui = this.uiLoader.load('overlay/SimpleMarker') as Observable<AMapUI.SimpleMarker>;

  constructor(
    private amaps: AMapService,
    private uiLoader: AmapUILoaderService,
    private logger: LoggerService,
    private ngZone: NgZone,
  ) {}

  /**
   * 获取点标记
   */
  get() {
    return this.marker$.asObservable();
  }

  /**
   * 创建点标记 AMap.SimpleMarker
   * @param options 选项
   * @param addToMap 是否直接加进地图
   */
  create(options: AMapUI.SimpleMarker.Options, addToMap = true) {
    return zip(this.ui, this.amaps.get()).pipe(
      map(([SimpleMarker, m]) => {
        if (addToMap) {
          options.map = m;
        }
        this.marker = this.ngZone.runOutsideAngular(() => new SimpleMarker(options));
        this.logger.d(TAG, 'new simple marker created.');
        this.marker$.next(this.marker);
        this.marker$.complete();
        return this.marker;
      }),
    );
  }

  /**
   * 销毁点标记
   */
  destroy() {
    this.get().subscribe(m => {
      m.setMap(null);
      this.logger.d(TAG, 'simple marker destroyed.');
      this.marker = null;
    });
  }
}
