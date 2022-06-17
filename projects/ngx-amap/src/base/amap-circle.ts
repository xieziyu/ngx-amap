import { Input, Output, EventEmitter, Directive } from '@angular/core';
import { Getter } from './interfaces';
import { AMapShapeOverlay } from './amap-shape-overlay';
import { EventBinderService } from '../shared/event-binder.service';


export const CircleOptions = [
  'zIndex',
  'center',
  'bubble',
  'cursor',
  'radius',
  'strokeColor',
  'strokeOpacity',
  'strokeWeight',
  'fillColor',
  'fillOpacity',
  'strokeStyle',
  'extData',
  'strokeDasharray',
];

@Directive()
export class AMapCircle<T extends AMap.EventEmitter> extends AMapShapeOverlay<T> {
  // ---- Options ----
  /**
   * 层叠顺序，默认zIndex:10
   */
  @Input() zIndex: number;
  /**
   * 圆心位置
   */
  @Input() center: AMap.LocationValue;
  /**
   * 圆半径，单位:米
   */
  @Input() radius: number;
  /**
   * 线条颜色，使用16进制颜色代码赋值。默认值为#006600
   */
  @Input() strokeColor: string;
  /**
   * 轮廓线透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
   */
  @Input() strokeOpacity: number;
  /**
   * 轮廓线宽度
   */
  @Input() strokeWeight: number;
  /**
   * 圆形填充颜色,使用16进制颜色代码赋值。默认值为#006600
   */
  @Input() fillColor: string;
  /**
   * 圆形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
   */
  @Input() fillOpacity: number;
  /**
   * 轮廓线样式，实线:solid，虚线:dashed
   */
  @Input() strokeStyle: AMap.StrokeStyle;
  /**
   * 勾勒形状轮廓的虚线和间隙的样式
   */
  @Input() strokeDasharray: number[];

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

  constructor(protected os: Getter<T>, protected binder: EventBinderService) {
    super(os, binder);
  }
}
