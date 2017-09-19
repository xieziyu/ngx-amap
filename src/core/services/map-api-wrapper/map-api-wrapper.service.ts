import { Injectable } from '@angular/core';

import * as AMapType from '../../interfaces/amap.interface';
import { AMapClass } from '../../interfaces/amap.interface';
import { MapOptions } from '../../interfaces/amap.map-options';
import { PixelOptions } from '../../interfaces/amap.pixel-options';
import { SizeOptions } from '../../interfaces/amap.size-options';
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

  createPixel(pixel: PixelOptions): AMapType.Pixel {
    return new AMap.Pixel(pixel.x, pixel.y);
  }

  verifyPixel(tag: string, name: string, pixel: PixelOptions) {
    if (typeof pixel.x !== 'number' || typeof pixel.y !== 'number') {
      console.error(`[${tag}] '${name}' should have type {x: number, y: number}`);
      return false;
    }
    return true;
  }

  createSize(size: SizeOptions): AMapType.Size {
    return new AMap.Size(size.width, size.height);
  }

  verifySize(tag: string, name: string, size: SizeOptions) {
    if (typeof size.width !== 'number' || typeof size.height !== 'number') {
      console.error(`[${tag}] '${name}' should have type {width: number, height: number}`);
      return false;
    }
    return true;
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

  setFitView() {
    return this._map.then(map => map.setFitView());
  }
}
