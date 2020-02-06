/// <reference types="../../types/editor" />

import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AMapService } from '../../shared/amap.service';
import { LoggerService } from '../../shared/logger';
import { Getter } from '../../base/interfaces';

const TAG = 'AmapCircleMarker';

@Injectable()
export class AmapCircleMarkerService implements Getter<AMap.CircleMarker> {
  private circle: AMap.CircleMarker;
  private circle$ = new ReplaySubject<AMap.CircleMarker>(1);

  constructor(private amaps: AMapService, private logger: LoggerService, private ngZone: NgZone) {}

  /**
   * 获取圆点标记
   */
  get() {
    return this.circle$.asObservable();
  }

  /**
   * 创建圆点标记 AMap.CircleMarker
   * @param options 选项
   */
  create(options: AMap.Circle.Options) {
    return this.amaps.get().pipe(
      map(m => {
        options.map = m;
        this.circle = this.ngZone.runOutsideAngular(() => new AMap.CircleMarker(options));
        this.logger.d(TAG, 'new CircleMarker created.');
        this.circle$.next(this.circle);
        this.circle$.complete();
        return this.circle;
      }),
    );
  }

  /**
   * 销毁圆点标记
   */
  destroy() {
    this.get().subscribe(m => {
      m.setMap(null);
      this.logger.d(TAG, 'CircleMarker destroyed.');
      this.circle = null;
    });
  }
}
