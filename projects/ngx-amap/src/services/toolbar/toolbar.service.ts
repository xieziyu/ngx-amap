import { Injectable } from '@angular/core';
import { AMapClass, ToolBar, Map } from '../../types/class';
import { MapAPIService } from '../map-api/map-api.service';
import { EventBinder } from '../../utils/event-binder';
import { ToolbarOptions } from '../../types/interface';
import { PixelService } from '../pixel/pixel.service';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';

declare const AMap: AMapClass;

@Injectable()
export class ToolBarService extends EventBinder {
  TAG = 'tool-bar-service';
  private _map: Promise<Map>;
  private _plugin: Promise<any>;

  constructor(
    private map: MapAPIService,
    private pixels: PixelService,
    private plugins: PluginLoaderService
  ) {
    super();
    this._map = map.map;
  }

  create(options: ToolbarOptions): Promise<ToolBar> {
    if (!this._plugin) {
      this._plugin = this.plugins.load('AMap.ToolBar');
    }

    return this._plugin.then(() => this._map)
      .then(map => {
        if (options.offset) {
          options.offset = this.pixels.create(options.offset, 'offset');
        }

        if (!options.offset) { delete options.offset; }
        const toolbar = new AMap.ToolBar(options);
        map.addControl(toolbar);
        return toolbar;
      });
  }

  destroy(toolbar: Promise<ToolBar>): Promise<void> {
    return this._map.then(map => toolbar.then(t => map.removeControl(t)));
  }
}
