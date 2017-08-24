import { Injectable, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';

export interface IDetectedChange<T> {
  changed: boolean;
  value: T;
  isFirstChange: boolean;
}

@Injectable()
export class OptionsChangeDetectorService {

  scan<T>(changes: SimpleChanges, key: string): Observable<IDetectedChange<T>> {
    const valueChange = changes[key];
    const result: IDetectedChange<T> = {
      changed: false,
      value: undefined,
      isFirstChange: false
    };

    if (valueChange !== undefined) {
      result.changed = true;
      result.value = valueChange.currentValue;
      result.isFirstChange = valueChange.isFirstChange();
      return Observable.of(result);
    }

    return Observable.empty();
  }

  scanList(changes: SimpleChanges, keys: string[]): Observable<{ [key: string]: IDetectedChange<any> }> {
    let oneChanged = false;
    const results: { [key: string]: IDetectedChange<any> } = {};

    // tslint:disable-next-line:prefer-const
    for (let key of keys) {
      const valueChange = changes[key];
      const result: IDetectedChange<any> = {
        changed: false,
        value: undefined,
        isFirstChange: false
      };

      if (valueChange !== undefined) {
        result.changed = true;
        result.value = valueChange.currentValue;
        result.isFirstChange = valueChange.isFirstChange();
        oneChanged = true;
      }

      results[key] = result;
    }

    if (oneChanged) {
      return Observable.of(results);
    } else {
      return Observable.empty();
    }
  }
}
