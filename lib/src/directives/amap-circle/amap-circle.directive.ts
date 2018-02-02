import { Directive, Input, Output, OnDestroy,
  EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoggerService } from '../../services/logger/logger.service';
import { Circle, Map, LngLat } from '../../types/class';
import { CircleOptions, ILngLat } from '../../types/interface';
import { Utils } from '../../utils/utils';
import { ChangeFilter } from '../../utils/change-filter';
import { CircleService } from '../../services/circle/circle.service';

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
  selector: 'amap-circle'
})
export class AmapCircleDirective implements OnChanges, OnDestroy {
  TAG = 'amap-circle';

  // These properties are supported in CircleOptions:
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
  @Input() options: CircleOptions;

  // Extra property:
  @Input() hidden = false;

  // amap-circle events:
  @Output() circleClick = new EventEmitter();
  @Output() ready = new EventEmitter();
  @Output() dblClick = new EventEmitter();
  @Output() rightClick = new EventEmitter();
  @Output() circleHide = new EventEmitter();
  @Output() circleShow = new EventEmitter();
  @Output() mouseDown = new EventEmitter();
  @Output() mouseUp = new EventEmitter();
  @Output() mouseOver = new EventEmitter();
  @Output() mouseOut = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() touchStart = new EventEmitter();
  @Output() touchMove = new EventEmitter();
  @Output() touchEnd = new EventEmitter();

  private _circle: Promise<Circle>;
  private _subscriptions: Subscription;

  constructor(
    private logger: LoggerService,
    private circles: CircleService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);

    if (!this._circle) {
      const options = this.options || Utils.getOptionsFor<CircleOptions>(this, ALL_OPTIONS);
      this._circle = this.circles.create(options);
      this.bindEvents();
      this._circle.then(p => this.ready.emit(p));
    } else {
      filter.has<CircleOptions>('options').subscribe(v => this.setOptions(v || {}));
      filter.has<any>('extData').subscribe(v => this.setExtData(v));
      filter.has<number>('radius').subscribe(v => this.setRadius(v));
      filter.notEmpty<LngLat>('center').subscribe(v => this.setCenter(v));
    }

    filter.has<boolean>('hidden').subscribe(v => v ? this.hide() : this.show());
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this.circles.destroy(this._circle);
  }

  private bindEvents() {
    this._subscriptions = this.bindEvent('click').subscribe(e => this.circleClick.emit(e));
    this._subscriptions.add(this.bindEvent('dblclick').subscribe(e => this.dblClick.emit(e)));
    this._subscriptions.add(this.bindEvent('rightclick').subscribe(e => this.rightClick.emit(e)));
    this._subscriptions.add(this.bindEvent('hide').subscribe(e => this.circleHide.emit(e)));
    this._subscriptions.add(this.bindEvent('show').subscribe(e => this.circleShow.emit(e)));
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
    return this.circles.bindEvent(this._circle, event);
  }

  // Public methods:
  show(): Promise<void> {
    return this._circle.then(c => c.show());
  }

  hide(): Promise<void> {
    return this._circle.then(c => c.hide());
  }

  contains(point: LngLat|ILngLat): Promise<boolean> {
    return this._circle.then(c => c.contains(point));
  }

  // Setters:
  setCenter(lnglat: LngLat|ILngLat): Promise<void> {
    return this._circle.then(c => c.setCenter(lnglat));
  }

  setRadius(radius: number): Promise<void> {
    return this._circle.then(c => c.setRadius(radius));
  }

  setOptions(opt: CircleOptions): Promise<void> {
    return this._circle.then(c => c.setOptions(opt));
  }

  setExtData(ext: any): Promise<void> {
    return this._circle.then(c => c.setExtData(ext));
  }

  // Getters:
  getCenter(): Promise<LngLat> {
    return this._circle.then(c => c.getCenter());
  }

  getRadius(): Promise<number> {
    return this._circle.then(c => c.getRadius());
  }

  getOptions(): Promise<CircleOptions> {
    return this._circle.then(c => c.getOptions());
  }

  getBounds(): Promise<any> {
    return this._circle.then(c => c.getBounds());
  }

  getExtData(): Promise<any> {
    return this._circle.then(c => c.getExtData());
  }
}
