import { Directive, Input, Output, OnDestroy,
  EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoggerService } from '../../services/logger/logger.service';
import { Polyline, Map, Bounds, PolyEditor } from '../../types/class';
import { PolylineOptions } from '../../types/interface';
import { Utils } from '../../utils/utils';
import { ChangeFilter } from '../../utils/change-filter';
import { PolylineService } from '../../services/polyline/polyline.service';

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
  selector: 'amap-polyline',
  exportAs: 'polyline'
})
export class AmapPolylineDirective implements OnChanges, OnDestroy {
  TAG = 'amap-polyline';

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
  @Input() editor = false;

  // amap-polyline events:
  @Output() polylineClick = new EventEmitter();
  @Output() ready = new EventEmitter();
  @Output() dblClick = new EventEmitter();
  @Output() rightClick = new EventEmitter();
  @Output() polylineHide = new EventEmitter();
  @Output() polylineShow = new EventEmitter();
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

  private _polyline: Promise<Polyline>;
  private _subscriptions: Subscription;

  private _editor: PolyEditor;

  constructor(
    private logger: LoggerService,
    private polylines: PolylineService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);

    if (!this._polyline) {
      const options = this.options || Utils.getOptionsFor<PolylineOptions>(this, ALL_OPTIONS);
      this._polyline = this.polylines.create(options);
      this.bindEvents();
      this._polyline.then(p => this.ready.emit(p));
    } else {
      filter.has<number[][]>('path').subscribe(v => this.setPath(v));
      filter.has<PolylineOptions>('options').subscribe(v => this.setOptions(v || {}));
      filter.has<any>('extData').subscribe(v => this.setExtData(v));
    }

    filter.has<boolean>('hidden').subscribe(v => v ? this.hide() : this.show());
    filter.has<boolean>('editor').subscribe(v => this.toggleEditor(v));
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this.polylines.destroy(this._polyline);
  }

  private bindEvents() {
    this._subscriptions = this.bindPolylineEvent('click').subscribe(e => this.polylineClick.emit(e));
    this._subscriptions.add(this.bindPolylineEvent('dblclick').subscribe(e => this.dblClick.emit(e)));
    this._subscriptions.add(this.bindPolylineEvent('rightclick').subscribe(e => this.rightClick.emit(e)));
    this._subscriptions.add(this.bindPolylineEvent('hide').subscribe(e => this.polylineHide.emit(e)));
    this._subscriptions.add(this.bindPolylineEvent('show').subscribe(e => this.polylineShow.emit(e)));
    this._subscriptions.add(this.bindPolylineEvent('mousedown').subscribe(e => this.mouseDown.emit(e)));
    this._subscriptions.add(this.bindPolylineEvent('mouseup').subscribe(e => this.mouseUp.emit(e)));
    this._subscriptions.add(this.bindPolylineEvent('mouseover').subscribe(e => this.mouseOver.emit(e)));
    this._subscriptions.add(this.bindPolylineEvent('mouseout').subscribe(e => this.mouseOut.emit(e)));
    this._subscriptions.add(this.bindPolylineEvent('change').subscribe(e => this.change.emit(e)));
    this._subscriptions.add(this.bindPolylineEvent('touchstart').subscribe(e => this.touchStart.emit(e)));
    this._subscriptions.add(this.bindPolylineEvent('touchmove').subscribe(e => this.touchMove.emit(e)));
    this._subscriptions.add(this.bindPolylineEvent('touchend').subscribe(e => this.touchEnd.emit(e)));
  }

  private bindPolylineEvent(event: string) {
    return this.polylines.bindEvent(this._polyline, event);
  }

  private bindEditorEvents(event: string) {
    return this.polylines.bindEvent(this._editor, event);
  }

  // Public methods:
  toggleEditor(v: boolean): Promise<void> {
    if (v && !this._editor) {
      return this.polylines.loadEditor()
        .then(() => this._polyline)
        .then(c => this.polylines.createEditor(c))
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
    return this._polyline.then(p => p.show());
  }

  hide(): Promise<void> {
    return this._polyline.then(p => p.hide());
  }

  // Setters:
  setPath(path: number[][]): Promise<void> {
    return this._polyline.then(p => p.setPath(path));
  }

  setOptions(opt: PolylineOptions): Promise<void> {
    return this._polyline.then(p => p.setOptions(opt));
  }

  setExtData(ext: any): Promise<void> {
    return this._polyline.then(p => p.setExtData(ext));
  }

  // Getters:
  getPath(): Promise<number[][]> {
    return this._polyline.then(p => p.getPath());
  }

  getOptions(): Promise<PolylineOptions> {
    return this._polyline.then(p => p.getOptions());
  }

  getLength(): Promise<number> {
    return this._polyline.then(p => p.getLength());
  }

  getBounds(): Promise<Bounds> {
    return this._polyline.then(p => p.getBounds());
  }

  getExtData(): Promise<any> {
    return this._polyline.then(p => p.getExtData());
  }
}
