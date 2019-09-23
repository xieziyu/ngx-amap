import { Injectable } from '@angular/core';
import { TextOptions, IPixel } from '../../types/interface';
import { AMapClass, Text, Map, Icon } from '../../types/class';
import { MapAPIService } from '../map-api/map-api.service';
import { PixelService } from '../pixel/pixel.service';
import { IconService } from '../icon/icon.service';
import { EventBinder } from '../../utils/event-binder';

declare const AMap: AMapClass;

@Injectable()
export class TextService extends EventBinder {
  TAG = 'text-service';
  private _map: Promise<Map>;

  constructor(
    private map: MapAPIService,
    private pixel: PixelService,
    private icon: IconService
  ) {
    super();
    this._map = map.map;
  }

  create(options: TextOptions, addToMap = true): Promise<Text> {
    return this._map.then(map => {
      if (options.offset) {
        options.offset = this.pixel.create(options.offset, 'offset');
      }

      if (options.shadow) {
        options.shadow = <Icon>this.icon.create(options.shadow, 'shadow');
      }

      if (!options.offset)  { delete options.offset; }
      if (!options.shadow)  { delete options.shadow; }

      if (addToMap) {
        options.map = map;
      }
      return new AMap.Text(options);
    });
  }

  destroy(text: Promise<Text>): Promise<void> {
    return text.then(m => {
      m.setMap(null);
    });
  }
}
