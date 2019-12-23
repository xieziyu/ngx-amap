import { Injectable } from '@angular/core';
import { MarkerOptions, IPixel } from '../../types/interface';
import { AMapClass, Marker, Map, Icon } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { MapAPIService } from '../map-api/map-api.service';
import { PixelService } from '../pixel/pixel.service';
import { IconService } from '../icon/icon.service';
import { LabelService } from '../label/label.service';
import { EventBinder } from '../../utils/event-binder';
import { PluginLoaderService } from '../plugin-loader/plugin-loader.service';

declare const AMap: AMapClass;

@Injectable()
export class MarkerService extends EventBinder {
  TAG = 'marker-service';
  private _map: Promise<Map>;

  constructor(
    private map: MapAPIService,
    private logger: LoggerService,
    private pixel: PixelService,
    private icon: IconService,
    private plugins: PluginLoaderService,
    private label: LabelService
  ) {
    super();
    this._map = map.map;
  }

  create(options: MarkerOptions, addToMap = true): Promise<Marker> {
    return this._map.then(async map => {
      if (options.offset) {
        options.offset = this.pixel.create(options.offset, 'offset');
      }

      if (options.icon && options.type === 'default') {
        options.icon = this.icon.create(options.icon);
      }

      if (options.shadow) {
        options.shadow = <Icon>this.icon.create(options.shadow, 'shadow');
      }

      if (options.label) {
        options.label = this.label.create(options.label);
      }

      if (!options.offset) { delete options.offset; }
      if (!options.icon) { delete options.icon; }
      if (!options.shadow) { delete options.shadow; }
      if (!options.label) { delete options.label; }

      if (addToMap) {
        options.map = map;
      }
      if (!options.type || options.type === 'default') {
        return new AMap.Marker(options);
      }
      if (options.type === 'svg') {
        const SvgMarker = await this.plugins.loadUI('overlay/SvgMarker');
        const shape = options.shape || {};

        // https://lbs.amap.com/api/amap-ui/demos/amap-ui-svgmarker/all-shapes
        if (!shape.shapeType) {
          shape.shapeType = 'WaterDrop';
        }
        delete options.shape;
        return new SvgMarker(new SvgMarker.Shape[shape.shapeType]({ // TODO: MarkerShape
          width: shape.width || 24,
          height: shape.keepAspectRatio ? false : shape.height || false,
          fillColor: shape && shape.fillColor,
          strokeColor: shape.strokeColor || '#000000',
          strokeWidth: shape.strokeWidth || 0
        }), options);
      }
      if (options.type === 'simple') {
        const SimpleMarker = await this.plugins.loadUI('overlay/SimpleMarker');
        options.iconStyle = options.icon;
        return new SimpleMarker(options);
      }
      if (options.type === 'awesome') {
        const AwesomeMarker = await this.plugins.loadUI('overlay/AwesomeMarker');
        return new AwesomeMarker(options);
      }
    });
  }

  destroy(marker: Promise<Marker>): Promise<void> {
    return marker.then(m => {
      m.setMap(null);
    });
  }
}
