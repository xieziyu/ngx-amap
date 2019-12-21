import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MapAPILoaderService, MAP_API_CONFIG, IMapAPILoaderConfig } from '../map-api-loader/map-api-loader.service';
import { MapOptions } from '../../types/interface';
import { AMapClass, Map } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { EventBinder } from '../../utils/event-binder';

declare const AMap: AMapClass;

@Injectable()
export class MapAPIService extends EventBinder {
  TAG = 'map-api';
  private _map: Map;
  private _config: IMapAPILoaderConfig;
  private _mapPromise: Promise<Map>;
  private _mapResolver: (map?: Map) => void;

  constructor(@Inject(MAP_API_CONFIG) config: any, private loader: MapAPILoaderService, private logger: LoggerService) {
    super();
    this._config = config;
    this._mapPromise = new Promise(resolve => this._mapResolver = resolve);
  }

  createMap(el: HTMLDivElement, options: MapOptions): Promise<Map> {
    return this.loader.load().then(() => {
      this._map = new AMap.Map(el, options);
      this._mapResolver(this._map);
      this.logger.d(this.TAG, 'new map created');
      if (this._config.uiApiVersion) {
        this.loader.loadUI().then(() => { });
      }
      return this._map;
    });
  }

  destroyMap() {
    this._mapPromise.then(map => {
      map.clearMap();
      map.destroy();
    });
  }

  get map(): Promise<Map> {
    return this._mapPromise;
  }

  bindMapEvents(event: string): Observable<any> {
    return this.bindEvent(this._mapPromise, event);
  }
}
