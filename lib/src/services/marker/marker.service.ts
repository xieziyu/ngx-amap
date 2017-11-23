import { Injectable } from '@angular/core';
import { MarkerOptions, IPixel } from '../../types/interface';
import { AMapClass, Marker, Map, Icon } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { MapAPIService } from '../map-api/map-api.service';
import { PixelService } from '../pixel/pixel.service';
import { IconService } from '../icon/icon.service';
import { LabelService } from '../label/label.service';
import { EventBinder } from '../../utils/event-binder';

declare const AMap: AMapClass;

@Injectable()
export class MarkerService extends EventBinder {
  TAG = 'marker-service';
  private _map: Promise<Map>;

  constructor(
    private map: MapAPIService,
    private logger: LoggerService,
    private pixel: PixelService,
    private icon: IconService,
    private label: LabelService
  ) {
    super();
    this._map = map.map;
  }

  create(options: MarkerOptions): Promise<Marker> {
    return this._map.then(map => {
      if (options.offset) {
        options.offset = this.pixel.create(options.offset, 'offset');
      }

      if (options.icon) {
        options.icon = this.icon.create(options.icon);
      }

      if (options.shadow) {
        options.shadow = <Icon>this.icon.create(options.shadow, 'shadow');
      }

      if (options.label) {
        options.label = this.label.create(options.label);
      }

      if (!options.offset)  { delete options.offset; }
      if (!options.icon)    { delete options.icon; }
      if (!options.shadow)  { delete options.shadow; }
      if (!options.label)   { delete options.label; }

      options.map = map;
      return new AMap.Marker(options);
    });
  }

  destroy(marker: Promise<Marker>): Promise<void> {
    return marker.then(m => {
      m.setMap(null);
    });
  }
}
