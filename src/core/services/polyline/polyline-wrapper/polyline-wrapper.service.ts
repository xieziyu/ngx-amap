import { Injectable } from '@angular/core';
import { MapAPIWrapperService } from '../../map-api-wrapper/map-api-wrapper.service';
import * as AMapType from '../../../interfaces/amap.interface';
import { AMapClass } from '../../../interfaces/amap.interface';
import { PolylineOptions } from '../../../interfaces/amap.polyline-options';

declare const AMap: AMapClass;

@Injectable()
export class PolylineWrapperService {
  private _map: Promise<AMapType.Map>;

  constructor(private mapAPI: MapAPIWrapperService) {
    this._map = mapAPI.map;
  }

  createPolyline(options: PolylineOptions, addToMap = true): Promise<AMapType.Polyline> {
    return this._map.then(map => {
      if (addToMap) {
        options.map = map;
      }

      return new AMap.Polyline(options);
    });
  }
}
