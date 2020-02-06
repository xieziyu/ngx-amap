import { Input, Output, EventEmitter } from '@angular/core';
import { Getter } from './interfaces';
import { EventBinderService } from '../shared/event-binder.service';

export const OverlayOptions = ['cursor', 'extData', 'bubble', 'clickable', 'draggable'];

export class AMapOverlay<T extends AMap.EventEmitter> {
  // ---- Options ----
  /**
   * 鼠标悬停时的鼠标样式
   */
  @Input() cursor: string;
  /**
   * 自定义数据
   */
  @Input() extData: any;
  /**
   * 事件是否穿透到地图
   */
  @Input() bubble: boolean;
  /**
   * 是否支持点击
   */
  @Input() clickable: boolean;
  /**
   * 是否支持拖拽
   */
  @Input() draggable: boolean;

  // ---- Events ----
  @Output() naTouchStart: EventEmitter<any>;
  @Output() naTouchMove: EventEmitter<any>;
  @Output() naTouchEnd: EventEmitter<any>;
  @Output() naClick: EventEmitter<any>;
  @Output() naDblClick: EventEmitter<any>;
  @Output() naRightClick: EventEmitter<any>;
  @Output() naMouseOver: EventEmitter<any>;
  @Output() naMouseUp: EventEmitter<any>;
  @Output() naMouseOut: EventEmitter<any>;
  @Output() naMouseDown: EventEmitter<any>;

  constructor(protected os: Getter<T>, protected binder: EventBinderService) {
    const target = os.get();
    this.naTouchStart = this.binder.bindEvent(target, 'touchstart');
    this.naTouchMove = this.binder.bindEvent(target, 'touchmove');
    this.naTouchEnd = this.binder.bindEvent(target, 'touchend');
    this.naClick = this.binder.bindEvent(target, 'click');
    this.naDblClick = this.binder.bindEvent(target, 'dblclick');
    this.naRightClick = this.binder.bindEvent(target, 'rightclick');
    this.naMouseOver = this.binder.bindEvent(target, 'mouseover');
    this.naMouseUp = this.binder.bindEvent(target, 'mouseup');
    this.naMouseOut = this.binder.bindEvent(target, 'mouseout');
    this.naMouseDown = this.binder.bindEvent(target, 'mousedown');
  }
}
