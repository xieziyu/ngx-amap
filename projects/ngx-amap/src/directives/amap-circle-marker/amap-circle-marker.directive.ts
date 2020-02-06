import {
  Output,
  EventEmitter,
  Directive,
  OnDestroy,
  SimpleChanges,
  OnChanges,
  NgZone,
} from '@angular/core';
import { zip } from 'rxjs';
import { AMapCircle, CircleOptions } from '../../base/amap-circle';
import { AmapCircleMarkerService } from './amap-circle-marker.service';
import { LoggerService } from '../../shared/logger';
import { EventBinderService } from '../../shared/event-binder.service';
import { getOptions, ChangeFilter } from '../../utils';

const TAG = 'amap-circle-marker';

@Directive({
  selector: 'amap-circle-marker',
  exportAs: 'circle-marker',
  providers: [AmapCircleMarkerService],
})
export class AmapCircleMarkerDirective extends AMapCircle<AMap.CircleMarker>
  implements OnChanges, OnDestroy {
  private inited = false;

  constructor(
    protected os: AmapCircleMarkerService,
    protected binder: EventBinderService,
    private logger: LoggerService,
    private ngZone: NgZone,
  ) {
    super(os, binder);
  }

  ngOnDestroy() {
    this.os.destroy();
  }

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);
    const circle = this.get();
    if (!this.inited) {
      this.logger.d(TAG, 'initializing ...');
      const options = this.options || getOptions<AMap.Circle.Options>(this, CircleOptions);
      this.logger.d(TAG, 'options:', options);
      this.os.create(options).subscribe(m => {
        this.ngZone.run(() => this.naReady.emit(m));
        this.logger.d(TAG, 'circle marker is ready.');
      });
      this.inited = true;
    } else {
      zip(filter.has<AMap.LocationValue>('center'), circle).subscribe(([v, p]) => p.setCenter(v));
      zip(filter.has<AMap.Circle.Options>('options'), circle).subscribe(([v, p]) =>
        p.setOptions(v || {}),
      );
      zip(filter.has<number>('radius'), circle).subscribe(([v, p]) => p.setRadius(v));
      zip(filter.has<any>('extData'), circle).subscribe(([v, p]) => p.setExtData(v));
    }

    zip(filter.has<boolean>('hidden'), circle).subscribe(([v, p]) => (v ? p.hide() : p.show()));
  }

  /**
   * 获取已创建的 AMap.CircleMarker 对象
   */
  get() {
    return this.os.get();
  }
}
