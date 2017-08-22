import { Injectable } from '@angular/core';

import * as AMapType from '../../interfaces/amap.interface';
import { AMapClass, MapOptions } from '../../interfaces/amap.interface';
import { MapAPILoaderService } from '../map-api-loader/map-api-loader.service';

declare const AMap: AMapClass;

@Injectable()
export class MapAPIWrapperService {
  private _map: Promise<AMapType.Map>;
  private _mapResolver: (map?: AMapType.Map) => void;

  constructor(private loader: MapAPILoaderService) {
    this._map = new Promise<AMapType.Map>(resolve => {
      this._mapResolver = resolve;
    });
  }

  createMap(el: HTMLDivElement, mapOptions: MapOptions): Promise<void> {
    return this.loader.load().then(() => {
      const map = new AMap.Map(el, mapOptions);
      this._mapResolver(map);
    });
  }

  destroy() {
    this._map.then(map => map.destroy());
  }

  get map(): Promise<AMapType.Map> {
    return this._map;
  }

  setZoom(level: number): Promise<void> {
    return this._map.then(map => map.setZoom(level));
  }

  setlabelzIndex(index: number): Promise<void> {
    return this._map.then(map => map.setlabelzIndex(index));
  }

  setCenter(position: AMapType.LngLat | Array<number>) {
    return this._map.then(map => map.setCenter(position));
  }

  setZoomAndCenter(zoomLevel: number, center: AMapType.LngLat | Array<number>) {
    return this._map.then(map => map.setZoomAndCenter(zoomLevel, center));
  }

  setCity(city: string): Promise<void> {
    return new Promise<void>(resolve => {
      this._map.then(map => map.setCity(city, () => { resolve(); }));
    });
  }
}
