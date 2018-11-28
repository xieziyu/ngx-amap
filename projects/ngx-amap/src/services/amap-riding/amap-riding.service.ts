import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AMapClass, Riding } from '../../types/class';
import { RidingOptions, ILngLat } from '../../types/interface';
import { LoggerService } from '../logger/logger.service';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';
import { EventBinder } from '../../utils/event-binder';
import { RidingResult } from '../../types/class/riding/riding-result';

declare const AMap: AMapClass;

/**
 * 骑行路径规划服务
 */
@Injectable()
export class AmapRidingService {
  TAG = 'amap-riding';

  private _plugin: Promise<void>;

  constructor(private logger: LoggerService, private plugins: PluginLoaderService) {
  }

  get loaded(): Promise<void> {
    if (!this._plugin) {
      this._plugin = this.plugins.load('AMap.Riding');
    }

    return this._plugin;
  }

  of(opts?: RidingOptions): Promise<AmapRidingWrapper> {
    return this.loaded.then(() => new AmapRidingWrapper(opts));
  }
}

/**
 * AmapRidingWrapper对象将高德原生的Riding对象提供的方法封装成Promise的实现，更方便回调
 */
export class AmapRidingWrapper extends EventBinder {
  private _riding: Riding;

  constructor(opts?: RidingOptions) {
    super();
    this._riding = new AMap.Riding(opts);
  }

  get native(): Riding {
    return this._riding;
  }

  /**
   * 用于侦听Riding事件，返回可以被subscribe的Observable对象
   * @param event
   * @returns
   */
  on(event: string): Observable<any> {
    return this.bindEvent<Riding>(this._riding, event);
  }

  search(origin: any[], destination?: ILngLat): Promise<{ status: string, result: string | RidingResult }> {
    if (typeof destination !== 'undefined') {
      return new Promise(resolve => this._riding.search(origin, destination, (status, result) => {
        resolve({ status, result });
      }));
    } else {
      return new Promise(resolve => this._riding.search(origin, (status, result) => {
        resolve({ status, result });
      }));
    }
  }

  clear() {
    this._riding.clear();
  }
}
