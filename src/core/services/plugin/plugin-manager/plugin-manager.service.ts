import { Injectable } from '@angular/core';
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

declare const AMap: AMapClass;

@Injectable()
export class PluginManagerService {
  private _map: Promise<AMapType.Map>;
  private _plugins = new KeyMap<Promise<AMapPluginType>>();
  private _totalPlugin = 0;
  private _freePluginID = 0;

  constructor(private mapAPI: MapAPIWrapperService) {
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

  convertPixel(name: string, pixel: PixelOptions): AMapType.Pixel {
    return this.mapAPI.verifyPixel('plugin-manager', name, pixel) ? this.mapAPI.createPixel(pixel) : undefined;
  }
}
