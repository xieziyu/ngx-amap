import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject, zip } from 'rxjs';
import { map, switchMapTo } from 'rxjs/operators';
import { AMapService } from '../../shared/amap.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { PluginLoaderService } from '../../shared/plugin-loader.service';
import { WithEditor } from '../../base/interfaces';
declare const AMap: any;

const TAG = 'AmapPolygon';

@Injectable()
export class AmapPolygonService implements WithEditor<AMap.Polygon, any> {
  private polygon: any;
  private polygon$ = new ReplaySubject<any>(1);
  private editor: any;
  private editor$ = new ReplaySubject<any>(1);

  constructor(
    private amaps: AMapService,
    private logger: LoggerService,
    private ngZone: NgZone,
    private plugins: PluginLoaderService,
  ) {}

  /**
   * 获取折线
   */
  get() {
    return this.polygon$.asObservable();
  }

  /**
   * 创建折线 AMap.Polygon
   * @param options 选项
   */
  create(options: AMap.Polygon.Options) {
    return this.amaps.get().pipe(
      map(m => {
        options.map = m;
        this.polygon = this.ngZone.runOutsideAngular(() => new AMap.Polygon(options));
        this.logger.d(TAG, 'new Polygon created.');
        this.polygon$.next(this.polygon);
        this.polygon$.complete();
        return this.polygon;
      }),
    );
  }

  /**
   * 销毁折线
   */
  destroy() {
    this.get().subscribe(m => {
      m.setMap(null);
      this.logger.d(TAG, 'Polygon destroyed.');
      this.polygon = null;
    });
  }

  getEditor() {
    // plugin is loading:
    return this.editor$.asObservable();
  }

  /**
   * 加载编辑插件
   */
  loadEditor() {
    return this.plugins.load('AMap.PolyEditor');
  }

  /**
   * 创建编辑器
   */
  createEditor() {
    return this.loadEditor().pipe(
      switchMapTo(zip(this.amaps.get(), this.get())),
      map(([m, p]) => {
        this.editor = this.ngZone.runOutsideAngular(() => new AMap.PolyEditor(m, p));
        this.logger.d(TAG, 'new PolyEditor created.');
        this.editor$.next(this.editor);
        this.editor$.complete();
        return this.editor;
      }),
    );
  }

  /**
   * 开关编辑器
   * @param v 开关选项
   */
  toggleEditor(v: boolean) {
    if (v && !this.editor) {
      this.createEditor().subscribe(editor => editor.open());
      return;
    }

    if (this.editor) {
      if (v) {
        this.editor.open();
      } else {
        this.editor.close();
      }
    }
  }
}
