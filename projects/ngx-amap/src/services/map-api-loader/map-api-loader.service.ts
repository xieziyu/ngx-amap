import { Inject, Injectable, InjectionToken } from '@angular/core';
import { DocumentRef, WindowRef } from '../../utils/browser-globals';
import { LoggerService } from '../logger/logger.service';

export interface IMapAPILoaderConfig {
  apiKey?: string;
  apiVersion?: string;
  urlPath?: string;
  debug?: boolean;
}

export const MAP_API_CONFIG = new InjectionToken<IMapAPILoaderConfig>('ngx-amap MAP_API_CONFIG');

@Injectable()
export class MapAPILoaderService {
  TAG = 'map-api-loader';

  private _defaultUrl = 'https://webapi.amap.com/maps';
  private _defaultVersion = '1.4.11';
  private _config: IMapAPILoaderConfig;
  private _documentRef: DocumentRef;
  private _windowRef: WindowRef;
  private _mapLoaded: Promise<void>;

  constructor(@Inject(MAP_API_CONFIG) config: any,
              d: DocumentRef,
              w: WindowRef,
              private logger: LoggerService) {
    this._config = config || {};
    this._windowRef = w;
    this._documentRef = d;
  }

  load() {
    if (this._mapLoaded) {
      return this._mapLoaded;
    }
    this.logger.d(this.TAG, 'loading AMap api...');

    const callbackName = `ngxAMapAPILoader`;
    const script = this._documentRef.getNativeDocument().createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = this.getSrcFromConfig(callbackName);

    this._mapLoaded = new Promise<void>((resolve: Function, reject: Function) => {
      (<any>this._windowRef.getNativeWindow())[callbackName] = () => {
        this.logger.d(this.TAG, 'loading AMap api COMPLETE');
        resolve();
      };

      script.onerror = (error: Event) => { reject(error); };
    });

    this._documentRef.getNativeDocument().body.appendChild(script);
    return this._mapLoaded;
  }

  private getSrcFromConfig(callbackName: string) {
    const urlBase = this._config.urlPath || this._defaultUrl;
    const queryParams: {[key: string]: string | Array<string>} = {
      v: this._config.apiVersion || this._defaultVersion,
      callback: callbackName,
      key: this._config.apiKey
    };
    const params = Object.keys(queryParams)
      .filter((k: string) => queryParams[k] != null)
      .filter((k: string) => {
        // remove empty arrays
        return !Array.isArray(queryParams[k]) ||
            (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
      })
      .map((k: string) => {
        // join arrays as comma seperated strings
        const i = queryParams[k];
        if (Array.isArray(i)) {
          return {key: k, value: i.join(',')};
        }
        return {key: k, value: queryParams[k]};
      })
      .map((entry: {key: string, value: string}) => `${entry.key}=${entry.value}`)
      .join('&');

    return `${urlBase}?${params}`;
  }
}
