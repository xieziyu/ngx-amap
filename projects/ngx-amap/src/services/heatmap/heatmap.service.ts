import { Injectable } from '@angular/core';
import { AMapClass, Heatmap, Map } from '../../types/class';
import { MapAPIService } from '../map-api/map-api.service';
import { EventBinder } from '../../utils/event-binder';
import { HeatmapOptions } from '../../types/interface';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';

declare const AMap: AMapClass;

@Injectable()
export class HeatmapService extends EventBinder {
  TAG = 'heatmap-service';
  private _map: Promise<Map>;
  private _plugin: Promise<any>;

  constructor(
    private map: MapAPIService,
    private plugins: PluginLoaderService
  ) {
    super();
    this._map = map.map;
  }

  create(options: HeatmapOptions): Promise<Heatmap> {
    if (!this._plugin) {
      this._plugin = this.plugins.load('AMap.Heatmap');
    }

    return this._plugin.then(() => this._map)
      .then(map => {
        const heatmap = new AMap.Heatmap(map, options);
        return heatmap;
      });
  }

  destroy(heatmap: Promise<Heatmap>): Promise<void> {
    return heatmap.then(hm => hm.setMap(null));
  }
}

