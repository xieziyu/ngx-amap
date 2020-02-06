import { Input } from '@angular/core';
import { Getter } from './interfaces';
import { OverlayOptions } from './amap-overlay';
import { AMapShapeOverlay } from './amap-shape-overlay';
import { EventBinderService } from '../shared/event-binder.service';

export const PathOverlayOptions = [
  ...OverlayOptions,
  'visible',
  'zIndex',
  'strokeColor',
  'strokeOpacity',
  'strokeWeight',
  'strokeStyle',
  'strokeDasharray',
  'lineJoin',
  'lineCap',
];

export class AMapPathOverlay<T extends AMap.EventEmitter> extends AMapShapeOverlay<T> {
  // ---- Options ----
  /**
   * 是否可见
   */
  @Input() visible: boolean;
  /**
   * 覆盖物层级
   */
  @Input() zIndex: number;
  /**
   * 描边线条颜色
   */
  @Input() strokeColor: string;
  /**
   * 描边线条透明度
   */
  @Input() strokeOpacity: number;
  /**
   * 描边宽度
   */
  @Input() strokeWeight: number;
  /**
   * 描边样式
   */
  @Input() strokeStyle: AMap.StrokeStyle;
  /**
   * 虚线间隔
   */
  @Input() strokeDasharray: number[];
  /**
   * 折线拐点的绘制样式
   */
  @Input() lineJoin: AMap.StrokeLineJoin;
  /**
   * 折线两端线帽的绘制样式
   */
  @Input() lineCap: AMap.StrokeLineCap;

  constructor(protected os: Getter<T>, protected binder: EventBinderService) {
    super(os, binder);
  }
}
