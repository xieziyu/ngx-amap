import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject, zip, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AMapService } from '../../shared/amap.service';
import { AmapUILoaderService } from '../../shared/amap-ui-loader.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { Getter } from '../../base/interfaces';

export namespace AMapUISimpleMarker {
  export interface Options<ExtraData = any> extends AMap.Marker.Options<ExtraData> {
    /**
     * 样式主题
     */
    iconTheme?: 'default' | 'fresh' | 'numv1' | 'numv2';
    /**
     * 背景图标样式
     */
    iconStyle?: string | object;
    /**
     * 图标前景文字
     */
    iconLabel?: string | object;
    /**
     * 是否显示定位点
     */
    showPositionPoint?: boolean | object;
    /**
     * 内建的Dom容器上附带的class，多个class name用空格分开
     */
    containerClassNames?: string;
  }
}

const TAG = 'UISimpleMarker';

@Injectable()
export class UISimpleMarkerService implements Getter<any> {
  private marker: any;
  private marker$ = new ReplaySubject<any>(1);
  private ui = this.uiLoader.load('overlay/SimpleMarker') as Observable<any>;

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
  create(options: AMapUISimpleMarker.Options, addToMap = true) {
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
