import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AMapClass, TruckDriving } from '../../types/class';
import { TruckDrivingOptions } from '../../types/interface';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';
import { EventBinder } from '../../utils/event-binder';
import { DrivingResult } from '../../types/class/driving/driving-result';

declare const AMap: AMapClass;

/**
 * 货车路线规划服务
 */
@Injectable()
export class AmapTruckDrivingService {
  TAG = 'amap-truck-driving';

  private _plugin: Promise<void>;

  constructor(private plugins: PluginLoaderService) {
  }

  get loaded(): Promise<void> {
    if (!this._plugin) {
      this._plugin = this.plugins.load('AMap.TruckDriving');
    }

    return this._plugin;
  }

  of(opts?: TruckDrivingOptions): Promise<AmapTruckDrivingWrapper> {
    return this.loaded.then(() => new AmapTruckDrivingWrapper(opts));
  }
}

/**
 * AmapTruckDrivingWrapper对象将高德原生的TruckDriving对象提供的方法封装成Promise的实现，更方便回调
 */
export class AmapTruckDrivingWrapper extends EventBinder {
  private _driving: TruckDriving;

  constructor(opts?: TruckDrivingOptions) {
    super();
    this._driving = new AMap.TruckDriving(opts);
  }

  get native(): TruckDriving {
    return this._driving;
  }

  /**
   * 用于侦听TruckDriving事件，返回可以被subscribe的Observable对象
   * @param event
   * @returns
   */
  on(event: string): Observable<any> {
    return this.bindEvent<TruckDriving>(this._driving, event);
  }

  search(path: any[]): Promise<{ status: string, result: string | DrivingResult }> {
    return new Promise(resolve => this._driving.search(path, (status, result) => {
      resolve({ status, result });
    }));
  }

  clear() {
    this._driving.clear();
  }

  setProvinceAndNumber(province: string, number: string) {
    this._driving.setProvinceAndNumber(province, number);
  }
}
