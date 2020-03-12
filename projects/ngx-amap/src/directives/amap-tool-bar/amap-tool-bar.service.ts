import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { AMapService } from '../../shared/amap.service';
import { PluginLoaderService } from '../../shared/plugin-loader.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { Getter } from '../../base/interfaces';
declare const AMap: any;

const TAG = 'AmapToolBar';

export namespace AMapToolBar {
  export interface Options {
    /**
     * 相对于地图容器左上角的偏移量
     */
    offset?: AMap.Pixel;
    /**
     * 控件停靠位置
     * LT:左上角;
     * RT:右上角;
     * LB:左下角;
     * RB:右下角;
     */
    position?: Position;
    /**
     * 标尺键盘是否可见
     */
    ruler?: boolean;
    /**
     * 定位失败后，是否开启IP定位
     */
    noIpLocate?: boolean;
    /**
     * 是否显示定位按钮
     */
    locate?: boolean;
    /**
     * 是否使用精简模式
     */
    liteStyle?: boolean;
    /**
     * 方向键盘是否可见
     */
    direction?: boolean;
    /**
     * 是否自动定位，即地图初始化加载完成后，是否自动定位的用户所在地，仅在支持HTML5的浏览器中有效
     */
    autoPosition?: boolean;
    /**
     * 自定义定位图标，值为Marker对象
     */
    locationMarker?: AMap.Marker;
    /**
     * 是否使用高德定位sdk用来辅助优化定位效果
     */
    useNative?: boolean;
    // internal
    timeout?: number;
  }
  export type Position = 'LT' | 'RT' | 'LB' | 'RB';
}

@Injectable()
export class AmapToolBarService implements Getter<any> {
  private toolBar: any;
  private toolBar$ = new ReplaySubject<any>(1);

  constructor(
    private amaps: AMapService,
    private plugin: PluginLoaderService,
    private logger: LoggerService,
    private ngZone: NgZone,
  ) {}

  /**
   * 获取工具条
   */
  get() {
    return this.toolBar$.asObservable();
  }

  /**
   * 创建工具条 AMap.ToolBar
   * @param options 选项
   */
  create(options: AMapToolBar.Options) {
    return zip(this.amaps.get(), this.plugin.load('AMap.ToolBar')).pipe(
      map(([m]) => {
        this.toolBar = this.ngZone.runOutsideAngular(() => new AMap.ToolBar(options));
        this.logger.d(TAG, 'new toolBar created.');
        m.addControl(this.toolBar);
        this.toolBar$.next(this.toolBar);
        this.toolBar$.complete();
        return this.toolBar;
      }),
    );
  }

  /**
   * 销毁工具条
   */
  destroy() {
    zip(this.amaps.get(), this.get()).subscribe(([m, toolBar]) => {
      m.removeControl(toolBar);
      this.logger.d(TAG, 'toolBar destroyed.');
      this.toolBar = null;
    });
  }
}
