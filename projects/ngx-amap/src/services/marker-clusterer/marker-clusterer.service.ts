import { Injectable } from '@angular/core';
import { MarkerClustererOptions, IPixel, ISize, IClusterStyle } from '../../types/interface';
import { AMapClass, MarkerClusterer, Map, ClusterStyle } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { MapAPIService } from '../map-api/map-api.service';
import { PixelService } from '../pixel/pixel.service';
import { SizeService } from '../size/size.service';
import { EventBinder } from '../../utils/event-binder';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';

declare const AMap: AMapClass;

@Injectable()
export class MarkerClustererService extends EventBinder {
  TAG = 'marker-clusterer-service';
  private _map: Promise<Map>;
  private _plugin: Promise<any>;

  constructor(
    private map: MapAPIService,
    private logger: LoggerService,
    private pixel: PixelService,
    private size: SizeService,
    private plugins: PluginLoaderService
  ) {
    super();
    this._map = map.map;
  }

  create(options: MarkerClustererOptions): Promise<MarkerClusterer> {
    if (!this._plugin) {
      this._plugin = this.plugins.load('AMap.MarkerClusterer');
    }

    return this._plugin.then(() => this._map)
      .then(map => {
        if (options.styles) {
          options.styles = options.styles.map(style => this.createStyle(style));
        }
        return new AMap.MarkerClusterer(map, [], options);
      });
  }

  destroy(cluster: Promise<MarkerClusterer>) {
    return cluster.then(c => {
      c.clearMarkers();
      c.setMap(null);
    });
  }

  createStyle(style: IClusterStyle): ClusterStyle {
    if (style.size) {
      style.size = this.size.create(style.size, 'size');
    }

    if (style.offset) {
      style.offset = this.pixel.create(style.offset, 'offset');
      if (!style.offset) { delete style.offset; }
    }

    if (style.imageOffset) {
      style.imageOffset = this.pixel.create(style.imageOffset, 'imageOffset');
      if (!style.imageOffset) { delete style.imageOffset; }
    }

    return <ClusterStyle>style;
  }
}
