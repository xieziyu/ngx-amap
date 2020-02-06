import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AMapService } from '../../shared/amap.service';
import { LoggerService } from '../../shared/logger';
import { Getter } from '../../base/interfaces';

const TAG = 'AmapText';

@Injectable()
export class AmapTextService implements Getter<AMap.Text> {
  private text: AMap.Text;
  private text$ = new ReplaySubject<AMap.Text>(1);

  constructor(private amaps: AMapService, private logger: LoggerService, private ngZone: NgZone) {}

  /**
   * 获取点标记
   */
  get() {
    return this.text$.asObservable();
  }

  /**
   * 创建点标记 AMap.Text
   * @param options 选项
   * @param addToMap 是否直接加进地图
   */
  create(options: AMap.Text.Options, addToMap = true) {
    return this.amaps.get().pipe(
      map(m => {
        if (addToMap) {
          options.map = m;
        }
        this.text = this.ngZone.runOutsideAngular(() => new AMap.Text(options));
        this.logger.d(TAG, 'new text created.');
        this.text$.next(this.text);
        this.text$.complete();
        return this.text;
      }),
    );
  }

  /**
   * 销毁点标记
   */
  destroy() {
    this.get().subscribe(m => {
      m.setMap(null);
      this.logger.d(TAG, 'text destroyed.');
      this.text = null;
    });
  }
}
