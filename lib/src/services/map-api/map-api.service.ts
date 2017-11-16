import { Injectable } from '@angular/core';
import { MapAPILoaderService } from '../map-api-loader/map-api-loader.service';
import { MapOptions } from '../../types/interface';
import { AMapClass, Map } from '../../types/class';

declare const AMap: AMapClass;

@Injectable()
export class MapAPIService {
  private _map: Map;
  private _mapPromise: Promise<Map>;
  private _mapResolver: (map?: Map) => void;

  constructor(private loader: MapAPILoaderService) {
    this._mapPromise = new Promise(resolve => this._mapResolver = resolve);
  }

  createMap(el: HTMLDivElement, options: MapOptions): Promise<Map> {
    return this.loader.load().then(() => {
      this._map = new AMap.Map(el, options);
      this._mapResolver(this._map);
      return this._map;
    });
  }

  destroyMap() {
    this._mapPromise.then(map => {
      map.clearMap();
      map.destroy();
    });
  }

  get map(): Promise<Map> {
    return this._mapPromise;
  }
}
