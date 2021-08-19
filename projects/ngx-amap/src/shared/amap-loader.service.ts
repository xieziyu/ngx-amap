import { Inject, Injectable } from '@angular/core';
import { LoggerService } from './logger/logger.service';
import { NgxAmapConfig, NGX_AMAP_CONFIG } from './ngx-amap-config';
import { Observable, ReplaySubject } from 'rxjs';

const TAG = 'AMapLoader';

@Injectable()
export class AMapLoaderService {
  private defaultProtocol = 'https';
  private defaultVersion = '1.4.15';
  private defaultUIVersion = '1.0.11';
  private loading$: ReplaySubject<void>;
  private uiLoading$: ReplaySubject<void>;

  constructor(
    @Inject(NGX_AMAP_CONFIG) private config: NgxAmapConfig = {},
    private logger: LoggerService,
  ) {
    this.config = config || {};
  }

  load(): Observable<void> {
    if (this.loading$) {
      return this.loading$.asObservable();
    }
    this.logger.d(TAG, 'loading AMap API ...');
    this.loading$ = new ReplaySubject();
    const callbackName = '_NgxAmapAPILoader';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = this.getSrcFromConfig(callbackName);
    script.onerror = (err: Event) => {
      this.logger.e('failed to load AMap API.');
      this.loading$.error(err);
    };
    window[callbackName] = () => {
      this.logger.d(TAG, 'loading AMap API COMPLETE');
      this.loading$.next();
      this.loading$.complete();
    };
    document.body.appendChild(script);
    return this.loading$.asObservable();
  }

  loadUI(): Observable<void> {
    if (this.uiLoading$) {
      return this.uiLoading$.asObservable();
    }
    this.logger.d(TAG, 'loading AMap UI ...');
    this.uiLoading$ = new ReplaySubject();
    const uiScript = document.createElement('script');
    uiScript.type = 'text/javascript';
    uiScript.async = true;
    uiScript.defer = true;
    uiScript.src = this.getUISrcFromConfig();
    uiScript.onerror = (err: Event) => {
      this.logger.e('failed to load AMap API.');
    };
    uiScript.onload = () => {
      // tslint:disable-next-line: no-string-literal
      window['initAMapUI']();
      this.logger.d(TAG, 'loading AMap UI COMPLETE');
      this.uiLoading$.next();
      this.uiLoading$.complete();
    };
    document.body.appendChild(uiScript);
    return this.uiLoading$.asObservable();
  }

  private getSrcFromConfig(callbackName: string) {
    const urlBase = `${this.config.protocol || this.defaultProtocol}://webapi.amap.com/maps`;
    const queryParams: { [key: string]: string | Array<string> } = {
      v: this.config.apiVersion || this.defaultVersion,
      callback: callbackName,
      key: this.config.apiKey,
    };
    const params = Object.keys(queryParams)
      .filter((k: string) => queryParams[k] != null)
      .filter((k: string) => {
        // remove empty arrays
        return (
          !Array.isArray(queryParams[k]) ||
          (Array.isArray(queryParams[k]) && queryParams[k].length > 0)
        );
      })
      .map((k: string) => {
        // join arrays as comma seperated strings
        const i = queryParams[k];
        if (Array.isArray(i)) {
          return { key: k, value: i.join(',') };
        }
        return { key: k, value: queryParams[k] };
      })
      .map((entry: { key: string; value: string }) => `${entry.key}=${entry.value}`)
      .join('&');

    return `${urlBase}?${params}`;
  }

  private getUISrcFromConfig() {
    // tslint:disable-next-line: max-line-length
    const urlBase = `${this.config.protocol ||
      this.defaultProtocol}://webapi.amap.com/ui/1.1/main-async.js?v=${this.config.uiVersion ||
      this.defaultUIVersion}`;
    return urlBase;
  }
}
