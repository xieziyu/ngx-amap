import { Directive, Input, Output, OnDestroy,
  EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { BezierCurve, Map, Bounds } from '../../types/class';
import { BezierCurveOptions } from '../../types/interface';
import { CurvePath } from '../../types/interface/overlays/bezier-curve-options.interface';
import { Utils } from '../../utils/utils';
import { ChangeFilter } from '../../utils/change-filter';
import { BezierCurveService } from '../../services/bezier-curve/bezier-curve.service';
import { BezierCurveEditor, BezierCurveEditorOptions } from '../../types/class/amap.editor';

const ALL_OPTIONS = [
  'path',
  'strokeColor',
  'strokeOpacity',
  'strokeWeight',
  'strokeStyle',
  'strokeDasharray',
  'zIndex',
  'showDir',
  'bubble',
  'cursor',
  'isOutline',
  'outlineColor',
  'borderWeight',
];

@Directive({
  selector: 'amap-bezier-curve',
  exportAs: 'bezier-curve'
})
export class AmapBezierCurveDirective implements OnChanges, OnDestroy {
  TAG = 'amap-bezier-curve';

  // These properties are supported in BezierCurveOptions:
  @Input() path: CurvePath;
  @Input() zIndex: number;
  @Input() bubble: boolean;
  @Input() isOutline: boolean;
  @Input() borderWeight: number;
  @Input() outlineColor: string;
  @Input() strokeColor: string;
  @Input() strokeOpacity: number;
  @Input() strokeWeight: number;
  @Input() strokeStyle: string;
  @Input() strokeDasharray: number[];
  @Input() extData: any;
  @Input() showDir: boolean;
  @Input() cursor: string;

  // This options property will override other property:
  @Input() options: BezierCurveOptions;

  // Extra property:
  @Input() hidden = false;
  @Input() editor = false;
  @Input() editorOptions: BezierCurveEditorOptions;

  // amap-bezier-curve events:
  @Output() bezierCurveClick = new EventEmitter();
  @Output() ready = new EventEmitter();
  @Output() dblClick = new EventEmitter();
  @Output() rightClick = new EventEmitter();
  @Output() bezierCurveHide = new EventEmitter();
  @Output() bezierCurveShow = new EventEmitter();
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

  private _bezierCurve: Promise<BezierCurve>;
  private _subscriptions: Subscription;

  private _editor: BezierCurveEditor;

  constructor(
    private bezierCurves: BezierCurveService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);

    if (!this._bezierCurve) {
      const options = this.options || Utils.getOptionsFor<BezierCurveOptions>(this, ALL_OPTIONS);
      this._bezierCurve = this.bezierCurves.create(options);
      this.bindEvents();
      this._bezierCurve.then(p => this.ready.emit(p));
    } else {
      filter.has<CurvePath>('path').subscribe(v => this.setPath(v));
      filter.has<BezierCurveOptions>('options').subscribe(v => this.setOptions(v || {}));
      filter.has<any>('extData').subscribe(v => this.setExtData(v));
    }

    filter.has<boolean>('hidden').subscribe(v => v ? this.hide() : this.show());
    filter.has<boolean>('editor').subscribe(v => this.toggleEditor(v));
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this.bezierCurves.destroy(this._bezierCurve);
  }

  private bindEvents() {
    this._subscriptions = this.bindBezierCurveEvent('click').subscribe(e => this.bezierCurveClick.emit(e));
    this._subscriptions.add(this.bindBezierCurveEvent('dblclick').subscribe(e => this.dblClick.emit(e)));
    this._subscriptions.add(this.bindBezierCurveEvent('rightclick').subscribe(e => this.rightClick.emit(e)));
    this._subscriptions.add(this.bindBezierCurveEvent('hide').subscribe(e => this.bezierCurveHide.emit(e)));
    this._subscriptions.add(this.bindBezierCurveEvent('show').subscribe(e => this.bezierCurveShow.emit(e)));
    this._subscriptions.add(this.bindBezierCurveEvent('mousedown').subscribe(e => this.mouseDown.emit(e)));
    this._subscriptions.add(this.bindBezierCurveEvent('mouseup').subscribe(e => this.mouseUp.emit(e)));
    this._subscriptions.add(this.bindBezierCurveEvent('mouseover').subscribe(e => this.mouseOver.emit(e)));
    this._subscriptions.add(this.bindBezierCurveEvent('mouseout').subscribe(e => this.mouseOut.emit(e)));
    this._subscriptions.add(this.bindBezierCurveEvent('change').subscribe(e => this.change.emit(e)));
    this._subscriptions.add(this.bindBezierCurveEvent('touchstart').subscribe(e => this.touchStart.emit(e)));
    this._subscriptions.add(this.bindBezierCurveEvent('touchmove').subscribe(e => this.touchMove.emit(e)));
    this._subscriptions.add(this.bindBezierCurveEvent('touchend').subscribe(e => this.touchEnd.emit(e)));
  }

  private bindBezierCurveEvent(event: string) {
    return this.bezierCurves.bindEvent(this._bezierCurve, event);
  }

  private bindEditorEvents(event: string) {
    return this.bezierCurves.bindEvent(this._editor, event);
  }

  // Public methods:
  toggleEditor(v: boolean): Promise<void> {
    if (v && !this._editor) {
      return this.bezierCurves.loadEditor()
        .then(() => this._bezierCurve)
        .then(c => this.bezierCurves.createEditor(c, this.editorOptions))
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
    return this._bezierCurve.then(p => p.show());
  }

  hide(): Promise<void> {
    return this._bezierCurve.then(p => p.hide());
  }

  // Setters:
  setPath(path: CurvePath): Promise<void> {
    return this._bezierCurve.then(p => p.setPath(path));
  }

  setOptions(opt: BezierCurveOptions): Promise<void> {
    return this._bezierCurve.then(p => p.setOptions(opt));
  }

  setExtData(ext: any): Promise<void> {
    return this._bezierCurve.then(p => p.setExtData(ext));
  }

  // Getters:
  getPath(): Promise<number[][]> {
    return this._bezierCurve.then(p => p.getPath());
  }

  getOptions(): Promise<BezierCurveOptions> {
    return this._bezierCurve.then(p => p.getOptions());
  }

  getLength(): Promise<number> {
    return this._bezierCurve.then(p => p.getLength());
  }

  getBounds(): Promise<Bounds> {
    return this._bezierCurve.then(p => p.getBounds());
  }

  getExtData(): Promise<any> {
    return this._bezierCurve.then(p => p.getExtData());
  }
}
