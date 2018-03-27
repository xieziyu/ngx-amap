import { Injectable } from '@angular/core';
import { AMapClass, Polyline, Map, PolyEditor } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { MapAPIService } from '../map-api/map-api.service';
import { EventBinder } from '../../utils/event-binder';
import { PolylineOptions } from '../../types/interface';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';

declare const AMap: AMapClass;

@Injectable()
export class PolylineService extends EventBinder {
  TAG = 'polyline-service';
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

  create(options: PolylineOptions): Promise<Polyline> {
    return this._map.then(map => {
      options.map = map;
      return new AMap.Polyline(options);
    });
  }

  destroy(polyline: Promise<Polyline>): Promise<void> {
    return polyline.then(m => {
      m.setMap(null);
    });
  }

  loadEditor(): Promise<void> {
    if (!this._editorPlugin) {
      this._editorPlugin = this.plugins.load('AMap.PolyEditor');
    }

    return this._editorPlugin;
  }

  createEditor(p: Polyline): Promise<PolyEditor> {
    return this._map.then(map => new AMap.PolyEditor(map, p));
  }
}
