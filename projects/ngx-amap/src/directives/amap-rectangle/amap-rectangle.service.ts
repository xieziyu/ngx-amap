/// <reference types="../../types/editor" />

import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject, zip } from 'rxjs';
import { map, switchMapTo } from 'rxjs/operators';
import { AMapService } from '../../shared/amap.service';
import { LoggerService } from '../../shared/logger';
import { PluginLoaderService } from '../../shared/plugin-loader.service';
import { Getter } from '../../base/interfaces';

const TAG = 'AmapRectangle';

@Injectable()
export class AmapRectangleService implements Getter<AMap.Rectangle> {
  private rectangle: AMap.Rectangle;
  private rectangle$ = new ReplaySubject<AMap.Rectangle>(1);
  private editor: AMap.RectangleEditor;
  private editor$ = new ReplaySubject<AMap.RectangleEditor>(1);

  constructor(
    private amaps: AMapService,
    private logger: LoggerService,
    private ngZone: NgZone,
    private plugins: PluginLoaderService,
  ) {}

  /**
   * 获取矩形
   */
  get() {
    return this.rectangle$.asObservable();
  }

  /**
   * 创建矩形 AMap.Rectangle
   * @param options 选项
   */
  create(options: AMap.Rectangle.Options) {
    return this.amaps.get().pipe(
      map(m => {
        options.map = m;
        this.rectangle = this.ngZone.runOutsideAngular(() => new AMap.Rectangle(options));
        this.logger.d(TAG, 'new Rectangle created.');
        this.rectangle$.next(this.rectangle);
        this.rectangle$.complete();
        return this.rectangle;
      }),
    );
  }

  /**
   * 销毁矩形
   */
  destroy() {
    this.get().subscribe(m => {
      m.setMap(null);
      this.logger.d(TAG, 'Rectangle destroyed.');
      this.rectangle = null;
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
    return this.plugins.load('AMap.RectangleEditor');
  }

  /**
   * 创建编辑器
   */
  createEditor() {
    return this.loadEditor().pipe(
      switchMapTo(zip(this.amaps.get(), this.get())),
      map(([m, p]) => {
        this.editor = this.ngZone.runOutsideAngular(() => new AMap.RectangleEditor(m, p));
        this.logger.d(TAG, 'new RectangleEditor created.');
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
