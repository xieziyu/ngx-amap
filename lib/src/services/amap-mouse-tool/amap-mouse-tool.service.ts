import { Injectable } from '@angular/core';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';
import { RawEventBinder } from '../../utils/event-binder';
import { LoggerService } from '../logger/logger.service';
import { AMapClass, Circle, Marker, MouseTool, Polyline, Polygon, Map } from '../../types/class';
import { Observable } from 'rxjs/Observable';
import { CircleOptions, MarkerOptions, PolygonOptions, PolylineOptions } from '../../types/interface';
import { Subscription } from 'rxjs/Subscription';

declare const AMap: AMapClass;

@Injectable()
export class AmapMouseToolService {
  TAG = 'amap-mouse-tool';

  private _plugin: Promise<void>;

  constructor(private logger: LoggerService, private plugins: PluginLoaderService) {
  }

  of(map: Map) {
    if (!this._plugin) {
      this._plugin = this.plugins.load('AMap.MouseTool');
    }
    return this._plugin.then(() => new AmapMouseToolWrapper(map));
  }
}

export class AmapMouseToolWrapper extends RawEventBinder {
  private _mouseTool: MouseTool;

  private _subscription: Subscription;

  // I'm not able to use declared type 'Map' here, rollup complains:
  // 'Map' is not exported by lib/.ng_pkg_build/ngx-amap/ts/types/class/amap.map.js
  // it may be related to this issue
  // https://github.com/rollup/rollup/issues/1048
  constructor(map: any) {
    super();
    this._mouseTool = new AMap.MouseTool(map);
  }

  on(event: string): Observable<any> {
    return this.bindEvent<MouseTool>(this._mouseTool, event);
  }

  get native(): MouseTool {
    return this._mouseTool;
  }

  marker(options?: MarkerOptions): Promise<Marker> {
    return this._exec('marker', options);
  }

  polyline(options?: PolylineOptions): Promise<Polyline> {
    return this._exec('polyline', options);
  }

  polygon(options?: PolygonOptions): Promise<Polygon> {
    return this._exec('polygon', options);
  }

  circle(options?: CircleOptions): Promise<Circle> {
    return this._exec('circle', options);
  }

  // todo add rectangle class
  rectangle(options?: PolygonOptions): Promise<Polygon> {
    return this._exec('rectangle', options);
  }

  rule(options?: PolylineOptions) {
    return this._exec('rule', options);
  }

  measureArea(options?: PolygonOptions) {
    return this._exec('measureArea', options);
  }

  rectZoomIn(options?: PolygonOptions) {
    return this._exec('rectZoomIn', options);
  }

  rectZoomOut(options?: PolygonOptions) {
    return this._exec('rectZoomOut', options);
  }

  close(clear: boolean = false) {
    if (this._subscription) {
      this._subscription.unsubscribe();
      this._subscription = null;
    }
    return this._mouseTool.close(clear);
  }

  private _exec<T>(method: string, opts: any): Promise<T> {
    this._mouseTool[method](opts);
    return new Promise(resolve => {
      this._subscription = this.on('draw')
        .subscribe(({ obj }) => {
          this.close();
          resolve(obj);
        });
    });
  }

}


