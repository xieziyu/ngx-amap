import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { LoggerService } from './logger/logger.service';
import { AMapLoaderService } from './amap-loader.service';

declare const AMapUI: any;
const TAG = 'AMapUILoader';

@Injectable()
export class AmapUILoaderService {
  private state = new Map<string, ReplaySubject<any>>();

  constructor(private amap: AMapLoaderService, private logger: LoggerService) {}

  load(name: string | string[]): Observable<any> {
    let pKey = '';
    if (Array.isArray(name)) {
      pKey = name.join(',');
    } else {
      pKey = name;
    }
    if (this.state.has(pKey)) {
      return this.state.get(pKey).asObservable();
    }

    this.logger.d(TAG, 'loading ui:', pKey, '...');
    const loading$ = new ReplaySubject(1);
    this.amap.load().subscribe({
      next: () => {
        this.amap.loadUI().subscribe({
          next: () => {
            AMapUI.loadUI(Array.isArray(name) ? name : [name], u => {
              this.logger.d(TAG, 'loading ui:', pKey, 'COMPLETE');
              loading$.next(u);
              loading$.complete();
            });
            this.state.set(pKey, loading$);
          },
        });
      },
    });
    return loading$.asObservable();
  }
}
