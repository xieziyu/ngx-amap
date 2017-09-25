import { Injectable, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MapAPIWrapperService } from '../../map-api-wrapper/map-api-wrapper.service';
import { AmapToolBarDirective } from '../../../directives/plugins/amap-tool-bar.directive';
import { AMapPlugin } from '../../../directives/plugins/amap-plugin';
import { ToolbarOptions } from '../../../interfaces/amap.toolbar-options';
import { ToolBar } from '../../../interfaces/amap.toolbar';
import * as AMapType from '../../../interfaces/amap.interface';
import { AMapClass } from '../../../interfaces/amap.interface';
import { AMapPluginType } from '../../../interfaces/amap.plugin';
import { PixelOptions } from '../../../interfaces/amap.pixel-options';
import { KeyMap } from '../../../utils/key-map';
import { OptionsChangeDetectorService } from '../../options-change-detector/options-change-detector.service';

declare const AMap: AMapClass;

@Injectable()
export class PluginManagerService {
  private _map: Promise<AMapType.Map>;
  private _plugins = new KeyMap<Promise<AMapPluginType>>();
  private _totalPlugin = 0;
  private _freePluginID = 0;

  constructor(private mapAPI: MapAPIWrapperService, private detector: OptionsChangeDetectorService) {
    this._map = mapAPI.map;
  }

  addToolBar(toolbar: AmapToolBarDirective, options: ToolbarOptions): string {
    const toolbarPromise = this._createToolBar(options);
    const id = this._getFreePluginID();
    this._plugins.set(id, toolbarPromise);
    return id;
  }

  deletePlugin(plugin: AMapPlugin): Promise<void> {
    const id = plugin.id;
    const pluginPromise = this._plugins.get(id);
    if (!pluginPromise) {
      return Promise.resolve();
    }

    return this._map.then(map => pluginPromise
      .then(t => map.removeControl(t))
      .then(() => { this._plugins.delete(id); })
    );
  }

  private _getFreePluginID(): string {
    return (++this._freePluginID).toString();
  }

  private _createToolBar(options: ToolbarOptions, addToMap = true): Promise<ToolBar> {
    return new Promise<ToolBar>(resolve => {
      this._map.then(map => {
        map.plugin('AMap.ToolBar', () => {
          if (options.offset) {
            options.offset = this.convertPixel('offset', options.offset);
            if (options.offset === undefined) {
              delete options.offset;
            }
          }

          const toolbar = new AMap.ToolBar();
          if (addToMap) {
            map.addControl(toolbar);
          }

          resolve(toolbar);
        });
      });
    });
  }

  observeEvent(pluginId: string, event: string): Observable<any> {
    return Observable.create(observer => {
      const pluginPromise = this._plugins.get(pluginId);

      if (pluginPromise) {
        let listenerPromise = pluginPromise.then(plugin => {
          return AMap.event.addListener(plugin, event, (e) => {
            observer.next(e);
          }, this);
        });

        return () => {
          listenerPromise.then(listener => {
            AMap.event.removeListener(listener);
            listenerPromise = null;
          });
        };
      }
    });
  }

  convertPixel(name: string, pixel: PixelOptions): AMapType.Pixel {
    return this.mapAPI.verifyPixel('plugin-manager', name, pixel) ? this.mapAPI.createPixel(pixel) : undefined;
  }

  onToolBarOptionChange(pluginId: string, changes: SimpleChanges) {
    const pluginPromise = this._plugins.get(pluginId);

    if (pluginPromise) {
      pluginPromise.then(plugin => {
        this.detector.scan<PixelOptions>(changes, 'offset').subscribe(offset => {
          const value = this.convertPixel('offset', offset.value);
          if (value) {
            plugin.setOffset(value);
          }
        });

        this.detector.scan<PixelOptions>(changes, 'offset').subscribe(offset => {
          const value = this.convertPixel('offset', offset.value);
          if (value) {
            plugin.setOffset(value);
          }
        });

        this.detector.scan<boolean>(changes, 'ruler').subscribe(ruler => {
          if (ruler.value) {
            plugin.showRuler();
          } else {
            plugin.hideRuler();
          }
        });

        this.detector.scan<boolean>(changes, 'direction').subscribe(direction => {
          if (direction.value) {
            plugin.showDirection();
          } else {
            plugin.hideDirection();
          }
        });

        this.detector.scan<boolean>(changes, 'locate').subscribe(locate => {
          if (locate.value) {
            plugin.showLocation();
          } else {
            plugin.hideLocation();
          }
        });
      });
    }
  }

  onPluginCommonPropertyChange(pluginId: string, changes: SimpleChanges) {
    const pluginPromise = this._plugins.get(pluginId);

    if (pluginPromise) {
      pluginPromise.then(plugin => {
        this.detector.scan<boolean>(changes, 'hidden').subscribe(hidden => {
          if (hidden.value) {
            plugin.hide();
          } else {
            plugin.show();
          }
        });
      });
    }
  }
}
