import { Input, Directive, OnDestroy, SimpleChanges, OnChanges, NgZone } from '@angular/core';
import { zip } from 'rxjs';
import { AMapPolygon, PolygonOptions } from '../../base/amap-polygon';
import { AmapRectangleService } from './amap-rectangle.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { EventBinderService } from '../../shared/event-binder.service';
import { getOptions, ChangeFilter } from '../../utils';

const TAG = 'amap-rectangle';
const RectangleOptions = [...PolygonOptions, 'bounds'];

@Directive({
  selector: 'amap-rectangle',
  exportAs: 'rectangle',
  providers: [AmapRectangleService],
})
export class AmapRectangleDirective extends AMapPolygon<AMap.Rectangle, AMap.RectangleEditor>
  implements OnChanges, OnDestroy {
  // ---- Options ----
  /**
   * 矩形的范围
   */
  @Input() bounds?: AMap.Bounds;
  /**
   * 额外: 会覆盖其他属性的配置方式
   */
  @Input() options: AMap.Rectangle.Options;

  private inited = false;

  constructor(
    protected os: AmapRectangleService,
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
    const rectangle = this.get();
    if (!this.inited) {
      this.logger.d(TAG, 'initializing ...');
      const options = this.options || getOptions<AMap.Rectangle.Options>(this, RectangleOptions);
      this.logger.d(TAG, 'options:', options);
      this.os.create(options).subscribe(m => {
        this.ngZone.run(() => this.naReady.emit(m));
        this.logger.d(TAG, 'rectangle is ready.');
      });
      this.inited = true;
    } else {
      zip(
        filter.has<AMap.LocationValue[] | AMap.LocationValue[][]>('path'),
        rectangle,
      ).subscribe(([v, p]) => p.setPath(v));
      zip(filter.has<AMap.Rectangle.Options>('options'), rectangle).subscribe(([v, p]) =>
        p.setOptions(v || {}),
      );
      zip(filter.has<AMap.Bounds>('bounds'), rectangle).subscribe(([v, p]) => p.setBounds(v));
      zip(filter.has<any>('extData'), rectangle).subscribe(([v, p]) => p.setExtData(v));
    }

    zip(filter.has<boolean>('hidden'), rectangle).subscribe(([v, p]) => (v ? p.hide() : p.show()));
    filter.has<boolean>('editor').subscribe(v => this.os.toggleEditor(v));
  }

  /**
   * 获取已创建的 AMap.Rectangle 对象
   */
  get() {
    return this.os.get();
  }
}
