import { Directive, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as AMapType from '../../interfaces/amap.interface';
import { MarkerOptions } from '../../interfaces/amap.marker-options';
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
  @Input() offset: any; // TODO: Pixel
  @Input() icon: string|any; // TODO: Icon
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
  @Input() shadow: any; // TODO: Icon
  @Input() title: string;
  @Input() clickable: boolean;
  @Input() shape: any;  // TODO: MarkerShape
  @Input() extData: any;
  @Input() label: { content: any; offset: any }; // TODO: Pixel
  private _id: string;

  constructor(private markerMgr: MarkerManagerService) { }

  getOptions(): MarkerOptions {
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
      this._id = this.markerMgr.addMarker(this);
      return;
    }

    this.markerMgr.onMarkerOptionChange(this._id, changes);
  }

  ngOnDestroy() {
    this.markerMgr.deleteMarker(this);
  }

  get id() { return this._id; }
}
