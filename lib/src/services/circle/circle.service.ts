import { Injectable } from '@angular/core';
import { AMapClass, Circle, Map, CircleEditor } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { MapAPIService } from '../map-api/map-api.service';
import { EventBinder } from '../../utils/event-binder';
import { CircleOptions } from '../../types/interface';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';

declare const AMap: AMapClass;

@Injectable()
export class CircleService extends EventBinder {
  TAG = 'circle-service';
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

  create(options: CircleOptions): Promise<Circle> {
    return this._map.then(map => {
      options.map = map;
      return new AMap.Circle(options);
    });
  }

  destroy(circle: Promise<Circle>): Promise<void> {
    return circle.then(m => {
      m.setMap(null);
    });
  }

  loadEditor(): Promise<void> {
    if (!this._editorPlugin) {
      this._editorPlugin = this.plugins.load('AMap.CircleEditor');
    }

    return this._editorPlugin;
  }

  createEditor(c: Circle): Promise<CircleEditor> {
    return this._map.then(map => new AMap.CircleEditor(map, c));
  }
}
