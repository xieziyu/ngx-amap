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

  constructor(private pluginMgr: PluginManagerService) {
    super();
  }

  private _getOptions(): ToolbarOptions {
    const options: ToolbarOptions = {};

    ALL_OPTIONS.forEach(key => {
      if (this[key] !== undefined) {
        options[key] = this[key];
      }
    });

    return options;
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit() {
    if (!this._id) {
      this._id = this.pluginMgr.addToolBar(this, this._getOptions());
    }
  }

  ngOnDestroy() {
    this.pluginMgr.deletePlugin(this);
  }
}
