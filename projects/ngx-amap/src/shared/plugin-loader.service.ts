import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoggerService } from './logger/logger.service';
import { AMapService } from './amap.service';

const TAG = 'PluginLoader';

@Injectable()
export class PluginLoaderService {
  private state = new Map<string, ReplaySubject<void>>();

  constructor(private amap: AMapService, private logger: LoggerService) {}

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
    return this.amap.get().pipe(
      switchMap(m => {
        const loading$ = new ReplaySubject<void>(1);
        m.plugin(name, () => {
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
