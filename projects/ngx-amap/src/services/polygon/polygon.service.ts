import { Injectable } from '@angular/core';
import { AMapClass, Polygon, Map, PolyEditor} from '../../types/class';
import { MapAPIService } from '../map-api/map-api.service';
import { EventBinder } from '../../utils/event-binder';
import { PolygonOptions } from '../../types/interface';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';

declare const AMap: AMapClass;

@Injectable()
export class PolygonService extends EventBinder {
  TAG = 'polygon-service';
  private _map: Promise<Map>;
  private _editorPlugin: Promise<void>;

  constructor(
    private map: MapAPIService,
    private plugins: PluginLoaderService,
  ) {
    super();
    this._map = map.map;
  }

  create(options: PolygonOptions): Promise<Polygon> {
    return this._map.then(map => {
      options.map = map;
      return new AMap.Polygon(options);
    });
  }

  destroy(polygon: Promise<Polygon>): Promise<void> {
    return polygon.then(m => {
      m.setMap(null);
    });
  }

  loadEditor(): Promise<void> {
    if (!this._editorPlugin) {
      this._editorPlugin = this.plugins.load('AMap.PolyEditor');
    }

    return this._editorPlugin;
  }

  createEditor(p: Polygon): Promise<PolyEditor> {
    return this._map.then(map => new AMap.PolyEditor(map, p));
  }
}
