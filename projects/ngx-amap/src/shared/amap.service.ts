import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AMapLoaderService } from './amap-loader.service';
import { LoggerService } from './logger';
import { Getter } from '../base/interfaces';

const TAG = 'AMap';

@Injectable()
export class AMapService implements Getter<AMap.Map> {
  private map: AMap.Map;
  private map$ = new ReplaySubject<AMap.Map>();

  constructor(
    private loader: AMapLoaderService,
    private logger: LoggerService,
    private ngZone: NgZone,
  ) {}

  /**
   * 获取地图对象 AMap.Map
   */
  get() {
    return this.map$.asObservable();
  }

  /**
   * 创建地图对象 AMap.Map
   * @param container 地图容器的DOM元素
   * @param options 选项
   */
  create(container: HTMLElement, options: AMap.Map.Options) {
    return this.loader.load().pipe(
      map(() => {
        this.map = this.ngZone.runOutsideAngular(() => new AMap.Map(container, options));
        this.logger.d(TAG, 'new map created.');
        this.map$.next(this.map);
        this.map$.complete();
        return this.map;
      }),
    );
  }

  /**
   * 销毁地图对象
   */
  destroy() {
    this.get().subscribe(m => {
      m.destroy();
      this.logger.d(TAG, 'map destroyed.');
      this.map = null;
    });
  }
}
