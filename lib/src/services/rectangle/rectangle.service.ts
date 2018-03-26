import { Injectable } from '@angular/core';
import { AMapClass, Rectangle, Map } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { MapAPIService } from '../map-api/map-api.service';
import { EventBinder } from '../../utils/event-binder';
import { RectangleOptions } from '../../types/interface';

declare const AMap: AMapClass;

@Injectable()
export class RectangleService extends EventBinder {
  TAG = 'rectangle-service';
  private _map: Promise<Map>;

  constructor(
    private map: MapAPIService,
    private logger: LoggerService
  ) {
    super();
    this._map = map.map;
  }

  create(options: RectangleOptions): Promise<Rectangle> {
    return this._map.then(map => {
      options.map = map;
      return new AMap.Rectangle(options);
    });
  }

  destroy(rectangle: Promise<Rectangle>): Promise<void> {
    return rectangle.then(m => {
      m.setMap(null);
    });
  }
}
