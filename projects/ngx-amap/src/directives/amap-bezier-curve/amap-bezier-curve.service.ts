/// <reference types="../../types/editor" />

import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject, zip } from 'rxjs';
import { map, switchMapTo } from 'rxjs/operators';
import { AMapService } from '../../shared/amap.service';
import { LoggerService } from '../../shared/logger';
import { PluginLoaderService } from '../../shared/plugin-loader.service';
import { Getter } from '../../base/interfaces';

const TAG = 'AmapBezierCurve';

@Injectable()
export class AmapBezierCurveService implements Getter<AMap.BezierCurve> {
  private bezierCurve: AMap.BezierCurve;
  private bezierCurve$ = new ReplaySubject<AMap.BezierCurve>(1);
  private editor: AMap.BezierCurveEditor;
  private editor$ = new ReplaySubject<AMap.BezierCurveEditor>(1);
  private polyEditor: AMap.PolyEditor;
  private polyEditor$ = new ReplaySubject<AMap.PolyEditor>(1);

  constructor(
    private amaps: AMapService,
    private logger: LoggerService,
    private ngZone: NgZone,
    private plugins: PluginLoaderService,
  ) {}

  /**
   * 获取贝瑟尔曲线
   */
  get() {
    return this.bezierCurve$.asObservable();
  }

  /**
   * 创建贝瑟尔曲线 AMap.BezierCurve
   * @param options 选项
   */
  create(options: AMap.BezierCurve.Options) {
    return this.amaps.get().pipe(
      map(m => {
        options.map = m;
        this.bezierCurve = this.ngZone.runOutsideAngular(() => new AMap.BezierCurve(options));
        this.logger.d(TAG, 'new BezierCurve created.');
        this.bezierCurve$.next(this.bezierCurve);
        this.bezierCurve$.complete();
        return this.bezierCurve;
      }),
    );
  }

  /**
   * 销毁贝瑟尔曲线
   */
  destroy() {
    this.get().subscribe(m => {
      m.setMap(null);
      this.logger.d(TAG, 'BezierCurve destroyed.');
      this.bezierCurve = null;
    });
  }

  getEditor() {
    // plugin is loading:
    return this.editor$.asObservable();
  }

  getPolyEditor() {
    return this.polyEditor$.asObservable();
  }

  /**
   * 加载编辑插件
   */
  loadEditor() {
    return this.plugins.load('AMap.BezierCurveEditor');
  }

  loadPolyEditor() {
    return this.plugins.load('AMap.PolyEditor');
  }

  /**
   * 创建编辑器
   */
  createEditor() {
    return this.loadEditor().pipe(
      switchMapTo(zip(this.amaps.get(), this.get())),
      map(([m, p]) => {
        this.editor = this.ngZone.runOutsideAngular(() => new AMap.BezierCurveEditor(m, p));
        this.logger.d(TAG, 'new BezierCurveEditor created.');
        this.editor$.next(this.editor);
        this.editor$.complete();
        return this.editor;
      }),
    );
  }

  createPolyEditor() {
    return this.loadPolyEditor().pipe(
      switchMapTo(zip(this.amaps.get(), this.get())),
      map(([m, p]) => {
        this.polyEditor = this.ngZone.runOutsideAngular(() => new AMap.PolyEditor(m, p));
        this.logger.d(TAG, 'new PolyEditor created.');
        this.polyEditor$.next(this.polyEditor);
        this.polyEditor$.complete();
        return this.polyEditor;
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

  togglePolyEditor(v: boolean) {
    if (v && !this.polyEditor) {
      this.createPolyEditor().subscribe(editor => editor.open());
      return;
    }

    if (this.polyEditor) {
      if (v) {
        this.polyEditor.open();
      } else {
        this.polyEditor.close();
      }
    }
  }
}
