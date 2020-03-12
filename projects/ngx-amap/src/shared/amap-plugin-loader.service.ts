import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoggerService } from './logger/logger.service';
import { AMapLoaderService } from './amap-loader.service';

const TAG = 'PluginLoader';

@Injectable()
export class AmapPluginLoaderService {
  private state = new Map<string, ReplaySubject<void>>();

  constructor(private mapLoader: AMapLoaderService, private logger: LoggerService) {}

  /**
   * 加载一个或多个插件
   */
  load(name: string | string[]): Observable<void> {
    let pKey = '';
    if (Array.isArray(name)) {
      pKey = name.join(',');
    } else {
      pKey = name;
    }
    if (this.state.has(pKey)) {
      return this.state.get(pKey).asObservable();
    }

    this.logger.d(TAG, 'loading plugin:', pKey, '...');
    return this.mapLoader.load().pipe(
      switchMap(() => {
        const loading$ = new ReplaySubject<void>(1);
        AMap.plugin(name, () => {
          this.logger.d(TAG, 'loading plugin:', pKey, 'COMPLETE');
          loading$.next();
          loading$.complete();
        });
        this.state.set(pKey, loading$);
        return loading$.asObservable();
      }),
    );
  }
}
