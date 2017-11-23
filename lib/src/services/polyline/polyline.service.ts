import { Injectable } from '@angular/core';
import { AMapClass, Polyline, Map } from '../../types/class';
import { LoggerService } from '../logger';
import { MapAPIService } from '../map-api/map-api.service';
import { EventBinder } from '../../utils/event-binder';
import { PolylineOptions } from '../../types/interface';

declare const AMap: AMapClass;

@Injectable()
export class PolylineService extends EventBinder {
  TAG = 'polyline-service';
  private _map: Promise<Map>;

  constructor(
    private map: MapAPIService,
    private logger: LoggerService
  ) {
    super();
    this._map = map.map;
  }

  create(options: PolylineOptions): Promise<Polyline> {
    return this._map.then(map => {
      options.map = map;
      return new AMap.Polyline(options);
    });
  }

  destroy(polyline: Promise<Polyline>): Promise<void> {
    return polyline.then(m => {
      m.setMap(null);
    });
  }
}
