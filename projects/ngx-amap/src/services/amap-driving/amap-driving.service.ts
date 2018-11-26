import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AMapClass, Driving, LngLat } from '../../types/class';
import { DrivingOptions, ILngLat } from '../../types/interface';
import { LoggerService } from '../logger/logger.service';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';
import { EventBinder } from '../../utils/event-binder';
import { DrivingResult } from '../../types/class/driving/driving-result';

declare const AMap: AMapClass;

/**
 * 驾车路线规划服务
 */
@Injectable()
export class AmapDrivingService {
  TAG = 'amap-driving';

  private _plugin: Promise<void>;

  constructor(private logger: LoggerService, private plugins: PluginLoaderService) {
  }

  of(opts?: DrivingOptions): Promise<AmapDrivingWrapper> {
    if (!this._plugin) {
      this._plugin = this.plugins.load('AMap.Driving');
    }

    return this._plugin.then(() => new AmapDrivingWrapper(opts));
  }
}

/**
 * AmapDrivingWrapper对象将高德原生的Driving对象提供的方法封装成Promise的实现，更方便回调
 */
export class AmapDrivingWrapper extends EventBinder {
  private _driving: Driving;

  constructor(opts?: DrivingOptions) {
    super();
    this._driving = new AMap.Driving(opts);
  }

  get native(): Driving {
    return this._driving;
  }

  /**
   * 用于侦听Driving事件，返回可以被subscribe的Observable对象
   * @param event
   * @returns
   */
  on(event: string): Observable<any> {
    return this.bindEvent<Driving>(this._driving, event);
  }

  search(origin: any[], destination?: ILngLat, opts?: any): Promise<{ status: string, result: string | DrivingResult }> {
    if (typeof destination !== 'undefined') {
      return new Promise(resolve => this._driving.search(origin, destination, opts, (status, result) => {
        resolve({ status, result });
      }));
    } else {
      return new Promise(resolve => this._driving.search(origin, (status, result) => {
        resolve({ status, result });
      }));
    }
  }

  setPolicy(policy: any) {
    this._driving.setPolicy(policy);
  }

  setAvoidPolygons(path: ILngLat[]) {
    this._driving.setAvoidPolygons(path);
  }

  setAvoidRoad(road: string) {
    this._driving.setAvoidRoad(road);
  }

  clearAvoidRoad() {
    this._driving.clearAvoidRoad();
  }

  clearAvoidPolygons() {
    this._driving.clearAvoidPolygons();
  }

  clear() {
    this._driving.clear();
  }

  getAvoidPolygons(): LngLat[] {
    return this._driving.getAvoidPolygons();
  }
  getAvoidRoad(): string {
    return this._driving.getAvoidRoad();
  }

  setProvinceAndNumber(province: string, number: string) {
    this._driving.setProvinceAndNumber(province, number);
  }

  searchOnAMAP(obj: any) {
    this._driving.searchOnAMAP(obj);
  }
}
