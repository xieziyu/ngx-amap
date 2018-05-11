import { Injectable } from '@angular/core';
import { AMapClass, BezierCurve, Map } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { MapAPIService } from '../map-api/map-api.service';
import { EventBinder } from '../../utils/event-binder';
import { BezierCurveOptions } from '../../types/interface';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';
import { BezierCurveEditor, BezierCurveEditorOptions } from '../../types/class/amap.editor';

declare const AMap: AMapClass;

@Injectable()
export class BezierCurveService extends EventBinder {
  TAG = 'bezier-curve-service';
  private _map: Promise<Map>;
  private _editorPlugin: Promise<void>;

  constructor(
    private map: MapAPIService,
    private plugins: PluginLoaderService,
    private logger: LoggerService
  ) {
    super();
    this._map = map.map;
  }

  create(options: BezierCurveOptions): Promise<BezierCurve> {
    return this._map.then(map => {
      options.map = map;
      return new AMap.BezierCurve(options);
    });
  }

  destroy(bezierCurve: Promise<BezierCurve>): Promise<void> {
    return bezierCurve.then(m => {
      m.setMap(null);
    });
  }

  loadEditor(): Promise<void> {
    if (!this._editorPlugin) {
      this._editorPlugin = this.plugins.load('AMap.BezierCurveEditor');
    }

    return this._editorPlugin;
  }

  createEditor(c: BezierCurve, opts: BezierCurveEditorOptions): Promise<BezierCurveEditor> {
    return this._map.then(map => new AMap.BezierCurveEditor(map, c, opts));
  }
}
