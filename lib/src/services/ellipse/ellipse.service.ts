import { Injectable } from '@angular/core';
import { AMapClass, Ellipse, Map } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { MapAPIService } from '../map-api/map-api.service';
import { EventBinder } from '../../utils/event-binder';
import { EllipseOptions } from '../../types/interface';

declare const AMap: AMapClass;

@Injectable()
export class EllipseService extends EventBinder {
  TAG = 'ellipse-service';
  private _map: Promise<Map>;

  constructor(
    private map: MapAPIService,
    private logger: LoggerService
  ) {
    super();
    this._map = map.map;
  }

  create(options: EllipseOptions): Promise<Ellipse> {
    return this._map.then(map => {
      options.map = map;
      return new AMap.Ellipse(options);
    });
  }

  destroy(ellipse: Promise<Ellipse>): Promise<void> {
    return ellipse.then(m => {
      m.setMap(null);
    });
  }
}
