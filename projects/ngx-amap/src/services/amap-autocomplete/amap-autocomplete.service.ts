import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject, Observable, Subscriber } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AmapPluginLoaderService } from '../../shared/amap-plugin-loader.service';
import { EventBinderService } from '../../shared/event-binder.service';
import { LoggerService } from '../../shared/logger';
import { Getter } from '../../base/interfaces';

const TAG = 'AmapAutocomplete';

export interface SearchResult {
  status: AMap.Autocomplete.SearchStatus;
  result: string | AMap.Autocomplete.SearchResult;
}

@Injectable({
  providedIn: 'root',
})
export class AmapAutocompleteService implements Getter<AMap.Autocomplete> {
  private ac: AMap.Autocomplete;
  private ac$ = new ReplaySubject<AMap.Autocomplete>(1);

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
  create(options: AMap.Autocomplete.Options) {
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
          new Observable((observer: Subscriber<SearchResult>) => {
            ac.search(address, (status, result) => {
              observer.next({ status, result });
              observer.complete();
            });
          }),
      ),
    );
  }
}
