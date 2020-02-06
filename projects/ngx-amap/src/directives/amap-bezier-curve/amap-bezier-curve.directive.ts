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
import { AmapBezierCurveService } from './amap-bezier-curve.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { EventBinderService } from '../../shared/event-binder.service';
import { getOptions, ChangeFilter } from '../../utils';

const TAG = 'amap-bezier-curve';
const BezierCurveOptions = [
  ...PathOverlayOptions,
  'isOutline',
  'outlineColor',
  'dirColor',
  'borderWeight',
  'showDir',
  'path',
];

@Directive({
  selector: 'amap-bezier-curve',
  exportAs: 'bezier-curve',
  providers: [AmapBezierCurveService],
})
export class AmapBezierCurveDirective extends AMapPathOverlay<AMap.BezierCurve>
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
   * 贝瑟尔曲线的路径
   */
  @Input() path: Array<Array<number | string | Array<string | number>>>;
  /**
   * 额外: 是否隐藏
   */
  @Input() hidden = false;
  /**
   * 额外: 是否开启曲线编辑器
   */
  @Input() editor = false;
  /**
   * 额外: 是否开启折线编辑器
   */
  @Input() polyEditor = false;
  /**
   * 额外: 会覆盖其他属性的配置方式
   */
  @Input() options: AMap.BezierCurve.Options;

  // directive events:
  @Output() naReady = new EventEmitter();

  // editor events:
  @Output() naEditorAddNode: EventEmitter<any>;
  @Output() naEditorRemoveNode: EventEmitter<any>;
  @Output() naEditorAdjust: EventEmitter<any>;
  @Output() naEditorEnd: EventEmitter<any>;
  @Output() naPolyEditorAddNode: EventEmitter<any>;
  @Output() naPolyEditorRemoveNode: EventEmitter<any>;
  @Output() naPolyEditorAdjust: EventEmitter<any>;
  @Output() naPolyEditorEnd: EventEmitter<any>;

  private inited = false;

  constructor(
    protected os: AmapBezierCurveService,
    protected binder: EventBinderService,
    private logger: LoggerService,
    private ngZone: NgZone,
  ) {
    super(os, binder);
    const editor = this.os.getEditor();
    const polyEditor = this.os.getPolyEditor();
    this.naEditorAddNode = this.binder.bindEvent(editor, 'addnode');
    this.naEditorRemoveNode = this.binder.bindEvent(editor, 'removenode');
    this.naEditorAdjust = this.binder.bindEvent(editor, 'adjust');
    this.naEditorEnd = this.binder.bindEvent(editor, 'end');
    this.naPolyEditorAddNode = this.binder.bindEvent(polyEditor, 'addnode');
    this.naPolyEditorRemoveNode = this.binder.bindEvent(polyEditor, 'removenode');
    this.naPolyEditorAdjust = this.binder.bindEvent(polyEditor, 'adjust');
    this.naPolyEditorEnd = this.binder.bindEvent(polyEditor, 'end');
  }

  ngOnDestroy() {
    this.os.destroy();
  }

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);
    const bezierCurve = this.get();
    if (!this.inited) {
      this.logger.d(TAG, 'initializing ...');
      const options =
        this.options || getOptions<AMap.BezierCurve.Options>(this, BezierCurveOptions);
      this.logger.d(TAG, 'options:', options);
      this.os.create(options).subscribe(m => {
        this.ngZone.run(() => this.naReady.emit(m));
        this.logger.d(TAG, 'bezierCurve is ready.');
      });
      this.inited = true;
    } else {
      zip(
        filter.has<Array<Array<number | string | Array<string | number>>>>('path'),
        bezierCurve,
      ).subscribe(([v, p]) => p.setPath(v));
      zip(filter.has<AMap.BezierCurve.Options>('options'), bezierCurve).subscribe(([v, p]) =>
        p.setOptions(v || {}),
      );
      zip(filter.has<any>('extData'), bezierCurve).subscribe(([v, p]) => p.setExtData(v));
    }

    zip(filter.has<boolean>('hidden'), bezierCurve).subscribe(([v, p]) =>
      v ? p.hide() : p.show(),
    );
    filter.has<boolean>('editor').subscribe(v => this.os.toggleEditor(v));
    filter.has<boolean>('polyEditor').subscribe(v => this.os.togglePolyEditor(v));
  }

  /**
   * 获取已创建的 AMap.BezierCurve 对象
   */
  get() {
    return this.os.get();
  }
}
