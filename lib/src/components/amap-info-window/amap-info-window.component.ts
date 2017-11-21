import { Component, ElementRef, OnInit, Input,
  OnDestroy, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoggerService } from '../../services/logger';
import { LngLat, InfoWindow, Marker } from '../../types/class';
import { ISize, IPixel, InfoWindowOptions } from '../../types/interface';
import { Utils } from '../../utils/utils';
import { ChangeFilter } from '../../utils/change-filter';
import { InfoWindowService } from '../../services/info-window/info-window.service';
import { SizeService } from '../../services/size/size.service';

const ALL_OPTIONS = [
  'isCustom',
  'autoMove',
  'closeWhenClickMap',
  'content',
  'size',
  'offset',
  'position',
  'showShadow'
];

@Component({
  selector: 'amap-info-window',
  templateUrl: 'amap-info-window.component.html',
  styleUrls: ['amap-info-window.component.scss']
})
export class AmapInfoWindowComponent implements OnInit, OnDestroy, OnChanges {
  TAG = 'amap-info-window';

  // These properties are supported in InfoWindowOptions:
  @Input() isCustom: boolean;
  @Input() autoMove: boolean;
  @Input() closeWhenClickMap: boolean;
  @Input() size: ISize;
  @Input() offset: IPixel;
  @Input() position: LngLat;
  @Input() showShadow: boolean;

  // Extra property:
  @Input() isOpen = false;

  // amap-info-window events:
  @Output() isOpenChange = new EventEmitter();
  @Output() windowOpen = new EventEmitter();
  @Output() windowClose = new EventEmitter();
  @Output() windowChange = new EventEmitter();

  content: any;
  hostMarker: Promise<Marker>;
  private _infoWindow: Promise<InfoWindow>;
  private _subscriptions: Subscription;

  constructor(
    private el: ElementRef,
    private logger: LoggerService,
    private infoWindows: InfoWindowService,
    private sizes: SizeService
  ) {}

  ngOnInit() {
    this.content = this.el.nativeElement.querySelector('.amap-info-window-content');
    const options = Utils.getOptionsFor<InfoWindowOptions>(this, ALL_OPTIONS);
    this.logger.d(this.TAG, 'info window options:', options);
    this._infoWindow = this.infoWindows.create(options);
    this.bindEvents();
    this.toggleOpen();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this._infoWindow) { return; }

    const filter = ChangeFilter.of(changes);
    filter.has<any>('content').subscribe(v => this.setContent(v));
    filter.has<boolean>('isOpen').subscribe(v => this.toggleOpen());
    filter.notEmpty<LngLat>('position').subscribe(v => this.setPosition(v));
    filter.notEmpty<ISize>('size').subscribe(v => this.setSize(v));
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this.infoWindows.destroy(this._infoWindow);
  }

  private bindEvents() {
    this._subscriptions = this.infoWindows.bindEvent(this._infoWindow, 'change').subscribe(e => this.windowChange.emit(e));
    this._subscriptions.add(this.infoWindows.bindEvent(this._infoWindow, 'open').subscribe(e => {
      this.windowOpen.emit(e);
      if (!this.isOpen) {
        this.isOpenChange.emit(true);
      }
    }));
    this._subscriptions.add(this.infoWindows.bindEvent(this._infoWindow, 'close').subscribe(e => {
      this.windowClose.emit(e);
      if (this.isOpen) {
        this.isOpenChange.emit(false);
      }
    }));
  }

  private toggleOpen() {
    this.logger.d(this.TAG, 'toggle open');
    this.isOpen ? this.open() : this.close();
  }

  // public methods:
  open(): Promise<void> {
    return this._infoWindow.then(infoWindow => {
      if (this.hostMarker) {
        return this.hostMarker.then(marker => this.infoWindows.open(infoWindow, marker.getPosition()));
      } else {
        return this.infoWindows.open(infoWindow);
      }
    });
  }

  close(): Promise<void> {
    return this._infoWindow.then(infoWindow => infoWindow.close());
  }

  // Setters:
  setContent(content: any): Promise<void> {
    return this._infoWindow.then(infoWindow => infoWindow.setContent(content));
  }

  setPosition(position: LngLat): Promise<void> {
    return this._infoWindow.then(infoWindow => infoWindow.setPosition(position));
  }

  setSize(size: ISize): Promise<void> {
    return this._infoWindow.then(infoWindow => {
      const value = this.sizes.create(size, 'size');
      infoWindow.setSize(value);
    });
  }
}
