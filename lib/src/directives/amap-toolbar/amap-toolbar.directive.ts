import { Directive, Input, Output, OnDestroy, OnInit,
  EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoggerService } from '../../services/logger';
import { ToolBar, Marker, Pixel, LngLat } from '../../types/class';
import { ToolbarOptions, IPixel } from '../../types/interface';
import { Utils } from '../../utils/utils';
import { ChangeFilter } from '../../utils/change-filter';
import { ToolBarService } from '../../services/toolbar/toolbar.service';
import { PixelService } from '../../services/pixel/pixel.service';

const ALL_OPTIONS = [
  'offset',
  'position',
  'ruler',
  'noIpLocate',
  'locate',
  'liteStyle',
  'direction',
  'autoPosition',
  'locationMarker',
  'useNative'
];

@Directive({
  selector: 'amap-tool-bar'
})
export class AmapToolBarDirective implements OnChanges, OnInit, OnDestroy {
  TAG = 'amap-tool-bar';

  // These properties are supported in ToolbarOptions:
  @Input() offset: IPixel;
  @Input() position: string;
  @Input() ruler: boolean;
  @Input() noIpLocate: boolean;
  @Input() locate: boolean;
  @Input() liteStyle: boolean;
  @Input() direction: boolean;
  @Input() autoPosition: boolean;
  @Input() locationMarker: Marker;
  @Input() useNative: boolean;

  // Extra property:
  @Input() hidden = false;

  // amap-tool-bar events:
  @Output() zoomchanged = new EventEmitter();
  @Output() location = new EventEmitter();
  @Output() ready = new EventEmitter();
  @Output() toolbarHide = new EventEmitter();
  @Output() toolbarShow = new EventEmitter();

  private _toolbar: Promise<ToolBar>;
  private _subscriptions: Subscription;

  constructor(
    private logger: LoggerService,
    private toolbars: ToolBarService,
    private pixel: PixelService
  ) {}

  ngOnInit() {
    const options = Utils.getOptionsFor<ToolbarOptions>(this, ALL_OPTIONS);
    this._toolbar = this.toolbars.create(options);
    this.bindEvents();
    this._toolbar.then(t => this.ready.emit(t));
    this.hidden ? this.hide() : this.show();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this._toolbar) { return; }

    const filter = ChangeFilter.of(changes);
    filter.has<any>('ruler').subscribe(v => v ? this.showRuler() : this.hideRuler());
    filter.has<any>('direction').subscribe(v => v ? this.showDirection() : this.hideDirection());
    filter.has<any>('locate').subscribe(v => v ? this.showLocation() : this.hideLocation());
    filter.notEmpty<IPixel>('offset').subscribe(v => this.setOffset(v));
    filter.has<boolean>('hidden').subscribe(v => v ? this.hide() : this.show());
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this.toolbars.destroy(this._toolbar);
  }

  private bindEvents() {
    this._subscriptions = this.bindToolBarEvent('zoomchanged').subscribe(e => this.zoomchanged.emit(e));
    this._subscriptions.add(this.bindToolBarEvent('location').subscribe(e => this.location.emit(e)));
    this._subscriptions.add(this.bindToolBarEvent('show').subscribe(e => this.toolbarShow.emit(e)));
    this._subscriptions.add(this.bindToolBarEvent('hide').subscribe(e => this.toolbarHide.emit(e)));
  }

  private bindToolBarEvent(event: string) {
    return this.toolbars.bindEvent(this._toolbar, event);
  }

  // Public methods:
  show(): Promise<void> {
    return this._toolbar.then(t => t.show());
  }

  hide(): Promise<void> {
    return this._toolbar.then(t => t.hide());
  }

  showRuler(): Promise<void> {
    return this._toolbar.then(t => t.showRuler());
  }

  hideRuler(): Promise<void> {
    return this._toolbar.then(t => t.hideRuler());
  }

  showDirection(): Promise<void> {
    return this._toolbar.then(t => t.showDirection());
  }

  hideDirection(): Promise<void> {
    return this._toolbar.then(t => t.hideDirection());
  }

  showLocation(): Promise<void> {
    return this._toolbar.then(t => t.showLocation());
  }

  hideLocation(): Promise<void> {
    return this._toolbar.then(t => t.hideLocation());
  }

  doLocation(): Promise<void> {
    return this._toolbar.then(t => t.doLocation());
  }

  // Setters:
  setOffset(offset: IPixel): Promise<void> {
    return this._toolbar.then(t => {
      const value = this.pixel.create(offset, 'offset');
      if (value) {
        t.setOffset(value);
      }
    });
  }

  // Getters:
  getOffset(): Promise<Pixel> {
    return this._toolbar.then(t => t.getOffset());
  }

  getLocation(): Promise<LngLat> {
    return this._toolbar.then(t => t.getLocation());
  }
}
