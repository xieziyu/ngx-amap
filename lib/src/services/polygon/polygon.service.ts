import { Injectable } from '@angular/core';
import { AMapClass, Polygon, Map } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { MapAPIService } from '../map-api/map-api.service';
import { EventBinder } from '../../utils/event-binder';
import { PolygonOptions } from '../../types/interface';

declare const AMap: AMapClass;

@Injectable()
export class PolygonService extends EventBinder {
  TAG = 'polygon-service';
  private _map: Promise<Map>;

  constructor(
    private map: MapAPIService,
    private logger: LoggerService
  ) {
    super();
    this._map = map.map;
  }

  create(options: PolygonOptions): Promise<Polygon> {
    return this._map.then(map => {
      options.map = map;
      return new AMap.Polygon(options);
    });
  }

  destroy(polygon: Promise<Polygon>): Promise<void> {
    return polygon.then(m => {
      m.setMap(null);
    });
  }
}
