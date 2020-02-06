/// <reference types="../../types/editor" />

import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject, zip } from 'rxjs';
import { map, switchMapTo } from 'rxjs/operators';
import { AMapService } from '../../shared/amap.service';
import { LoggerService } from '../../shared/logger';
import { PluginLoaderService } from '../../shared/plugin-loader.service';
import { Getter } from '../../base/interfaces';

const TAG = 'AmapPolyline';

@Injectable()
export class AmapPolylineService implements Getter<AMap.Polyline> {
  private polyline: AMap.Polyline;
  private polyline$ = new ReplaySubject<AMap.Polyline>(1);
  private editor: AMap.PolyEditor;
  private editor$ = new ReplaySubject<AMap.PolyEditor>(1);

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
    return this.polyline$.asObservable();
  }

  /**
   * 创建折线 AMap.Polyline
   * @param options 选项
   */
  create(options: AMap.Polyline.Options) {
    return this.amaps.get().pipe(
      map(m => {
        options.map = m;
        this.polyline = this.ngZone.runOutsideAngular(() => new AMap.Polyline(options));
        this.logger.d(TAG, 'new Polyline created.');
        this.polyline$.next(this.polyline);
        this.polyline$.complete();
        return this.polyline;
      }),
    );
  }

  /**
   * 销毁折线
   */
  destroy() {
    this.get().subscribe(m => {
      m.setMap(null);
      this.logger.d(TAG, 'Polyline destroyed.');
      this.polyline = null;
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
