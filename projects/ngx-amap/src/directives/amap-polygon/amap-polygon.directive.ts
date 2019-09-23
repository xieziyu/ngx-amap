import { Directive, Input, Output, OnDestroy,
  EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { LngLat, Bounds, PolyEditor } from '../../types/class';
import { Polygon, PolygonPath } from '../../types/class/overlays/amap.polygon';
import { PolygonOptions, ILngLat } from '../../types/interface';
import { Utils } from '../../utils/utils';
import { ChangeFilter } from '../../utils/change-filter';
import { PolygonService } from '../../services/polygon/polygon.service';

const ALL_OPTIONS = [
  'zIndex',
  'path',
  'bubble',
  'cursor',
  'strokeColor',
  'strokeOpacity',
  'strokeWeight',
  'fillColor',
  'fillOpacity',
  'strokeStyle',
  'strokeDasharray',
  'extData',
  'draggable'
];

@Directive({
  selector: 'amap-polygon',
  exportAs: 'polygon'
})
export class AmapPolygonDirective implements OnChanges, OnDestroy {
  TAG = 'amap-polygon';

  // These properties are supported in PolygonOptions:
  @Input() zIndex: number;
  @Input() path: ILngLat[] | ILngLat[][];
  @Input() bubble: boolean;
  @Input() cursor: string;
  @Input() strokeColor: string;
  @Input() strokeOpacity: number;
  @Input() strokeWeight: number;
  @Input() fillColor: string;
  @Input() fillOpacity: number;
  @Input() strokeStyle: string;
  @Input() strokeDasharray: number[];
  @Input() extData: any;
  @Input() draggable: boolean;

  // This options property will override other property:
  @Input() options: PolygonOptions;

  // Extra property:
  @Input() hidden = false;
  @Input() editor = false;

  // amap-polygon events:
  @Output() polygonClick = new EventEmitter();
  @Output() ready = new EventEmitter();
  @Output() dblClick = new EventEmitter();
  @Output() rightClick = new EventEmitter();
  @Output() polygonHide = new EventEmitter();
  @Output() polygonShow = new EventEmitter();
  @Output() mouseDown = new EventEmitter();
  @Output() mouseUp = new EventEmitter();
  @Output() mouseOver = new EventEmitter();
  @Output() mouseOut = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() touchStart = new EventEmitter();
  @Output() touchMove = new EventEmitter();
  @Output() touchEnd = new EventEmitter();

  // editor events:
  @Output() editorAddnode = new EventEmitter();
  @Output() editorRemovenode = new EventEmitter();
  @Output() editorAdjust = new EventEmitter();
  @Output() editorEnd = new EventEmitter();

  private _polygon: Promise<Polygon>;
  private _subscriptions: Subscription;

  private _editor: PolyEditor;

  constructor(
    private polygons: PolygonService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);

    if (!this._polygon) {
      const options = this.options || Utils.getOptionsFor<PolygonOptions>(this, ALL_OPTIONS);
      this._polygon = this.polygons.create(options);
      this.bindEvents();
      this._polygon.then(p => this.ready.emit(p));
    } else {
      filter.has<PolygonPath>('path').subscribe(v => this.setPath(v));
      filter.has<PolygonOptions>('options').subscribe(v => this.setOptions(v || {}));
      filter.has<any>('extData').subscribe(v => this.setExtData(v));
    }

    filter.has<boolean>('hidden').subscribe(v => v ? this.hide() : this.show());
    filter.has<boolean>('editor').subscribe(v => this.toggleEditor(v));
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this.polygons.destroy(this._polygon);
  }

  private bindEvents() {
    this._subscriptions = this.bindPolygonEvent('click').subscribe(e => this.polygonClick.emit(e));
    this._subscriptions.add(this.bindPolygonEvent('dblclick').subscribe(e => this.dblClick.emit(e)));
    this._subscriptions.add(this.bindPolygonEvent('rightclick').subscribe(e => this.rightClick.emit(e)));
    this._subscriptions.add(this.bindPolygonEvent('hide').subscribe(e => this.polygonHide.emit(e)));
    this._subscriptions.add(this.bindPolygonEvent('show').subscribe(e => this.polygonShow.emit(e)));
    this._subscriptions.add(this.bindPolygonEvent('mousedown').subscribe(e => this.mouseDown.emit(e)));
    this._subscriptions.add(this.bindPolygonEvent('mouseup').subscribe(e => this.mouseUp.emit(e)));
    this._subscriptions.add(this.bindPolygonEvent('mouseover').subscribe(e => this.mouseOver.emit(e)));
    this._subscriptions.add(this.bindPolygonEvent('mouseout').subscribe(e => this.mouseOut.emit(e)));
    this._subscriptions.add(this.bindPolygonEvent('change').subscribe(e => this.change.emit(e)));
    this._subscriptions.add(this.bindPolygonEvent('touchstart').subscribe(e => this.touchStart.emit(e)));
    this._subscriptions.add(this.bindPolygonEvent('touchmove').subscribe(e => this.touchMove.emit(e)));
    this._subscriptions.add(this.bindPolygonEvent('touchend').subscribe(e => this.touchEnd.emit(e)));
  }

  private bindPolygonEvent(event: string) {
    return this.polygons.bindEvent(this._polygon, event);
  }

  private bindEditorEvents(event: string) {
    return this.polygons.bindEvent(this._editor, event);
  }

  // Public methods:
  toggleEditor(v: boolean): Promise<void> {
    if (v && !this._editor) {
      return this.polygons.loadEditor()
        .then(() => this._polygon)
        .then(c => this.polygons.createEditor(c))
        .then(editor => {
          this._editor = editor;
          // Bind events:
          this._subscriptions.add(this.bindEditorEvents('addnode').subscribe(e => this.editorAddnode.emit(e)));
          this._subscriptions.add(this.bindEditorEvents('adjust').subscribe(e => this.editorAdjust.emit(e)));
          this._subscriptions.add(this.bindEditorEvents('removenode').subscribe(e => this.editorRemovenode.emit(e)));
          this._subscriptions.add(this.bindEditorEvents('end').subscribe(e => this.editorEnd.emit(e)));
          editor.open();
        });
    }

    if (this._editor) {
      if (v) {
        this._editor.open();
      } else {
        this._editor.close();
      }
    }

    return Promise.resolve();
  }

  show(): Promise<void> {
    return this._polygon.then(p => p.show());
  }

  hide(): Promise<void> {
    return this._polygon.then(p => p.hide());
  }

  contains(point: LngLat|ILngLat): Promise<boolean> {
    return this._polygon.then(p => p.contains(point));
  }

  // Setters:
  setPath(path: PolygonPath): Promise<void> {
    return this._polygon.then(p => p.setPath(path));
  }

  setOptions(opt: PolygonOptions): Promise<void> {
    return this._polygon.then(p => p.setOptions(opt));
  }

  setExtData(ext: any): Promise<void> {
    return this._polygon.then(p => p.setExtData(ext));
  }

  // Getters:
  getPath(): Promise<number[][]> {
    return this._polygon.then(p => p.getPath());
  }

  getOptions(): Promise<PolygonOptions> {
    return this._polygon.then(p => p.getOptions());
  }

  getBounds(): Promise<Bounds> {
    return this._polygon.then(p => p.getBounds());
  }

  getExtData(): Promise<any> {
    return this._polygon.then(p => p.getExtData());
  }
}
