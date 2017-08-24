import { Injectable } from '@angular/core';
import { MapAPIWrapperService } from '../../map-api-wrapper/map-api-wrapper.service';
import * as AMapType from '../../../interfaces/amap.interface';
import { AMapClass } from '../../../interfaces/amap.interface';
import { MarkerOptions } from '../../../interfaces/amap.marker-options';

declare const AMap: AMapClass;

@Injectable()
export class MarkerWrapperService {
  private _map: Promise<AMapType.Map>;

  constructor(private mapAPI: MapAPIWrapperService) {
    this._map = mapAPI.map;
  }

  createMarker(markerOption: MarkerOptions, addToMap = true): Promise<AMapType.Marker> {
    return this._map.then(map => {
      if (addToMap) {
        markerOption.map = map;
      }

      return new AMap.Marker(markerOption);
    });
  }
}
