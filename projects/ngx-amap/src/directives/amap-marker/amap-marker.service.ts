import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AMapService } from '../../shared/amap.service';
import { LoggerService } from '../../shared/logger';
import { Getter } from '../../base/interfaces';

const TAG = 'AmapMarker';

@Injectable()
export class AmapMarkerService implements Getter<AMap.Marker> {
  private marker: AMap.Marker;
  private marker$ = new ReplaySubject<AMap.Marker>(1);

  constructor(private amaps: AMapService, private logger: LoggerService, private ngZone: NgZone) {}

  /**
   * 获取点标记
   */
  get() {
    return this.marker$.asObservable();
  }

  /**
   * 创建点标记 AMap.Marker
   * @param options 选项
   * @param addToMap 是否直接加进地图
   */
  create(options: AMap.Marker.Options, addToMap = true) {
    return this.amaps.get().pipe(
      map(m => {
        if (addToMap) {
          options.map = m;
        }
        this.marker = this.ngZone.runOutsideAngular(() => new AMap.Marker(options));
        this.logger.d(TAG, 'new marker created.');
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
      this.logger.d(TAG, 'marker destroyed.');
      this.marker = null;
    });
  }
}
