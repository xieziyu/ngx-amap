import { Output, EventEmitter } from '@angular/core';
import { Getter } from './interfaces';
import { AMapOverlay } from './amap-overlay';
import { EventBinderService } from '../shared/event-binder.service';

export class AMapShapeOverlay<T extends AMap.EventEmitter> extends AMapOverlay<T> {
  // ---- Events ----
  @Output() naShow: EventEmitter<any>;
  @Output() naHide: EventEmitter<any>;
  @Output() naChange: EventEmitter<any>;

  constructor(protected os: Getter<T>, protected binder: EventBinderService) {
    super(os, binder);
    const target = os.get();
    this.naShow = this.binder.bindEvent(target, 'show');
    this.naHide = this.binder.bindEvent(target, 'hide');
    this.naChange = this.binder.bindEvent(target, 'change');
  }
}
