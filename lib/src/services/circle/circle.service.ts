import { Injectable } from '@angular/core';
import { AMapClass, Circle, Map } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { MapAPIService } from '../map-api/map-api.service';
import { EventBinder } from '../../utils/event-binder';
import { CircleOptions } from '../../types/interface';

declare const AMap: AMapClass;

@Injectable()
export class CircleService extends EventBinder {
  TAG = 'circle-service';
  private _map: Promise<Map>;

  constructor(
    private map: MapAPIService,
    private logger: LoggerService
  ) {
    super();
    this._map = map.map;
  }

  create(options: CircleOptions): Promise<Circle> {
    return this._map.then(map => {
      options.map = map;
      return new AMap.Circle(options);
    });
  }

  destroy(circle: Promise<Circle>): Promise<void> {
    return circle.then(m => {
      m.setMap(null);
    });
  }
}
