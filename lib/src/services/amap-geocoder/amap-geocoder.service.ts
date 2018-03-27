import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AMapClass, Geocoder } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { GeocoderOptions, ILngLat } from '../../types/interface';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';
import { EventBinder } from '../../utils/event-binder';

declare const AMap: AMapClass;

/**
 * AmapGeocoderWrapper对象将高德原生的Geocoder对象提供的方法封装成Promise的实现，更方便回调
 */
export class AmapGeocoderWrapper extends EventBinder {
  private _geocoder: Geocoder;

  constructor(opts?: GeocoderOptions) {
    super();
    this._geocoder = new AMap.Geocoder(opts);
  }

  get native(): Geocoder {
    return this._geocoder;
  }

  /**
   * 用于侦听Geocoder事件，返回可以被subscribe的Observable对象
   * @param {string} event
   * @returns {Observable<any>}
   */
  on(event: string): Observable<any> {
    return this.bindEvent<Geocoder>(this._geocoder, event);
  }

  getLocation(address: string): Promise<{status: string, result: any}> {
    return new Promise(resolve => this._geocoder.getLocation(address, (status, result) => {
      resolve({status, result});
    }));
  }

  setCity(city: string): void {
    this._geocoder.setCity(city);
  }

  getAddress(location: ILngLat|ILngLat[]): Promise<{status: string, result: any}> {
    return new Promise(resolve => this._geocoder.getAddress(location, (status, result) => {
      resolve({status, result});
    }));
  }
}

/**
 * 地理编码与逆地理编码服务，用于地址描述与坐标之间的转换。
 * 使用'of()'方法可以得到Promise<AmapGeocoderWrapper>对象。
 *
 * @example
 * // 引入service和wrapper类型声明
 * import { AmapGeocoderService, AmapGeocoderWrapper } from 'ngx-amap';
 *
 * // 定义wrapper的缓存：
 * private geoPromise: Promise<AmapGeocoderWrapper>;
 *
 * // 使用service构造wrapper对象
 * constructor(private AmapGeocoder: AmapGeocoderService) {
 *   // 使用 AmapGeocoderService 创建 promise wrapper
 *   this.geoPromise = AmapGeocoder.of({
 *     city: "010", //城市，默认：“全国”
 *     radius: 1000 //范围，默认：500
 *   });
 * }
 *
 * // 使用AMap.Geocoder的wrapper对象
 * this.geoPromise.then(geocoder => geocoder.getLocation(this.address))
 *   .then(data => {
 *     console.log('get location of address:', this.address);
 *     console.log('status:', data.status);
 *     console.log('result:', data.result);
 *
 *     if (data.status === 'complete' && data.result.info === 'OK') {
 *       console.log(data.result.geocodes[0].location);
 *       console.log(data.result.geocodes[0].formattedAddress);
 *     }
 *  });
 */
@Injectable()
export class AmapGeocoderService {
  TAG = 'amap-geocoder';

  private _plugin: Promise<void>;

  constructor(private logger: LoggerService, private plugins: PluginLoaderService) {}

  of(opts?: GeocoderOptions): Promise<AmapGeocoderWrapper> {
    if (!this._plugin) {
      this._plugin = this.plugins.load('AMap.Geocoder');
    }

    return this._plugin.then(() => new AmapGeocoderWrapper(opts));
  }
}

