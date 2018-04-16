import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AMapClass, DistrictSearch } from '../../types/class';
import { DistrictSearchOptions } from '../../types/interface';
import { LoggerService } from '../logger/logger.service';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';
import { EventBinder } from '../../utils/event-binder';
import { DistrictSearchResult } from '../../types/class/district-search/district-search-result';

declare const AMap: AMapClass;

/**
 * 行政区域搜索服务
 */
@Injectable()
export class AmapDistrictSearchService {
  TAG = 'amap-district-search';

  private _plugin: Promise<void>;

  constructor(private logger: LoggerService, private plugins: PluginLoaderService) {
  }

  of(opts?: DistrictSearchOptions): Promise<AmapDistrictSearchWrapper> {
    if (!this._plugin) {
      this._plugin = this.plugins.load('AMap.DistrictSearch');
    }

    return this._plugin.then(() => new AmapDistrictSearchWrapper(opts));
  }
}

/**
 * AmapDistrictSearchWrapper对象将高德原生的DistrictSearch对象提供的方法封装成Promise的实现，更方便回调
 */
export class AmapDistrictSearchWrapper extends EventBinder {
  private _districtSearch: DistrictSearch;

  constructor(opts?: DistrictSearchOptions) {
    super();
    this._districtSearch = new AMap.DistrictSearch(opts);
  }

  get native(): DistrictSearch {
    return this._districtSearch;
  }

  /**
   * 用于侦听DistrictSearch事件，返回可以被subscribe的Observable对象
   * @param {string} event
   * @returns {Observable<any>}
   */
  on(event: string): Observable<any> {
    return this.bindEvent<DistrictSearch>(this._districtSearch, event);
  }

  search(address: string, opts?: DistrictSearchOptions): Promise<{ status: string, result: string | DistrictSearchResult }> {
    return new Promise(resolve => this._districtSearch.search(address, (status, result) => {
      resolve({ status, result });
    }, opts));
  }

  setLevel(level: string) {
    this._districtSearch.setLevel(level);
  }

  setSubdistrict(district: number) {
    this._districtSearch.setSubdistrict(district);
  }
}
