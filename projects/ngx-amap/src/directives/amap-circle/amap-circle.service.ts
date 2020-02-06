/// <reference types="../../types/editor" />

import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject, zip } from 'rxjs';
import { map, switchMapTo } from 'rxjs/operators';
import { AMapService } from '../../shared/amap.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { PluginLoaderService } from '../../shared/plugin-loader.service';
import { Getter } from '../../base/interfaces';

const TAG = 'AmapCircle';

@Injectable()
export class AmapCircleService implements Getter<AMap.Circle> {
  private circle: AMap.Circle;
  private circle$ = new ReplaySubject<AMap.Circle>(1);
  private editor: AMap.CircleEditor;
  private editor$ = new ReplaySubject<AMap.CircleEditor>(1);

  constructor(
    private amaps: AMapService,
    private logger: LoggerService,
    private ngZone: NgZone,
    private plugins: PluginLoaderService,
  ) {}

  /**
   * 获取圆形
   */
  get() {
    return this.circle$.asObservable();
  }

  /**
   * 创建圆形 AMap.Circle
   * @param options 选项
   */
  create(options: AMap.Circle.Options) {
    return this.amaps.get().pipe(
      map(m => {
        options.map = m;
        this.circle = this.ngZone.runOutsideAngular(() => new AMap.Circle(options));
        this.logger.d(TAG, 'new Circle created.');
        this.circle$.next(this.circle);
        this.circle$.complete();
        return this.circle;
      }),
    );
  }

  /**
   * 销毁圆形
   */
  destroy() {
    this.get().subscribe(m => {
      m.setMap(null);
      this.logger.d(TAG, 'Circle destroyed.');
      this.circle = null;
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
    return this.plugins.load('AMap.CircleEditor');
  }

  /**
   * 创建编辑器
   */
  createEditor() {
    return this.loadEditor().pipe(
      switchMapTo(zip(this.amaps.get(), this.get())),
      map(([m, p]) => {
        this.editor = this.ngZone.runOutsideAngular(() => new AMap.CircleEditor(m, p));
        this.logger.d(TAG, 'new CircleEditor created.');
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
