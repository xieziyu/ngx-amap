import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { AMapService } from '../../shared/amap.service';
import { PluginLoaderService } from '../../shared/plugin-loader.service';
import { LoggerService } from '../../shared/logger';
import { Getter } from '../../base/interfaces';

const TAG = 'AmapHeatmap';

@Injectable()
export class AmapHeatmapService implements Getter<AMap.Heatmap> {
  private heatmap: AMap.Heatmap;
  private heatmap$ = new ReplaySubject<AMap.Heatmap>(1);

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
  create(options: AMap.Heatmap.Options) {
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
