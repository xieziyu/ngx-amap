import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AMapClass, PlaceSearch, Bounds, Polygon } from '../../types/class';
import { PlaceSearchOptions, ILngLat } from '../../types/interface';
import { LoggerService } from '../logger/logger.service';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';
import { EventBinder } from '../../utils/event-binder';

declare const AMap: AMapClass;

/**
 * 地点搜索服务，提供某一特定地区的位置查询服务
 */
@Injectable()
export class AmapPlaceSearchService {
  TAG = 'amap-place-search';

  private _plugin: Promise<void>;

  constructor(private logger: LoggerService, private plugins: PluginLoaderService) {}

  of(opts?: PlaceSearchOptions): Promise<AmapPlaceSearchWrapper> {
    if (!this._plugin) {
      this._plugin = this.plugins.load('AMap.PlaceSearch');
    }

    return this._plugin.then(() => new AmapPlaceSearchWrapper(opts));
  }
}

/**
 * AmapPlaceSearchWrapper对象将高德原生的PlaceSearch对象提供的方法封装成Promise的实现，更方便回调
 */
export class AmapPlaceSearchWrapper extends EventBinder {
  private _placeSearch: PlaceSearch;

  constructor(opts?: PlaceSearchOptions) {
    super();
    this._placeSearch = new AMap.PlaceSearch(opts);
  }

  get native(): PlaceSearch {
    return this._placeSearch;
  }

  /**
   * 用于侦听PlaceSearch事件，返回可以被subscribe的Observable对象
   * @param event
   * @returns
   */
  on(event: string): Observable<any> {
    return this.bindEvent<PlaceSearch>(this._placeSearch, event);
  }

  search(address: string): Promise<{status: string, result: any}> {
    return new Promise(resolve => this._placeSearch.search(address, (status, result) => {
      resolve({status, result});
    }));
  }

  searchNearBy(keyword: string, center: ILngLat, radius: number): Promise<{status: string, result: any}> {
    return new Promise(resolve => this._placeSearch.searchNearBy(keyword, center, radius, (status, result) => {
      resolve({status, result});
    }));
  }

  searchInBounds(keyword: string, bounds: Bounds|Polygon): Promise<{status: string, result: any}> {
    return new Promise(resolve => this._placeSearch.searchInBounds(keyword, bounds, (status, result) => {
      resolve({status, result});
    }));
  }

  getDetails(POIID: string): Promise<{status: string, result: any}> {
    return new Promise(resolve => this._placeSearch.getDetails(POIID, (status, result) => {
      resolve({status, result});
    }));
  }

  setPageIndex(pageIndex: number) {
    this._placeSearch.setPageIndex(pageIndex);
  }

  setPageSize(pageSize: number) {
    this._placeSearch.setPageSize(pageSize);
  }

  setLang(lang: string) {
    this._placeSearch.setLang(lang);
  }

  getLang() {
    return this._placeSearch.getLang();
  }

  clear() {
    this._placeSearch.clear();
  }

  poiOnAMAP(obj: any) {
    this._placeSearch.poiOnAMAP(obj);
  }

  setCity(city: string) {
    this._placeSearch.setCity(city);
  }

  setType(type: string) {
    this._placeSearch.setType(type);
  }

  setCityLimit(limit: boolean) {
    this._placeSearch.setCityLimit(limit);
  }

  detailOnAMAP(obj: any) {
    this._placeSearch.poiOnAMAP(obj);
  }
}
