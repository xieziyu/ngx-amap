import { Injectable } from '@angular/core';
import { AMapClass, Rectangle, Map, RectangleEditor } from '../../types/class';
import { MapAPIService } from '../map-api/map-api.service';
import { EventBinder } from '../../utils/event-binder';
import { RectangleOptions } from '../../types/interface';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';

declare const AMap: AMapClass;

@Injectable()
export class RectangleService extends EventBinder {
  TAG = 'rectangle-service';
  private _map: Promise<Map>;
  private _editorPlugin: Promise<void>;

  constructor(
    private map: MapAPIService,
    private plugins: PluginLoaderService,
  ) {
    super();
    this._map = map.map;
  }

  create(options: RectangleOptions): Promise<Rectangle> {
    return this._map.then(map => {
      options.map = map;
      return new AMap.Rectangle(options);
    });
  }

  destroy(rectangle: Promise<Rectangle>): Promise<void> {
    return rectangle.then(m => {
      m.setMap(null);
    });
  }

  loadEditor(): Promise<void> {
    if (!this._editorPlugin) {
      this._editorPlugin = this.plugins.load('AMap.RectangleEditor');
    }

    return this._editorPlugin;
  }

  createEditor(r: Rectangle): Promise<RectangleEditor> {
    return this._map.then(map => new AMap.RectangleEditor(map, r));
  }
}
