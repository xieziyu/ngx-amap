/// <reference types="../../types/editor" />

import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject, zip } from 'rxjs';
import { map, switchMapTo } from 'rxjs/operators';
import { AMapService } from '../../shared/amap.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { PluginLoaderService } from '../../shared/plugin-loader.service';
import { WithEditor } from '../../base/interfaces';

const TAG = 'AmapEllipse';

@Injectable()
export class AmapEllipseService implements WithEditor<AMap.Ellipse, AMap.EllipseEditor> {
  private ellipse: AMap.Ellipse;
  private ellipse$ = new ReplaySubject<AMap.Ellipse>(1);
  private editor: AMap.EllipseEditor;
  private editor$ = new ReplaySubject<AMap.EllipseEditor>(1);

  constructor(
    private amaps: AMapService,
    private logger: LoggerService,
    private ngZone: NgZone,
    private plugins: PluginLoaderService,
  ) {}

  /**
   * 获取椭圆
   */
  get() {
    return this.ellipse$.asObservable();
  }

  /**
   * 创建椭圆 AMap.Ellipse
   * @param options 选项
   */
  create(options: AMap.Ellipse.Options) {
    return this.amaps.get().pipe(
      map(m => {
        options.map = m;
        this.ellipse = this.ngZone.runOutsideAngular(() => new AMap.Ellipse(options));
        this.logger.d(TAG, 'new Ellipse created.');
        this.ellipse$.next(this.ellipse);
        this.ellipse$.complete();
        return this.ellipse;
      }),
    );
  }

  /**
   * 销毁椭圆
   */
  destroy() {
    this.get().subscribe(m => {
      m.setMap(null);
      this.logger.d(TAG, 'Ellipse destroyed.');
      this.ellipse = null;
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
    return this.plugins.load('AMap.EllipseEditor');
  }

  /**
   * 创建编辑器
   */
  createEditor() {
    return this.loadEditor().pipe(
      switchMapTo(zip(this.amaps.get(), this.get())),
      map(([m, p]) => {
        this.editor = this.ngZone.runOutsideAngular(() => new AMap.EllipseEditor(m, p));
        this.logger.d(TAG, 'new EllipseEditor created.');
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
