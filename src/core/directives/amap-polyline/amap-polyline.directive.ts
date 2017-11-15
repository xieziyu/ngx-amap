import { Directive, Input, Output, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as AMapType from '../../interfaces/amap.interface';
import { PolylineOptions } from '../../interfaces/amap.polyline-options';
import { PolylineManagerService } from '../../services/polyline/polyline-manager/polyline-manager.service';

const ALL_OPTIONS = [
  'zIndex',
  'bubble',
  'geodesic',
  'isOutline',
  'borderWeight',
  'outlineColor',
  'path',
  'strokeColor',
  'strokeOpacity',
  'strokeWeight',
  'strokeStyle',
  'strokeDasharray',
  'lineJoin',
  'extData',
  'showDir'
];

@Directive({
  selector: 'amap-polyline'
})
export class AmapPolylineDirective implements OnChanges, OnDestroy {
  // These properties are supported in PolylineOptions:
  @Input() zIndex: number;
  @Input() bubble: boolean;
  @Input() geodesic: boolean;
  @Input() isOutline: boolean;
  @Input() borderWeight: number;
  @Input() outlineColor: string;
  @Input() path: number[][];
  @Input() strokeColor: string;
  @Input() strokeOpacity: number;
  @Input() strokeWeight: number;
  @Input() strokeStyle: string;
  @Input() strokeDasharray: number[];
  @Input() lineJoin: string;
  @Input() extData: any;
  @Input() showDir: boolean;

  // This options property will override other property:
  @Input() options: PolylineOptions;

  // Extra property:
  @Input() hidden = false;

  // amap-polyline events:
  @Output() polylineClick = new EventEmitter();

  private _id: string;
  private _subscriptions: Subscription;

  constructor(private mgr: PolylineManagerService) { }

  private _getOptions(): PolylineOptions {
    const options: PolylineOptions = {};

    ALL_OPTIONS.forEach(key => {
      if (this[key] !== undefined && this[key] !== null) {
        options[key] = this[key];
      }
    });

    return options;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this._id) {
      const options = this.options || this._getOptions();
      this._id = this.mgr.addPolyline(options);
      this._observeEvents();
    } else {
      this.mgr.onOptionChange(this._id, changes);
    }

    this.mgr.onExtraPropertyChange(this._id, changes);
  }

  ngOnDestroy() {
    this.mgr.deletePolyline(this._id);
    this._unsubscribeEvents();
  }

  private _observeEvents() {
    this._subscriptions = this.mgr.observeEvent(this._id, 'click').subscribe(e => {
      this.polylineClick.emit(e);
    });
  }

  private _unsubscribeEvents() {
    if (this._subscriptions) {
      this._subscriptions.unsubscribe();
    }
  }

  get id() { return this._id; }

  // Public Methods:
  getPath(): Promise<number[][]> {
    return this.mgr.getPath(this._id);
  }

  getOptions(): Promise<PolylineOptions> {
    return this.mgr.getOptions(this._id);
  }

  getLength(): Promise<number> {
    return this.mgr.getLength(this._id);
  }

  getBounds(): Promise<any> {
    return this.mgr.getBounds(this._id);
  }

  getExtData(): Promise<any> {
    return this.mgr.getExtData(this._id);
  }
}
