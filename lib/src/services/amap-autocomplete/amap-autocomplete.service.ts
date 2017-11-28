import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AMapClass, Autocomplete } from '../../types/class';
import { AutocompleteOptions } from '../../types/interface';
import { LoggerService } from '../logger/logger.service';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';
import { RawEventBinder } from '../../utils/event-binder';

declare const AMap: AMapClass;

/**
 * 根据输入关键字提示匹配信息，可将Poi类型和城市作为输入提示的限制条件
 */
@Injectable()
export class AmapAutocompleteService {
  TAG = 'amap-autocomplete';

  private _plugin: Promise<void>;

  constructor(private logger: LoggerService, private plugins: PluginLoaderService) {}

  of(opts?: AutocompleteOptions): Promise<AmapAutocompleteWrapper> {
    if (!this._plugin) {
      this._plugin = this.plugins.load('AMap.Autocomplete');
    }

    return this._plugin.then(() => new AmapAutocompleteWrapper(opts));
  }
}

/**
 * AmapAutocompleteWrapper对象将高德原生的Autocomplete对象提供的方法封装成Promise的实现，更方便回调
 */
export class AmapAutocompleteWrapper extends RawEventBinder {
  private _autocomplete: Autocomplete;

  constructor(opts?: AutocompleteOptions) {
    super();
    this._autocomplete = new AMap.Autocomplete(opts);
  }

  get native(): Autocomplete {
    return this._autocomplete;
  }

  /**
   * 用于侦听Autocomplete事件，返回可以被subscribe的Observable对象
   * @param {string} event
   * @returns {Observable<any>}
   */
  on(event: string): Observable<any> {
    return this.bindEvent<Autocomplete>(this._autocomplete, event);
  }

  search(address: string): Promise<{status: string, result: any}> {
    return new Promise(resolve => this._autocomplete.search(address, (status, result) => {
      resolve({status, result});
    }));
  }

  setCity(city: string) {
    this._autocomplete.setCity(city);
  }

  setType(type: string) {
    this._autocomplete.setType(type);
  }

  setCityLimit(limit: boolean) {
    this._autocomplete.setCityLimit(limit);
  }
}
