import { Directive, Input, Output, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { PixelOptions } from '../../interfaces/amap.pixel-options';
import { Marker } from '../../interfaces/amap.marker';
import { ToolbarOptions } from '../../interfaces/amap.toolbar-options';
import { PluginManagerService } from '../../services/plugin/plugin-manager/plugin-manager.service';
import { AMapPlugin } from './amap-plugin';

const ALL_OPTIONS = [
  'offset',
  'position',
  'ruler',
  'noIpLocate',
  'locate',
  'liteStyle',
  'direction',
  'autoPosition',
  'locationMarker',
  'useNative'
];

@Directive({
  selector: 'amap-tool-bar'
})
export class AmapToolBarDirective extends AMapPlugin implements OnInit, OnChanges, OnDestroy {
  // These properties are supported in ToolbarOptions:
  @Input() offset: PixelOptions;
  @Input() position: string;
  @Input() ruler: boolean;
  @Input() noIpLocate: boolean;
  @Input() locate: boolean;
  @Input() liteStyle: boolean;
  @Input() direction: boolean;
  @Input() autoPosition: boolean;
  @Input() locationMarker: Marker;
  @Input() useNative: boolean;

  // amap-tool-bar events:
  @Output() zoomChanged = new EventEmitter();
  @Output() location = new EventEmitter();

  constructor(private pluginMgr: PluginManagerService) {
    super();
  }

  private _getOptions(): ToolbarOptions {
    const options: ToolbarOptions = {};

    ALL_OPTIONS.forEach(key => {
      if (this[key] !== undefined && this[key] !== null) {
        options[key] = this[key];
      }
    });

    return options;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this._id) {
      this._init();
    } else {
      this.pluginMgr.onToolBarOptionChange(this._id, changes);
    }

    this.pluginMgr.onPluginCommonPropertyChange(this._id, changes);
  }

  ngOnInit() {
    if (!this._id) {
      this._init();
    }
  }

  ngOnDestroy() {
    this.pluginMgr.deletePlugin(this);
    this._unsubscribeEvents();
  }

  private _init() {
    this._id = this.pluginMgr.addToolBar(this, this._getOptions());
    this._observeEvents();
  }

  private _observeEvents() {
    this._subscriptions = this.pluginMgr.observeEvent(this._id, 'zoomchanged').subscribe(e => this.zoomChanged.emit(e));
    this._subscriptions.add(this.pluginMgr.observeEvent(this._id, 'location').subscribe(e => this.location.emit(e)));
  }
}
