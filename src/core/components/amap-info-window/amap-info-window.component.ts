import { Component, ElementRef, OnInit, Input, OnDestroy, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MapAPIWrapperService } from '../../services/map-api-wrapper/map-api-wrapper.service';
import { InfoWindowManagerService } from '../../services/amap-info-window/info-window-manager.service';
import * as AMapType from '../../interfaces/amap.interface';
import { InfoWindowOptions } from '../../interfaces/amap.info-window-options';

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
export class AmapInfoWindowComponent implements OnInit, OnChanges, OnDestroy {
  // These properties are supported in InfoWindowOptions:
  @Input() isCustom: boolean;
  @Input() autoMove: boolean;
  @Input() closeWhenClickMap: boolean;
  @Input() size: AMapType.Size;
  @Input() offset: AMapType.Pixel;
  @Input() position: AMapType.LngLat;
  @Input() showShadow: boolean;

  content: any;

  // Extra property:
  @Input() isOpen = false;

  hostMarker: Promise<AMapType.Marker>;

  // amap-info-window events:
  @Output() windowOpen = new EventEmitter();
  @Output() windowClose = new EventEmitter();
  @Output() windowChange = new EventEmitter();

  private _id: string;
  private _subscriptions: Subscription;

  constructor(private mapAPI: MapAPIWrapperService,
              private windowMgr: InfoWindowManagerService,
              private el: ElementRef) { }

  public open(): Promise<void> {
    return this.windowMgr.open(this);
  }

  public close(): Promise<void> {
    return this.windowMgr.close(this);
  }

  private _getOptions(): InfoWindowOptions {
    const options: InfoWindowOptions = {};

    ALL_OPTIONS.forEach(key => {
      if (this[key] !== undefined) {
        options[key] = this[key];
      }
    });

    return options;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this._id) {
      return;
    }

    this.windowMgr.onOptionsChange(this._id, changes);

    if (changes['isOpen']) {
      this._toggleOpen();
    }
  }

  ngOnInit() {
    this.content = this.el.nativeElement.querySelector('.amap-info-window-content');
    this._id = this.windowMgr.addInfoWindow(this._getOptions());
    this._observeEvents();
    this._toggleOpen();
  }

  ngOnDestroy() {
    this.windowMgr.deleteInfoWindow(this._id);
    this._unsubscribeEvents();
  }

  private _toggleOpen() {
    this.isOpen ? this.open() : this.close();
  }

  private _observeEvents() {
    this._subscriptions = this.windowMgr.observeEvent(this._id, 'change').subscribe(e => this.windowChange.emit(e));
    this._subscriptions.add(this.windowMgr.observeEvent(this._id, 'open').subscribe(e => {
      this.isOpen = true;
      this.windowClose.emit(e);
    }));
    this._subscriptions.add(this.windowMgr.observeEvent(this._id, 'close').subscribe(e => {
      this.isOpen = false;
      this.windowClose.emit(e);
    }));
  }

  private _unsubscribeEvents() {
    if (this._subscriptions) {
      this._subscriptions.unsubscribe();
    }
  }

  get id() { return this._id; }
}
