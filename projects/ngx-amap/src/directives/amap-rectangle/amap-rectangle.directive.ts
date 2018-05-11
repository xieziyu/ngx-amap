import { Directive, Input, Output, OnDestroy,
  EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggerService } from '../../services/logger/logger.service';
import { Map, LngLat, Bounds, RectangleEditor } from '../../types/class';
import { Rectangle } from '../../types/class';
import { RectangleOptions, ILngLat } from '../../types/interface';
import { Utils } from '../../utils/utils';
import { ChangeFilter } from '../../utils/change-filter';
import { RectangleService } from '../../services/rectangle/rectangle.service';

const ALL_OPTIONS = [
  'zIndex',
  'bounds',
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
  selector: 'amap-rectangle',
  exportAs: 'rectangle'
})
export class AmapRectangleDirective implements OnChanges, OnDestroy {
  TAG = 'amap-rectangle';

  // These properties are supported in RectangleOptions:
  @Input() zIndex: number;
  @Input() bounds: Bounds;
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
  @Input() options: RectangleOptions;

  // Extra property:
  @Input() hidden = false;
  @Input() editor = false;

  // amap-rectangle events:
  @Output() rectangleClick = new EventEmitter();
  @Output() ready = new EventEmitter();
  @Output() dblClick = new EventEmitter();
  @Output() rightClick = new EventEmitter();
  @Output() rectangleHide = new EventEmitter();
  @Output() rectangleShow = new EventEmitter();
  @Output() mouseDown = new EventEmitter();
  @Output() mouseUp = new EventEmitter();
  @Output() mouseOver = new EventEmitter();
  @Output() mouseOut = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() touchStart = new EventEmitter();
  @Output() touchMove = new EventEmitter();
  @Output() touchEnd = new EventEmitter();

  // editor events:
  @Output() editorAdjust = new EventEmitter();
  @Output() editorEnd = new EventEmitter();

  private _rectangle: Promise<Rectangle>;
  private _subscriptions: Subscription;

  private _editor: RectangleEditor;

  constructor(
    private logger: LoggerService,
    private rectangles: RectangleService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);

    if (!this._rectangle) {
      // do not draw rectangle when no bounds defined.
      if (!this.bounds && !(this.options && this.options.bounds)) { return; }
      const options = this.options || Utils.getOptionsFor<RectangleOptions>(this, ALL_OPTIONS);
      this._rectangle = this.rectangles.create(options);
      this.bindEvents();
      this._rectangle.then(p => this.ready.emit(p));
      this.toggleEditor(this.editor);
    } else {
      filter.has<RectangleOptions>('options').subscribe(v => this.setOptions(v || {}));
      filter.has<any>('extData').subscribe(v => this.setExtData(v));
      filter.notEmpty<Bounds>('bounds').subscribe(v => this.setBounds(v));
    }

    filter.has<boolean>('hidden').subscribe(v => v ? this.hide() : this.show());
    filter.has<boolean>('editor').subscribe(v => this.toggleEditor(v));
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this.rectangles.destroy(this._rectangle);
  }

  private bindEvents() {
    this._subscriptions = this.bindRectangleEvent('click').subscribe(e => this.rectangleClick.emit(e));
    this._subscriptions.add(this.bindRectangleEvent('dblclick').subscribe(e => this.dblClick.emit(e)));
    this._subscriptions.add(this.bindRectangleEvent('rightclick').subscribe(e => this.rightClick.emit(e)));
    this._subscriptions.add(this.bindRectangleEvent('hide').subscribe(e => this.rectangleHide.emit(e)));
    this._subscriptions.add(this.bindRectangleEvent('show').subscribe(e => this.rectangleShow.emit(e)));
    this._subscriptions.add(this.bindRectangleEvent('mousedown').subscribe(e => this.mouseDown.emit(e)));
    this._subscriptions.add(this.bindRectangleEvent('mouseup').subscribe(e => this.mouseUp.emit(e)));
    this._subscriptions.add(this.bindRectangleEvent('mouseover').subscribe(e => this.mouseOver.emit(e)));
    this._subscriptions.add(this.bindRectangleEvent('mouseout').subscribe(e => this.mouseOut.emit(e)));
    this._subscriptions.add(this.bindRectangleEvent('change').subscribe(e => this.change.emit(e)));
    this._subscriptions.add(this.bindRectangleEvent('touchstart').subscribe(e => this.touchStart.emit(e)));
    this._subscriptions.add(this.bindRectangleEvent('touchmove').subscribe(e => this.touchMove.emit(e)));
    this._subscriptions.add(this.bindRectangleEvent('touchend').subscribe(e => this.touchEnd.emit(e)));
  }

  private bindRectangleEvent(event: string) {
    return this.rectangles.bindEvent(this._rectangle, event);
  }

  private bindEditorEvents(event: string) {
    return this.rectangles.bindEvent(this._editor, event);
  }

  // Public methods:
  toggleEditor(v: boolean): Promise<void> {
    if (v && !this._editor) {
      return this.rectangles.loadEditor()
        .then(() => this._rectangle)
        .then(c => this.rectangles.createEditor(c))
        .then(editor => {
          this._editor = editor;
          // Bind events:
          this._subscriptions.add(this.bindEditorEvents('adjust').subscribe(e => this.editorAdjust.emit(e)));
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
    return this._rectangle.then(r => r.show());
  }

  hide(): Promise<void> {
    return this._rectangle.then(r => r.hide());
  }

  contains(point: LngLat|ILngLat): Promise<boolean> {
    return this._rectangle.then(r => r.contains(point));
  }

  // Setters:
  setBounds(bounds: Bounds): Promise<void> {
    return this._rectangle.then(r => r.setBounds(bounds));
  }

  setOptions(opt: RectangleOptions): Promise<void> {
    return this._rectangle.then(r => r.setOptions(opt));
  }

  setExtData(ext: any): Promise<void> {
    return this._rectangle.then(r => r.setExtData(ext));
  }

  // Getters:
  getOptions(): Promise<RectangleOptions> {
    return this._rectangle.then(r => r.getOptions());
  }

  getBounds(): Promise<Bounds> {
    return this._rectangle.then(r => r.getBounds());
  }

  getExtData(): Promise<any> {
    return this._rectangle.then(r => r.getExtData());
  }
}
