import { Injectable, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PolylineWrapperService } from '../polyline-wrapper/polyline-wrapper.service';
import { KeyMap } from '../../../utils/key-map';
import * as AMapType from '../../../interfaces/amap.interface';
import { AMapClass } from '../../../interfaces/amap.interface';
import { PolylineOptions } from '../../../interfaces/amap.polyline-options';
import { OptionsChangeDetectorService } from '../../options-change-detector/options-change-detector.service';

declare const AMap: AMapClass;

@Injectable()
export class PolylineManagerService {
  private _polylines = new KeyMap<Promise<AMapType.Polyline>>();
  private _freeID = 0;

  constructor(private wrapper: PolylineWrapperService, private detector: OptionsChangeDetectorService) { }

  getPolyline(id: string): Promise<AMapType.Polyline> {
    return this._polylines.get(id);
  }

  addPolyline(PolylineOptions: PolylineOptions): string {
    const promise = this.wrapper.createPolyline(PolylineOptions);
    const id = this._getFreeID();
    this._polylines.set(id, promise);
    return id;
  }

  deletePolyline(id: string): Promise<void> {
    const promise = this._polylines.get(id);
    if (!promise) {
      return Promise.resolve();
    }

    return promise.then(m => {
      m.setMap(null);
      this._polylines.delete(id);
    });
  }

  private _getFreeID(): string {
    return (++this._freeID).toString();
  }

  onOptionChange(id: string, changes: SimpleChanges) {
    const promise = this._polylines.get(id);

    if (promise) {
      this.detector.scan<number[][]>(changes, 'path').subscribe(path => {
        promise.then(polyline => polyline.setPath(path.value));
      });

      this.detector.scan<any>(changes, 'extData').subscribe(extData => {
        promise.then(polyline => polyline.setExtData(extData.value));
      });

      // This should always be the last one:
      this.detector.scan<PolylineOptions>(changes, 'options').subscribe(options => {
        promise.then(polyline => polyline.setOptions(options.value));
      });
    }
  }

  onExtraPropertyChange(id: string, changes: SimpleChanges) {
    const promise = this._polylines.get(id);

    if (promise) {
      this.detector.scan(changes, 'hidden').subscribe(hidden => {
        if (hidden.value) {
          promise.then(polyline => polyline.hide());
        } else {
          promise.then(polyline => polyline.show());
        }
      });
    }
  }

  observeEvent(id: string, event: string): Observable<any> {
    return Observable.create(observer => {
      const promise = this._polylines.get(id);

      if (promise) {
        let listenerPromise = promise.then(polyline => {
          return AMap.event.addListener(polyline, event, (e) => {
            observer.next(e);
          }, this);
        });

        return () => {
          listenerPromise.then(listener => {
            AMap.event.removeListener(listener);
            listenerPromise = null;
          });
        };
      }
    });
  }

  getPath(id: string): Promise<number[][]> {
    const promise = this._polylines.get(id);
    if (promise) {
      return promise.then(polyline => polyline.getPath());
    } else {
      return Promise.resolve(undefined);
    }
  }

  getOptions(id: string): Promise<PolylineOptions> {
    const promise = this._polylines.get(id);
    if (promise) {
      return promise.then(polyline => polyline.getOptions());
    } else {
      return Promise.resolve(undefined);
    }
  }

  getLength(id: string): Promise<number> {
    const promise = this._polylines.get(id);
    if (promise) {
      return promise.then(polyline => polyline.getLength());
    } else {
      return Promise.resolve(undefined);
    }
  }

  // TODO: Bounds
  getBounds(id: string): Promise<any> {
    const promise = this._polylines.get(id);
    if (promise) {
      return promise.then(polyline => polyline.getBounds());
    } else {
      return Promise.resolve(undefined);
    }
  }

  getExtData(id: string): Promise<any> {
    const promise = this._polylines.get(id);
    if (promise) {
      return promise.then(polyline => polyline.getExtData());
    } else {
      return Promise.resolve(undefined);
    }
  }
}
