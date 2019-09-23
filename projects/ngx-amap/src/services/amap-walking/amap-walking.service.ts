import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AMapClass, Walking } from '../../types/class';
import { WalkingOptions, ILngLat } from '../../types/interface';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';
import { EventBinder } from '../../utils/event-binder';
import { WalkingResult } from '../../types/class/walking/walking-result';

declare const AMap: AMapClass;

/**
 * 步行路径规划服务
 */
@Injectable()
export class AmapWalkingService {
  TAG = 'amap-walking';

  private _plugin: Promise<void>;

  constructor(private plugins: PluginLoaderService) {
  }

  get loaded(): Promise<void> {
    if (!this._plugin) {
      this._plugin = this.plugins.load('AMap.Walking');
    }

    return this._plugin;
  }

  of(opts?: WalkingOptions): Promise<AmapWalkingWrapper> {
    return this.loaded.then(() => new AmapWalkingWrapper(opts));
  }
}

/**
 * AmapWalkingWrapper对象将高德原生的Walking对象提供的方法封装成Promise的实现，更方便回调
 */
export class AmapWalkingWrapper extends EventBinder {
  private _walking: Walking;

  constructor(opts?: WalkingOptions) {
    super();
    this._walking = new AMap.Walking(opts);
  }

  get native(): Walking {
    return this._walking;
  }

  /**
   * 用于侦听Walking事件，返回可以被subscribe的Observable对象
   * @param event
   * @returns
   */
  on(event: string): Observable<any> {
    return this.bindEvent<Walking>(this._walking, event);
  }

  search(origin: any[], destination?: ILngLat): Promise<{ status: string, result: string | WalkingResult }> {
    if (typeof destination !== 'undefined') {
      return new Promise(resolve => this._walking.search(origin, destination, (status, result) => {
        resolve({ status, result });
      }));
    } else {
      return new Promise(resolve => this._walking.search(origin, (status, result) => {
        resolve({ status, result });
      }));
    }
  }

  clear() {
    this._walking.clear();
  }

  searchOnAMAP(obj: any) {
    this._walking.searchOnAMAP(obj);
  }
}
