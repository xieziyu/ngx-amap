import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AMapClass, Transfer } from '../../types/class';
import { TransferOptions, ILngLat } from '../../types/interface';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';
import { EventBinder } from '../../utils/event-binder';
import { TransferResult } from '../../types/class/transfer/transfer-result';

declare const AMap: AMapClass;

/**
 * 公交换乘路径规划服务
 */
@Injectable()
export class AmapTransferService {
  TAG = 'amap-transfer';

  private _plugin: Promise<void>;

  constructor(private plugins: PluginLoaderService) {
  }

  get loaded(): Promise<void> {
    if (!this._plugin) {
      this._plugin = this.plugins.load('AMap.Transfer');
    }

    return this._plugin;
  }

  of(opts?: TransferOptions): Promise<AmapTransferWrapper> {
    return this.loaded.then(() => new AmapTransferWrapper(opts));
  }
}

/**
 * AmapTransferWrapper对象将高德原生的Transfer对象提供的方法封装成Promise的实现，更方便回调
 */
export class AmapTransferWrapper extends EventBinder {
  private _transfer: Transfer;

  constructor(opts?: TransferOptions) {
    super();
    this._transfer = new AMap.Transfer(opts);
  }

  get native(): Transfer {
    return this._transfer;
  }

  /**
   * 用于侦听Transfer事件，返回可以被subscribe的Observable对象
   * @param event
   * @returns
   */
  on(event: string): Observable<any> {
    return this.bindEvent<Transfer>(this._transfer, event);
  }

  search(origin: any[], destination?: ILngLat): Promise<{ status: string, result: string | TransferResult }> {
    if (typeof destination !== 'undefined') {
      return new Promise(resolve => this._transfer.search(origin, destination, (status, result) => {
        resolve({ status, result });
      }));
    } else {
      return new Promise(resolve => this._transfer.search(origin, (status, result) => {
        resolve({ status, result });
      }));
    }
  }

  setPolicy(policy: any) {
    this._transfer.setPolicy(policy);
  }

  setCity(city: string) {
    this._transfer.setCity(city);
  }

  setCityd(city: string) {
    this._transfer.setCityd(city);
  }

  leaveAt(time: string, data: string) {
    this._transfer.leaveAt(time, data);
  }

  clear() {
    this._transfer.clear();
  }

  searchOnAMAP(obj: any) {
    this._transfer.searchOnAMAP(obj);
  }
}
