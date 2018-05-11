import { Injectable } from '@angular/core';
import { AMapClass, CircleMarker, Map } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { MapAPIService } from '../map-api/map-api.service';
import { EventBinder } from '../../utils/event-binder';
import { CircleMarkerOptions } from '../../types/interface';

declare const AMap: AMapClass;

@Injectable()
export class CircleMarkerService extends EventBinder {
  TAG = 'circle-marker-service';
  private _map: Promise<Map>;

  constructor(
    private map: MapAPIService,
    private logger: LoggerService
  ) {
    super();
    this._map = map.map;
  }

  create(options: CircleMarkerOptions): Promise<CircleMarker> {
    return this._map.then(map => {
      options.map = map;
      return new AMap.CircleMarker(options);
    });
  }

  destroy(circle: Promise<CircleMarker>): Promise<void> {
    return circle.then(m => {
      m.setMap(null);
    });
  }
}
