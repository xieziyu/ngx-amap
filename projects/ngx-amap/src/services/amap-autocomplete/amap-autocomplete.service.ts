import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject, Observable, Subscriber } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AmapPluginLoaderService } from '../../shared/amap-plugin-loader.service';
import { EventBinderService } from '../../shared/event-binder.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { Getter } from '../../base/interfaces';
declare const AMap: any;

const TAG = 'AmapAutocomplete';

export namespace AMapAutocomplete {
  export type DataType = 'all' | 'bus' | 'poi' | 'busline';
  export interface Options {
    /**
     * 输入提示时限定POI类型，多个类型用“|”分隔
     */
    type?: string;
    /**
     * 输入提示时限定城市
     */
    city?: string;
    /**
     * 返回的数据类型
     */
    datatype?: DataType;
    /**
     * 是否强制限制在设置的城市内搜索
     */
    citylimit?: boolean;
    /**
     * 指定输入框
     */
    input?: string | HTMLInputElement;
    /**
     * 指定输出面板
     */
    output?: string | HTMLDivElement;
    /**
     * 是否在input位于页面较下方的时候自动将输入面板显示在input上方以避免被遮挡
     */
    outPutDirAuto?: boolean;
  }
  export interface Tip {
    /**
     * 名称
     */
    name: string;
    /**
     * 所属区域
     */
    district: string;
    /**
     * 区域编码
     */
    adcode: string;
    /**
     * 地址
     */
    address: string;
    /**
     * 城市
     */
    city: any[];
    /**
     * ID
     */
    id: string;
    /**
     * 坐标经纬度
     */
    location: AMap.LngLat;
    /**
     * 类型编码
     */
    typecode: string;
  }
  export interface SearchResult {
    /**
     * 查询状态说明
     */
    info: string;
    /**
     * 输入提示条数
     */
    count: number;
    /**
     * 输入提示列表
     */
    tips: Tip[];
  }
  export type SearchStatus = 'complete' | 'error' | 'no_data';
}

export interface AutocompleteSearchResult {
  status: AMapAutocomplete.SearchStatus;
  result: string | AMapAutocomplete.SearchResult;
}

@Injectable({
  providedIn: 'root',
})
export class AmapAutocompleteService implements Getter<any> {
  private ac: any;
  private ac$ = new ReplaySubject<any>(1);

  constructor(
    private plugin: AmapPluginLoaderService,
    private binder: EventBinderService,
    private logger: LoggerService,
    private ngZone: NgZone,
  ) {}

  /**
   * 获取插件
   */
  get() {
    return this.ac$.asObservable();
  }

  /**
   * 侦听事件
   */
  on(event: string) {
    return this.binder.bindEvent(this.get(), event);
  }

  /**
   * 创建插件
   */
  create(options: AMapAutocomplete.Options) {
    return this.plugin.load('AMap.Autocomplete').pipe(
      map(() => {
        this.ac = this.ngZone.runOutsideAngular(() => new AMap.Autocomplete(options));
        this.logger.d(TAG, 'new autocomplete created.');
        this.ac$.next(this.ac);
        this.ac$.complete();
        return this.ac;
      }),
    );
  }

  /**
   * 搜索
   */
  search(address: string) {
    return this.get().pipe(
      switchMap(
        ac =>
          new Observable((observer: Subscriber<AutocompleteSearchResult>) => {
            ac.search(address, (status, result) => {
              observer.next({ status, result });
              observer.complete();
            });
          }),
      ),
    );
  }
}
