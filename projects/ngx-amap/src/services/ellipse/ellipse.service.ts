import { Injectable } from '@angular/core';
import { AMapClass, Ellipse, Map, EllipseEditor } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { MapAPIService } from '../map-api/map-api.service';
import { EventBinder } from '../../utils/event-binder';
import { EllipseOptions } from '../../types/interface';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';

declare const AMap: AMapClass;

@Injectable()
export class EllipseService extends EventBinder {
  TAG = 'ellipse-service';
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

  create(options: EllipseOptions): Promise<Ellipse> {
    return this._map.then(map => {
      options.map = map;
      return new AMap.Ellipse(options);
    });
  }

  destroy(ellipse: Promise<Ellipse>): Promise<void> {
    return ellipse.then(m => {
      m.setMap(null);
    });
  }

  loadEditor(): Promise<void> {
    if (!this._editorPlugin) {
      this._editorPlugin = this.plugins.load('AMap.EllipseEditor');
    }

    return this._editorPlugin;
  }

  createEditor(e: Ellipse): Promise<EllipseEditor> {
    return this._map.then(map => new AMap.EllipseEditor(map, e));
  }
}
