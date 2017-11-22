import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { InfoWindowOptions, IPixel, ILngLat } from '../../types/interface';
import { AMapClass, InfoWindow, Map, Icon, LngLat } from '../../types/class';
import { LoggerService } from '../logger';
import { MapAPIService } from '../map-api/map-api.service';
import { PixelService } from '../pixel/pixel.service';
import { SizeService } from '../size/size.service';
import { EventBinder } from '../../utils/event-binder';

declare const AMap: AMapClass;

@Injectable()
export class InfoWindowService extends EventBinder {
  TAG = 'info-window-service';
  private _map: Promise<Map>;

  constructor(
    private map: MapAPIService,
    private logger: LoggerService,
    private pixel: PixelService,
    private size: SizeService
  ) {
    super();
    this._map = map.map;
  }

  create(options: InfoWindowOptions): Promise<InfoWindow> {
    return this._map.then(map => {
      if (options.offset) {
        options.offset = this.pixel.create(options.offset, 'offset');
      }

      if (options.size) {
        options.size = this.size.create(options.size, 'size');
      }

      return new AMap.InfoWindow(options);
    });
  }

  destroy(infoWindow: Promise<InfoWindow>): Promise<void> {
    return infoWindow.then(w => {
      w.close();
    });
  }

  open(infoWindow: InfoWindow, position?: ILngLat): Promise<void> {
    return this._map.then(map => {
      infoWindow.open(map, position);
    });
  }
}
