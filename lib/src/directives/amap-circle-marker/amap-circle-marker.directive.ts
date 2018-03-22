import { Directive, Input, Output, OnDestroy,
  EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoggerService } from '../../services/logger/logger.service';
import { CircleMarker, Map, LngLat } from '../../types/class';
import { CircleMarkerOptions, ILngLat } from '../../types/interface';
import { Utils } from '../../utils/utils';
import { ChangeFilter } from '../../utils/change-filter';
import { CircleMarkerService } from '../../services/circle-marker/circle-marker.service';

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
  'extData'
];

@Directive({
  selector: 'amap-circle-marker',
  exportAs: 'circle-marker'
})
export class AmapCircleMarkerDirective implements OnChanges, OnDestroy {
  TAG = 'amap-circle-marker';

  // These properties are supported in CircleMarkerOptions:
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
  @Input() extData: any;

  // This options property will override other property:
  @Input() options: CircleMarkerOptions;

  // Extra property:
  @Input() hidden = false;

  // amap-circle events:
  @Output() circleMarkerClick = new EventEmitter();
  @Output() ready = new EventEmitter();
  @Output() dblClick = new EventEmitter();
  @Output() rightClick = new EventEmitter();
  @Output() circleMarkerHide = new EventEmitter();
  @Output() circleMarkerShow = new EventEmitter();
  @Output() mouseDown = new EventEmitter();
  @Output() mouseUp = new EventEmitter();
  @Output() mouseOver = new EventEmitter();
  @Output() mouseOut = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() touchStart = new EventEmitter();
  @Output() touchMove = new EventEmitter();
  @Output() touchEnd = new EventEmitter();

  private _cm: Promise<CircleMarker>;
  private _subscriptions: Subscription;

  constructor(
    private logger: LoggerService,
    private cms: CircleMarkerService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);

    if (!this._cm) {
      const options = this.options || Utils.getOptionsFor<CircleMarkerOptions>(this, ALL_OPTIONS);
      this._cm = this.cms.create(options);
      this.bindEvents();
      this._cm.then(p => this.ready.emit(p));
    } else {
      filter.has<CircleMarkerOptions>('options').subscribe(v => this.setOptions(v || {}));
      filter.has<any>('extData').subscribe(v => this.setExtData(v));
      filter.has<number>('radius').subscribe(v => this.setRadius(v));
      filter.notEmpty<LngLat>('center').subscribe(v => this.setCenter(v));
    }

    filter.has<boolean>('hidden').subscribe(v => v ? this.hide() : this.show());
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this.cms.destroy(this._cm);
  }

  private bindEvents() {
    this._subscriptions = this.bindEvent('click').subscribe(e => this.circleMarkerClick.emit(e));
    this._subscriptions.add(this.bindEvent('dblclick').subscribe(e => this.dblClick.emit(e)));
    this._subscriptions.add(this.bindEvent('rightclick').subscribe(e => this.rightClick.emit(e)));
    this._subscriptions.add(this.bindEvent('hide').subscribe(e => this.circleMarkerHide.emit(e)));
    this._subscriptions.add(this.bindEvent('show').subscribe(e => this.circleMarkerShow.emit(e)));
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
    return this.cms.bindEvent(this._cm, event);
  }

  // Public methods:
  show(): Promise<void> {
    return this._cm.then(c => c.show());
  }

  hide(): Promise<void> {
    return this._cm.then(c => c.hide());
  }

  // Setters:
  setCenter(lnglat: LngLat|ILngLat): Promise<void> {
    return this._cm.then(c => c.setCenter(lnglat));
  }

  setRadius(radius: number): Promise<void> {
    return this._cm.then(c => c.setRadius(radius));
  }

  setOptions(opt: CircleMarkerOptions): Promise<void> {
    return this._cm.then(c => c.setOptions(opt));
  }

  setExtData(ext: any): Promise<void> {
    return this._cm.then(c => c.setExtData(ext));
  }

  // Getters:
  getCenter(): Promise<LngLat> {
    return this._cm.then(c => c.getCenter());
  }

  getRadius(): Promise<number> {
    return this._cm.then(c => c.getRadius());
  }

  getOptions(): Promise<CircleMarkerOptions> {
    return this._cm.then(c => c.getOptions());
  }

  getExtData(): Promise<any> {
    return this._cm.then(c => c.getExtData());
  }
}
