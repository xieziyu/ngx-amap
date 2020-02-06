import { Input, Directive, OnDestroy, SimpleChanges, OnChanges, NgZone } from '@angular/core';
import { zip } from 'rxjs';
import { AMapPolygon, PolygonOptions } from '../../base/amap-polygon';
import { AmapEllipseService } from './amap-ellipse.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { EventBinderService } from '../../shared/event-binder.service';
import { getOptions, ChangeFilter } from '../../utils';

const TAG = 'amap-ellipse';
const EllipseOptions = [...PolygonOptions, 'center', 'radius'];

@Directive({
  selector: 'amap-ellipse',
  exportAs: 'ellipse',
  providers: [AmapEllipseService],
})
export class AmapEllipseDirective extends AMapPolygon<AMap.Ellipse, AMap.EllipseEditor>
  implements OnChanges, OnDestroy {
  // ---- Options ----
  /**
   * 椭圆的中心
   */
  @Input() center: AMap.LocationValue;
  /**
   * 椭圆半径
   */
  @Input() radius: [number, number];
  /**
   * 额外: 会覆盖其他属性的配置方式
   */
  @Input() options: AMap.Ellipse.Options;

  private inited = false;

  constructor(
    protected os: AmapEllipseService,
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
    const ellipse = this.get();
    if (!this.inited) {
      this.logger.d(TAG, 'initializing ...');
      const options = this.options || getOptions<AMap.Ellipse.Options>(this, EllipseOptions);
      this.logger.d(TAG, 'options:', options);
      this.os.create(options).subscribe(m => {
        this.ngZone.run(() => this.naReady.emit(m));
        this.logger.d(TAG, 'ellipse is ready.');
      });
      this.inited = true;
    } else {
      zip(filter.has<AMap.LocationValue>('center'), ellipse).subscribe(([v, p]) => p.setCenter(v));
      zip(filter.has<AMap.Ellipse.Options>('options'), ellipse).subscribe(([v, p]) =>
        p.setOptions(v || {}),
      );
      zip(filter.has<any>('extData'), ellipse).subscribe(([v, p]) => p.setExtData(v));
    }

    zip(filter.has<boolean>('hidden'), ellipse).subscribe(([v, p]) => (v ? p.hide() : p.show()));
    filter.has<boolean>('editor').subscribe(v => this.os.toggleEditor(v));
  }

  /**
   * 获取已创建的 AMap.Ellipse 对象
   */
  get() {
    return this.os.get();
  }
}
