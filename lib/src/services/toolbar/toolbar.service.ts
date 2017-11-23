import { Injectable } from '@angular/core';
import { AMapClass, ToolBar, Map } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { MapAPIService } from '../map-api/map-api.service';
import { EventBinder } from '../../utils/event-binder';
import { ToolbarOptions } from '../../types/interface';
import { PixelService } from '../pixel/pixel.service';

declare const AMap: AMapClass;

@Injectable()
export class ToolBarService extends EventBinder {
  TAG = 'tool-bar-service';
  private _map: Promise<Map>;

  constructor(
    private map: MapAPIService,
    private logger: LoggerService,
    private pixels: PixelService
  ) {
    super();
    this._map = map.map;
  }

  create(options: ToolbarOptions): Promise<ToolBar> {
    return new Promise<ToolBar>(resolve => {
      this._map.then(map => {
        map.plugin('AMap.ToolBar', () => {
          if (options.offset) {
            options.offset = this.pixels.create(options.offset, 'offset');
          }

          if (!options.offset)  { delete options.offset; }
          const toolbar = new AMap.ToolBar(options);
          map.addControl(toolbar);
          resolve(toolbar);
        });
      });
    });
  }

  destroy(toolbar: Promise<ToolBar>): Promise<void> {
    return this._map.then(map => toolbar.then(t => map.removeControl(t)));
  }
}
