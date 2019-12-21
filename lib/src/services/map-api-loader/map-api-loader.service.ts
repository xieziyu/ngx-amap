import { Inject, Injectable, InjectionToken } from '@angular/core';
import { DocumentRef, WindowRef } from '../../utils/browser-globals';
import { LoggerService } from '../logger/logger.service';

export interface IMapAPILoaderConfig {
  apiKey?: string;
  apiVersion?: string;
  uiApiVersion?: string; // map-ui api
  urlPath?: string;
  debug?: boolean;
}

export const MAP_API_CONFIG = new InjectionToken<IMapAPILoaderConfig>('ngx-amap MAP_API_CONFIG');

@Injectable()
export class MapAPILoaderService {
  TAG = 'map-api-loader';

  private _defaultUrl = 'https://webapi.amap.com/maps';
  private _amapUIApiUrl = 'https://webapi.amap.com/ui/1.0/main.js';
  private _defaultVersion = '1.4.3';
  private _defaultUIAPIVersion = '1.0.11';
  private _config: IMapAPILoaderConfig;
  private _documentRef: DocumentRef;
  private _windowRef: WindowRef;
  private _mapLoaded: Promise<void>;
  private _mapUILoaded: Promise<void>; // amap-ui

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

  loadUI() {
    if (this._mapUILoaded) {
      return this._mapUILoaded;
    }
    this.logger.d(this.TAG, 'loading AMapUI api...');

    const callbackName = `ngxAMapUIAPILoader`;
    const script = this._documentRef.getNativeDocument().createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = this.getSrcFromConfig(callbackName, true);

    this._mapUILoaded = new Promise<void>((resolve: Function, reject: Function) => {
      // AMapUI script not trigger callback function, instead of onload event
      script.onload = () => {
        this.logger.d(this.TAG, 'loading AMapUI api COMPLETE');
        resolve();
      };

      script.onerror = (error: Event) => { reject(error); };
    });

    this._documentRef.getNativeDocument().body.appendChild(script);
    return this._mapUILoaded;
  }

  private getSrcFromConfig(callbackName: string, isUI = false) {
    let urlBase = '';
    if (isUI) {
      urlBase = this._amapUIApiUrl;
    } else {
      urlBase = this._config.urlPath || this._defaultUrl;
    }
    let queryParams: { [key: string]: string | Array<string> } = {
      v: isUI ? (this._config.uiApiVersion || this._defaultUIAPIVersion) : (this._config.apiVersion || this._defaultVersion),
      callback: callbackName
    };
    if (isUI) {
      queryParams.key = this._config.apiKey;
    }

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
          return { key: k, value: i.join(',') };
        }
        return { key: k, value: queryParams[k] };
      })
      .map((entry: { key: string, value: string }) => `${entry.key}=${entry.value}`)
      .join('&');

    return `${urlBase}?${params}`;
  }
}
