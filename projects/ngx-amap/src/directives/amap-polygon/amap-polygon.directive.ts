import { Directive, OnDestroy, SimpleChanges, OnChanges, NgZone } from '@angular/core';
import { zip } from 'rxjs';
import { AMapPolygon, PolygonOptions } from '../../base/amap-polygon';
import { AmapPolygonService } from './amap-polygon.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { EventBinderService } from '../../shared/event-binder.service';
import { getOptions, ChangeFilter } from '../../utils';

const TAG = 'amap-polygon';

@Directive({
  selector: 'amap-polygon',
  exportAs: 'polygon',
  providers: [AmapPolygonService],
})
export class AmapPolygonDirective extends AMapPolygon<AMap.Polygon, AMap.PolyEditor>
  implements OnChanges, OnDestroy {
  private inited = false;

  constructor(
    protected os: AmapPolygonService,
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
    const polygon = this.get();
    if (!this.inited) {
      this.logger.d(TAG, 'initializing ...');
      const options = this.options || getOptions<AMap.Polygon.Options>(this, PolygonOptions);
      this.logger.d(TAG, 'options:', options);
      this.os.create(options).subscribe(m => {
        this.ngZone.run(() => this.naReady.emit(m));
        this.logger.d(TAG, 'polygon is ready.');
      });
      this.inited = true;
    } else {
      zip(filter.has<AMap.LocationValue[] | AMap.LocationValue[][]>('path'), polygon).subscribe(
        ([v, p]) => p.setPath(v),
      );
      zip(filter.has<AMap.Polygon.Options>('options'), polygon).subscribe(([v, p]) =>
        p.setOptions(v || {}),
      );
      zip(filter.has<any>('extData'), polygon).subscribe(([v, p]) => p.setExtData(v));
    }

    zip(filter.has<boolean>('hidden'), polygon).subscribe(([v, p]) => (v ? p.hide() : p.show()));
    filter.has<boolean>('editor').subscribe(v => this.os.toggleEditor(v));
  }

  /**
   * 获取已创建的 AMap.Polygon 对象
   */
  get() {
    return this.os.get();
  }
}
