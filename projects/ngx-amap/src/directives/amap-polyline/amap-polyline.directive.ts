import {
  Directive,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  NgZone,
} from '@angular/core';
import { zip } from 'rxjs';
import { PathOverlayOptions, AMapPathOverlay } from '../../base/amap-path-overlay';
import { AmapPolylineService } from './amap-polyline.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { EventBinderService } from '../../shared/event-binder.service';
import { getOptions, ChangeFilter } from '../../utils';

const TAG = 'amap-polyline';
const PolylineOptions = [
  ...PathOverlayOptions,
  'isOutline',
  'outlineColor',
  'geodesic',
  'dirColor',
  'borderWeight',
  'showDir',
  'path',
];

@Directive({
  selector: 'amap-polyline',
  exportAs: 'polyline',
  providers: [AmapPolylineService],
})
export class AmapPolylineDirective extends AMapPathOverlay<AMap.Polyline>
  implements OnChanges, OnDestroy {
  // ---- Options ----
  /**
   * 线条是否带描边
   */
  @Input() isOutline: boolean;
  /**
   * 线条描边颜色
   */
  @Input() outlineColor: string;
  /**
   * 是否绘制成大地线
   */
  @Input() geodesic: boolean;
  /**
   * 方向箭头颜色
   */
  @Input() dirColor: string;
  /**
   * 描边的宽度
   */
  @Input() borderWeight: number;
  /**
   * 是否延路径显示方向箭头
   */
  @Input() showDir: boolean;
  /**
   * 折线的节点数组
   */
  @Input() path: AMap.LocationValue[];
  /**
   * 额外: 是否隐藏
   */
  @Input() hidden = false;
  /**
   * 额外: 是否开启编辑器
   */
  @Input() editor = false;
  /**
   * 额外: 会覆盖其他属性的配置方式
   */
  @Input() options: AMap.Polyline.Options;

  // directive events:
  @Output() naReady = new EventEmitter();

  // editor events:
  @Output() naEditorAddNode: EventEmitter<any>;
  @Output() naEditorRemoveNode: EventEmitter<any>;
  @Output() naEditorAdjust: EventEmitter<any>;
  @Output() naEditorEnd: EventEmitter<any>;

  private inited = false;

  constructor(
    protected os: AmapPolylineService,
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
    const polyline = this.get();
    if (!this.inited) {
      this.logger.d(TAG, 'initializing ...');
      const options = this.options || getOptions<AMap.Polyline.Options>(this, PolylineOptions);
      this.logger.d(TAG, 'options:', options);
      this.os.create(options).subscribe(m => {
        this.ngZone.run(() => this.naReady.emit(m));
        this.logger.d(TAG, 'polyline is ready.');
      });
      this.inited = true;
    } else {
      zip(filter.has<AMap.LocationValue[]>('path'), polyline).subscribe(([v, p]) => p.setPath(v));
      zip(filter.has<AMap.Polyline.Options>('options'), polyline).subscribe(([v, p]) =>
        p.setOptions(v || {}),
      );
      zip(filter.has<any>('extData'), polyline).subscribe(([v, p]) => p.setExtData(v));
    }

    zip(filter.has<boolean>('hidden'), polyline).subscribe(([v, p]) => (v ? p.hide() : p.show()));
    filter.has<boolean>('editor').subscribe(v => this.os.toggleEditor(v));
  }

  /**
   * 获取已创建的 AMap.Polyline 对象
   */
  get() {
    return this.os.get();
  }
}
