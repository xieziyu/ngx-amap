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
import { AmapCircleService } from './amap-circle.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { EventBinderService } from '../../shared/event-binder.service';
import { getOptions, ChangeFilter } from '../../utils';

const TAG = 'amap-circle';

@Directive({
  selector: 'amap-circle',
  exportAs: 'circle',
  providers: [AmapCircleService],
})
export class AmapCircleDirective extends AMapCircle<AMap.Circle> implements OnChanges, OnDestroy {
  // editor events:
  @Output() naEditorAddNode: EventEmitter<any>;
  @Output() naEditorRemoveNode: EventEmitter<any>;
  @Output() naEditorAdjust: EventEmitter<any>;
  @Output() naEditorEnd: EventEmitter<any>;

  private inited = false;

  constructor(
    protected os: AmapCircleService,
    protected binder: EventBinderService,
    private logger: LoggerService,
    private ngZone: NgZone,
  ) {
    super(os, binder);
    const editor = this.os.getEditor();
    this.naEditorAddNode = this.binder.bindEvent(editor, 'addnode');
    this.naEditorRemoveNode = this.binder.bindEvent(editor, 'removenode');
    this.naEditorAdjust = this.binder.bindEvent(editor, 'adjust');
    this.naEditorEnd = this.binder.bindEvent(editor, 'end');
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
        this.logger.d(TAG, 'circle is ready.');
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
    filter.has<boolean>('editor').subscribe(v => this.os.toggleEditor(v));
  }

  /**
   * 获取已创建的 AMap.Circle 对象
   */
  get() {
    return this.os.get();
  }
}
