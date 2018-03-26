import { Directive, OnInit, Input, AfterContentInit, ContentChildren, QueryList,
  OnDestroy, Output, EventEmitter, OnChanges, SimpleChanges, Optional } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoggerService } from '../../services/logger/logger.service';
import { LngLat, Size, Text, Icon, Pixel, Map } from '../../types/class';
import { ILngLat, IPixel, IIcon, TextOptions } from '../../types/interface';
import { Utils } from '../../utils/utils';
import { ChangeFilter } from '../../utils/change-filter';
import { TextService } from '../../services/text/text.service';
import { PixelService } from '../../services/pixel/pixel.service';
import { IconService } from '../../services/icon/icon.service';
import { AmapInfoWindowComponent } from '../../components/amap-info-window/amap-info-window.component';

const ALL_OPTIONS = [
  'text',
  'textAlign',
  'verticalAlign',
  'position',
  'offset',
  'topWhenClick',
  'bubble',
  'draggable',
  'raiseOnDrag',
  'cursor',
  'visible',
  'zIndex',
  'angle',
  'autoRotation',
  'animation',
  'shadow',
  'title',
  'clickable',
  'extData',
  'style'
];

@Directive({
  selector: 'amap-text',
  exportAs: 'text'
})
export class AmapTextDirective implements OnChanges, OnDestroy, AfterContentInit {
  TAG = 'amap-text';

  // These properties are supported in TextOptions:
  @Input() text: string;
  @Input() textAlign: string;
  @Input() verticalAlign: string;
  @Input() position: ILngLat;
  @Input() offset: IPixel;
  @Input() topWhenClick: boolean;
  @Input() bubble: boolean;
  @Input() draggable: boolean;
  @Input() raiseOnDrag: boolean;
  @Input() cursor: string;
  @Input() visible: boolean;
  @Input() zIndex: number;
  @Input() angle: number;
  @Input() autoRotation: boolean;
  @Input() shadow: IIcon;
  @Input() title: string;
  @Input() clickable: boolean;
  @Input() extData: any;
  @Input() style: any;

  // Extra property:
  @Input() isTop: boolean;
  @Input() animation: string;
  @Input() hidden = false;
  @Input() openInfoWindow = true;
  @Input() inCluster = false;

  // amap-text events:
  @Output() ready = new EventEmitter();
  @Output() textClick = new EventEmitter();
  @Output() dblClick = new EventEmitter();
  @Output() rightClick = new EventEmitter();
  @Output() mouseMove = new EventEmitter();
  @Output() mouseOver = new EventEmitter();
  @Output() mouseOut = new EventEmitter();
  @Output() mouseDown = new EventEmitter();
  @Output() mouseUp = new EventEmitter();
  @Output() dragStart = new EventEmitter();
  @Output() dragging = new EventEmitter();
  @Output() dragEnd = new EventEmitter();
  @Output() touchStart = new EventEmitter();
  @Output() touchMove = new EventEmitter();
  @Output() touchEnd = new EventEmitter();
  @Output() moving = new EventEmitter();
  @Output() moveend = new EventEmitter();
  @Output() movealong = new EventEmitter();

  // amap-info-window:
  @ContentChildren(AmapInfoWindowComponent) infoWindowComponent = new QueryList<AmapInfoWindowComponent>();

  private _text: Promise<Text>;
  private _subscriptions: Subscription;

  constructor(
    private logger: LoggerService,
    private texts: TextService,
    private pixel: PixelService,
    private icons: IconService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);

    if (!this._text) {
      // do not draw text when no poistion defined.
      if (!this.position) { return; }
      const options = Utils.getOptionsFor<TextOptions>(this, ALL_OPTIONS);
      this._text = this.texts.create(options, !this.inCluster);
      this.bindEvents();
      this._text.then(text => this.ready.emit(text));
      this.updateInfoWindow();
      this.updateInfoWindowPosition();
    } else {
      filter.has<string>('text').subscribe(v => this.setText(v));
      filter.has<IIcon>('shadow').subscribe(v => this.setShadow(v));
      filter.has<string>('title').subscribe(v => this.setTitle(v));
      filter.has<any>('extData').subscribe(v => this.setExtData(v));
      filter.has<boolean>('clickable').subscribe(v => this.setClickable(!!v));
      filter.has<boolean>('draggable').subscribe(v => this.setDraggable(!!v));
      filter.has<any>('visible').subscribe(v => v ? this.show() : this.hide());
      filter.has<string>('cursor').subscribe(v => this.setCursor(v));
      filter.has<string>('animation').subscribe(v => this.setAnimation(v));
      filter.has<string>('style').subscribe(v => this.setStyle(v));
      filter.has<number>('angle').subscribe(v => this.setAngle(v));
      filter.has<number>('zIndex').subscribe(v => this.setzIndex(v));
      filter.notEmpty<IPixel>('offset').subscribe(v => this.setOffset(v));
      filter.notEmpty<LngLat>('position').subscribe(v => this.setPosition(v));
    }
    filter.has<boolean>('isTop').subscribe(v => this.setTop(!!v));
    filter.has<boolean>('hidden').subscribe(v => v ? this.hide() : this.show());
  }

  ngOnDestroy() {
    if (this._text) {
      this._subscriptions.unsubscribe();
      this.texts.destroy(this._text);
    }
  }

  ngAfterContentInit() {
    this.updateInfoWindow();
    this.infoWindowComponent.changes.subscribe(() => this.updateInfoWindow());
  }

  private updateInfoWindow() {
    if (this.infoWindowComponent && this._text) {
      if (this.infoWindowComponent.length > 1) {
        this.logger.e(this.TAG, 'Expected no more than 1 info window.');
        return;
      }

      this.infoWindowComponent.forEach(component => {
        component.hostMarker = this._text;
      });
    }
  }

  private updateInfoWindowPosition() {
    if (this.infoWindowComponent && this._text) {
      this.infoWindowComponent.forEach(component => {
        component.toggleOpen();
      });
    }
  }

  private bindEvents() {
    this._subscriptions = this.bindTextEvent('click').subscribe(e => {
      if (this.openInfoWindow) {
        this.infoWindowComponent.forEach(component => {
          component.open();
        });
      }
      this.textClick.emit(e);
    });
    this._subscriptions.add(this.bindTextEvent('dblclick').subscribe(e => this.dblClick.emit(e)));
    this._subscriptions.add(this.bindTextEvent('rightclick').subscribe(e => this.rightClick.emit(e)));
    this._subscriptions.add(this.bindTextEvent('mousemove').subscribe(e => this.mouseMove.emit(e)));
    this._subscriptions.add(this.bindTextEvent('mouseover').subscribe(e => this.mouseOver.emit(e)));
    this._subscriptions.add(this.bindTextEvent('mouseout').subscribe(e => this.mouseOut.emit(e)));
    this._subscriptions.add(this.bindTextEvent('mousedown').subscribe(e => this.mouseDown.emit(e)));
    this._subscriptions.add(this.bindTextEvent('mouseup').subscribe(e => this.mouseUp.emit(e)));
    this._subscriptions.add(this.bindTextEvent('dragstart').subscribe(e => this.dragStart.emit(e)));
    this._subscriptions.add(this.bindTextEvent('dragging').subscribe(e => this.dragging.emit(e)));
    this._subscriptions.add(this.bindTextEvent('dragend').subscribe(e => this.dragEnd.emit(e)));
    this._subscriptions.add(this.bindTextEvent('touchstart').subscribe(e => this.touchStart.emit(e)));
    this._subscriptions.add(this.bindTextEvent('touchmove').subscribe(e => this.touchMove.emit(e)));
    this._subscriptions.add(this.bindTextEvent('touchend').subscribe(e => this.touchEnd.emit(e)));
    this._subscriptions.add(this.bindTextEvent('moving').subscribe(e => this.moving.emit(e)));
    this._subscriptions.add(this.bindTextEvent('moveend').subscribe(e => this.moveend.emit(e)));
    this._subscriptions.add(this.bindTextEvent('movealong').subscribe(e => this.movealong.emit(e)));
  }

  private bindTextEvent(event: string) {
    return this.texts.bindEvent(this._text, event);
  }

  get marker(): Promise<Text> {
    return this._text;
  }

  show(): Promise<void> {
    return this._text.then(m => m.show());
  }

  hide(): Promise<void> {
    return this._text.then(m => m.hide());
  }

  // Animations
  moveTo(position: ILngLat, speed: number, f?: (k: any) => any): Promise<void> {
    return this._text.then(text => text.moveTo(position, speed, f));
  }

  moveAlong(path: ILngLat[], speed: number, f?: (k: any) => any): Promise<void> {
    return this._text.then(text => text.moveAlong(path, speed, f));
  }

  stopMove(): Promise<void> {
    return this._text.then(text => text.stopMove());
  }

  pauseMove(): Promise<void> {
    return this._text.then(text => text.pauseMove());
  }

  resumeMove(): Promise<void> {
    return this._text.then(text => text.resumeMove());
  }

  // Setters
  setText(text: string): Promise<void> {
    return this._text.then(t => t.setText(text));
  }

  setStyle(obj: any): Promise<void> {
    return this._text.then(t => t.setStyle(obj));
  }

  setOffset(offset: IPixel): Promise<void> {
    return this._text.then(text => {
      const value = this.pixel.create(offset, 'offset');
      if (value) {
        text.setOffset(value);
      }
    });
  }

  setShadow(shadow: IIcon): Promise<void> {
    return this._text.then(text => {
      const value = <Icon>this.icons.create(shadow, 'shadow');
      text.setShadow(value);
    });
  }

  setDraggable(draggable: boolean): Promise<void> {
    return this._text.then(text => text.setDraggable(draggable));
  }

  setClickable(clickable: boolean): Promise<void> {
    return this._text.then(text => text.setClickable(clickable));
  }

  setPosition(position: LngLat): Promise<void> {
    return this._text.then(text => {
      text.setPosition(position);
      this.updateInfoWindowPosition();
    });
  }

  setAngle(angle: number): Promise<void> {
    return this._text.then(text => text.setAngle(angle));
  }

  setzIndex(zIndex: number): Promise<void> {
    return this._text.then(text => text.setzIndex(zIndex));
  }

  setTitle(title: string): Promise<void> {
    return this._text.then(text => text.setTitle(title));
  }

  setCursor(cursor: string): Promise<void> {
    return this._text.then(text => text.setCursor(cursor));
  }

  setTop(isTop: boolean): Promise<void> {
    return this._text.then(text => text.setTop(isTop));
  }

  setExtData(data: any): Promise<void> {
    return this._text.then(text => text.setExtData(data));
  }

  setAnimation(animation: string): Promise<void> {
    return this._text.then(text => text.setAnimation(animation));
  }

  // Getters
  getText(): Promise<string> {
    return this._text.then(text => text.getText());
  }

  getOffset(): Promise<Pixel> {
    return this._text.then(text => text.getOffset());
  }

  getPosition(): Promise<LngLat> {
    return this._text.then(text => text.getPosition());
  }

  getAngle(): Promise<number> {
    return this._text.then(text => text.getAngle());
  }

  getzIndex(): Promise<number> {
    return this._text.then(text => text.getzIndex());
  }

  getTitle(): Promise<string> {
    return this._text.then(text => text.getTitle());
  }

  getTop(): Promise<boolean> {
    return this._text.then(text => text.getTop());
  }

  getShadow(): Promise<Icon> {
    return this._text.then(text => text.getShadow());
  }

  getExtData(): Promise<any> {
    return this._text.then(text => text.getExtData());
  }

  getMap(): Promise<Map> {
    return this._text.then(text => text.getMap());
  }

  getAnimation(): Promise<string> {
    return this._text.then(text => text.getAnimation());
  }

  getClickable(): Promise<boolean> {
    return this._text.then(text => text.getClickable());
  }

  getDraggable(): Promise<boolean> {
    return this._text.then(text => text.getDraggable());
  }
}
