import { Observable } from 'rxjs/Observable';
import { AMapClass } from '../types/class';
declare const AMap: AMapClass;

export class EventBinder {

  bindEvent<T>(target: Promise<T>, event: string): Observable<any> {
    return Observable.create(observer => {
      let listenerPromise = target.then(m => {
        return AMap.event.addListener(m, event, e => {
          setTimeout(() => observer.next(e));
        }, this);
      });

      return () => {
        listenerPromise.then(listener => {
          AMap.event.removeListener(listener);
          listenerPromise = null;
        });
      };
    });
  }

}

export class RawEventBinder {
  bindEvent<T>(target: T, event: string): Observable<any> {
    return Observable.create(observer => {
      let listener = AMap.event.addListener(target, event, e => {
          setTimeout(() => observer.next(e));
      }, this);

      return () => {
        AMap.event.removeListener(listener);
        listener = null;
      };
    });
  }
}
