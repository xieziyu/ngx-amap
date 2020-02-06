import { Input, Output, EventEmitter } from '@angular/core';
import { WithEditor } from './interfaces';
import { AMapPathOverlay, PathOverlayOptions } from './amap-path-overlay';
import { EventBinderService } from '../shared/event-binder.service';

export const PolygonOptions = [...PathOverlayOptions, 'fillColor', 'fillOpacity', 'path'];

export class AMapPolygon<
  T extends AMap.EventEmitter,
  E extends AMap.EventEmitter
> extends AMapPathOverlay<T> {
  // ---- Options ----
  /**
   * 多边形轮廓线的节点坐标数组
   */
  @Input() path?: AMap.LocationValue[] | AMap.LocationValue[][];
  /**
   * 多边形填充颜色
   */
  @Input() fillColor?: string;
  /**
   * 边形填充透明度
   */
  @Input() fillOpacity?: number;
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
  @Input() options: AMap.Polygon.Options;

  // directive events:
  @Output() naReady = new EventEmitter();

  // editor events:
  @Output() naEditorAddNode: EventEmitter<any>;
  @Output() naEditorRemoveNode: EventEmitter<any>;
  @Output() naEditorAdjust: EventEmitter<any>;
  @Output() naEditorEnd: EventEmitter<any>;

  constructor(protected os: WithEditor<T, E>, protected binder: EventBinderService) {
    super(os, binder);
    const editor = this.os.getEditor();
    this.naEditorAddNode = this.binder.bindEvent(editor, 'addnode');
    this.naEditorRemoveNode = this.binder.bindEvent(editor, 'removenode');
    this.naEditorAdjust = this.binder.bindEvent(editor, 'adjust');
    this.naEditorEnd = this.binder.bindEvent(editor, 'end');
  }
}
