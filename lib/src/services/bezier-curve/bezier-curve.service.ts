import { Injectable } from '@angular/core';
import { AMapClass, BezierCurve, Map } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { MapAPIService } from '../map-api/map-api.service';
import { EventBinder } from '../../utils/event-binder';
import { BezierCurveOptions } from '../../types/interface';

declare const AMap: AMapClass;

@Injectable()
export class BezierCurveService extends EventBinder {
  TAG = 'bezier-curve-service';
  private _map: Promise<Map>;

  constructor(
    private map: MapAPIService,
    private logger: LoggerService
  ) {
    super();
    this._map = map.map;
  }

  create(options: BezierCurveOptions): Promise<BezierCurve> {
    return this._map.then(map => {
      options.map = map;
      return new AMap.BezierCurve(options);
    });
  }

  destroy(bezierCurve: Promise<BezierCurve>): Promise<void> {
    return bezierCurve.then(m => {
      m.setMap(null);
    });
  }
}
