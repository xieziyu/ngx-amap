import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject, zip, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AMapService } from '../../shared/amap.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { Getter } from '../../base/interfaces';

const TAG = 'AmapInfoWindow';

@Injectable()
export class AmapInfoWindowService implements Getter<AMap.InfoWindow> {
  private map: AMap.Map;
  private infoWindow: AMap.InfoWindow;
  private infoWindow$ = new ReplaySubject<AMap.InfoWindow>(1);

  constructor(private amaps: AMapService, private logger: LoggerService, private ngZone: NgZone) {}

  /**
   * 获取信息窗体
   */
  get() {
    return this.infoWindow$.asObservable();
  }

  /**
   * 创建 AMap.InfoWindow
   * @param options 选项
   */
  create(options: AMap.InfoWindow.Options) {
    return this.amaps.get().pipe(
      map(m => {
        this.map = m;
        this.infoWindow = this.ngZone.runOutsideAngular(() => new AMap.InfoWindow(options));
        this.logger.d(TAG, 'new InfoWindow created.');
        this.infoWindow$.next(this.infoWindow);
        this.infoWindow$.complete();
        return this.infoWindow;
      }),
    );
  }

  /**
   * 销毁
   */
  destroy() {
    this.get().subscribe(w => {
      w.close();
      this.logger.d(TAG, 'InfoWindow destroyed.');
      this.infoWindow = null;
      this.map = null;
    });
  }

  /**
   * 打开
   */
  open(position?: AMap.LocationValue) {
    this.get().subscribe(w => w.open(this.map, position));
  }

  /**
   * 在覆盖物上打开窗体
   */
  openOnMark(marker: Observable<AMap.Marker | AMap.Text>) {
    zip(marker, this.get()).subscribe(([m, w]) => {
      w.open(this.map, m.getPosition());
    });
  }

  /**
   * 关闭
   */
  close() {
    this.get().subscribe(w => w.close());
  }
}
