import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { AMapService } from '../../shared/amap.service';
import { PluginLoaderService } from '../../shared/plugin-loader.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { Getter } from '../../base/interfaces';

const TAG = 'AmapToolBar';

@Injectable()
export class AmapToolBarService implements Getter<AMap.ToolBar> {
  private toolBar: AMap.ToolBar;
  private toolBar$ = new ReplaySubject<AMap.ToolBar>(1);

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
  create(options: AMap.ToolBar.Options) {
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
