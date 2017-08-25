import { Directive, Input, Output, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as AMapType from '../../interfaces/amap.interface';
import { MarkerOptions } from '../../interfaces/amap.marker-options';
import { PixelOptions } from '../../interfaces/amap.pixel-options';
import { IconOptions } from '../../interfaces/amap.icon-options';
import { LabelOptions } from '../../interfaces/amap.label-options';
import { MarkerManagerService } from '../../services/marker/marker-manager/marker-manager.service';

const ALL_MARKER_OPTIONS = [
  'position',
  'offset',
  'icon',
  'content',
  'topWhenClick',
  'bubble',
  'draggable',
  'raiseOnDrag',
  'cursor',
  'visible',
  'zIndex',
  'angle',
  'autoRotation',
  'shadow',
  'title',
  'clickable',
  'shape',
  'extData',
  'label'
];

@Directive({
  selector: 'amap-marker'
})
export class AmapMarkerDirective implements OnChanges, OnDestroy {
  // These properties are supported in MarkerOptions:
  @Input() position: Array<number>;
  @Input() offset: PixelOptions;
  @Input() icon: string|IconOptions;
  @Input() content: any;
  @Input() topWhenClick: boolean;
  @Input() bubble: boolean;
  @Input() draggable: boolean;
  @Input() raiseOnDrag: boolean;
  @Input() cursor: string;
  @Input() visible: boolean;
  @Input() zIndex: number;
  @Input() angle: number;
  @Input() autoRotation: boolean;
  @Input() shadow: IconOptions;
  @Input() title: string;
  @Input() clickable: boolean;
  @Input() shape: any;  // TODO: MarkerShape
  @Input() extData: any;
  @Input() label: LabelOptions;

  // Extra property:
  @Input() hidden =  false;

  // amap-marker events:
  @Output() markerClick = new EventEmitter();

  private _id: string;
  private _subscriptions: Subscription;

  constructor(private markerMgr: MarkerManagerService) { }

  private _getOptions(): MarkerOptions {
    const options: MarkerOptions = {};

    ALL_MARKER_OPTIONS.forEach(key => {
      if (this[key] !== undefined) {
        options[key] = this[key];
      }
    });

    return options;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this._id) {
      this._id = this.markerMgr.addMarker(this, this._getOptions());
      this._observeEvents();
    } else {
      this.markerMgr.onMarkerOptionChange(this._id, changes);
    }

    this.markerMgr.onMarkerExtraPropertyChange(this._id, changes);
  }

  ngOnDestroy() {
    this.markerMgr.deleteMarker(this);
    this._unsubscribeEvents();
  }

  private _observeEvents() {
    this._subscriptions = this.markerMgr.observeEvent(this._id, 'click').subscribe(e => this.markerClick.emit(e));
  }

  private _unsubscribeEvents() {
    if (this._subscriptions) {
      this._subscriptions.unsubscribe();
    }
  }

  get id() { return this._id; }
}
