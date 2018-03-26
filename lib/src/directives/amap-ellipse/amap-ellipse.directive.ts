import { Directive, Input, Output, OnDestroy,
  EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoggerService } from '../../services/logger/logger.service';
import { Ellipse, Map, LngLat, Bounds } from '../../types/class';
import { EllipseOptions, ILngLat } from '../../types/interface';
import { Utils } from '../../utils/utils';
import { ChangeFilter } from '../../utils/change-filter';
import { EllipseService } from '../../services/ellipse/ellipse.service';

const ALL_OPTIONS = [
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
  'strokeDasharray',
  'extData'
];

@Directive({
  selector: 'amap-ellipse',
  exportAs: 'ellipse'
})
export class AmapEllipseDirective implements OnChanges, OnDestroy {
  TAG = 'amap-ellipse';

  // These properties are supported in EllipseOptions:
  @Input() zIndex: number;
  @Input() center: ILngLat;
  @Input() bubble: boolean;
  @Input() cursor: string;
  @Input() radius: number;
  @Input() strokeColor: string;
  @Input() strokeOpacity: number;
  @Input() strokeWeight: number;
  @Input() fillColor: string;
  @Input() fillOpacity: number;
  @Input() strokeStyle: string;
  @Input() strokeDasharray: number[];
  @Input() extData: any;

  // This options property will override other property:
  @Input() options: EllipseOptions;

  // Extra property:
  @Input() hidden = false;

  // amap-ellipse events:
  @Output() ellipseClick = new EventEmitter();
  @Output() ready = new EventEmitter();
  @Output() dblClick = new EventEmitter();
  @Output() rightClick = new EventEmitter();
  @Output() ellipseHide = new EventEmitter();
  @Output() ellipseShow = new EventEmitter();
  @Output() mouseDown = new EventEmitter();
  @Output() mouseUp = new EventEmitter();
  @Output() mouseOver = new EventEmitter();
  @Output() mouseOut = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() touchStart = new EventEmitter();
  @Output() touchMove = new EventEmitter();
  @Output() touchEnd = new EventEmitter();

  private _ellipse: Promise<Ellipse>;
  private _subscriptions: Subscription;

  constructor(
    private logger: LoggerService,
    private ellipses: EllipseService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);

    if (!this._ellipse) {
      const options = this.options || Utils.getOptionsFor<EllipseOptions>(this, ALL_OPTIONS);
      this._ellipse = this.ellipses.create(options);
      this.bindEvents();
      this._ellipse.then(p => this.ready.emit(p));
    } else {
      filter.has<EllipseOptions>('options').subscribe(v => this.setOptions(v || {}));
      filter.has<any>('extData').subscribe(v => this.setExtData(v));
      filter.notEmpty<LngLat>('center').subscribe(v => this.setCenter(v));
    }

    filter.has<boolean>('hidden').subscribe(v => v ? this.hide() : this.show());
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this.ellipses.destroy(this._ellipse);
  }

  private bindEvents() {
    this._subscriptions = this.bindEvent('click').subscribe(e => this.ellipseClick.emit(e));
    this._subscriptions.add(this.bindEvent('dblclick').subscribe(e => this.dblClick.emit(e)));
    this._subscriptions.add(this.bindEvent('rightclick').subscribe(e => this.rightClick.emit(e)));
    this._subscriptions.add(this.bindEvent('hide').subscribe(e => this.ellipseHide.emit(e)));
    this._subscriptions.add(this.bindEvent('show').subscribe(e => this.ellipseShow.emit(e)));
    this._subscriptions.add(this.bindEvent('mousedown').subscribe(e => this.mouseDown.emit(e)));
    this._subscriptions.add(this.bindEvent('mouseup').subscribe(e => this.mouseUp.emit(e)));
    this._subscriptions.add(this.bindEvent('mouseover').subscribe(e => this.mouseOver.emit(e)));
    this._subscriptions.add(this.bindEvent('mouseout').subscribe(e => this.mouseOut.emit(e)));
    this._subscriptions.add(this.bindEvent('change').subscribe(e => this.change.emit(e)));
    this._subscriptions.add(this.bindEvent('touchstart').subscribe(e => this.touchStart.emit(e)));
    this._subscriptions.add(this.bindEvent('touchmove').subscribe(e => this.touchMove.emit(e)));
    this._subscriptions.add(this.bindEvent('touchend').subscribe(e => this.touchEnd.emit(e)));
  }

  private bindEvent(event: string) {
    return this.ellipses.bindEvent(this._ellipse, event);
  }

  // Public methods:
  show(): Promise<void> {
    return this._ellipse.then(c => c.show());
  }

  hide(): Promise<void> {
    return this._ellipse.then(c => c.hide());
  }

  contains(point: LngLat|ILngLat): Promise<boolean> {
    return this._ellipse.then(c => c.contains(point));
  }

  // Setters:
  setCenter(lnglat: LngLat|ILngLat): Promise<void> {
    return this._ellipse.then(c => c.setCenter(lnglat));
  }

  setOptions(opt: EllipseOptions): Promise<void> {
    return this._ellipse.then(c => c.setOptions(opt));
  }

  setExtData(ext: any): Promise<void> {
    return this._ellipse.then(c => c.setExtData(ext));
  }

  // Getters:
  getCenter(): Promise<LngLat> {
    return this._ellipse.then(c => c.getCenter());
  }

  getOptions(): Promise<EllipseOptions> {
    return this._ellipse.then(c => c.getOptions());
  }

  getBounds(): Promise<Bounds> {
    return this._ellipse.then(c => c.getBounds());
  }

  getExtData(): Promise<any> {
    return this._ellipse.then(c => c.getExtData());
  }
}
