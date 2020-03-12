import { Injectable, NgZone, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoggerService } from './logger/logger.service';

const TAG = 'EventBinder';

@Injectable()
export class EventBinderService {
  constructor(private logger: LoggerService, private ngZone: NgZone) {}

  /**
   * 注册事件
   * @param eventName 事件名
   */
  bindEvent<T extends AMap.EventEmitter>(
    target: Observable<T>,
    eventName: string,
  ): EventEmitter<any> {
    return target.pipe(
      switchMap(
        (t: T) =>
          new Observable(observer => {
            let handler = AMap.event.addListener(
              t,
              eventName,
              e => {
                this.ngZone.run(() => observer.next(e));
              },
              this,
            );
            this.logger.d(TAG, `subscribed event: ${eventName}`);
            return () => {
              AMap.event.removeListener(handler);
              this.logger.d(TAG, `unsubscribed event: ${eventName}`);
              eventName = null;
              handler = null;
            };
          }),
      ),
    ) as EventEmitter<any>;
  }
}
