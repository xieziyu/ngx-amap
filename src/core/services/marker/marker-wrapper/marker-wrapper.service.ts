import { Injectable } from '@angular/core';
import { MapAPIWrapperService } from '../../map-api-wrapper/map-api-wrapper.service';
import * as AMapType from '../../../interfaces/amap.interface';
import { AMapClass } from '../../../interfaces/amap.interface';
import { MarkerOptions } from '../../../interfaces/amap.marker-options';
import { PixelOptions } from '../../../interfaces/amap.pixel-options';
import { IconOptions } from '../../../interfaces/amap.icon-options';
import { SizeOptions } from '../../../interfaces/amap.size-options';
import { LabelOptions } from '../../../interfaces/amap.label-options';

declare const AMap: AMapClass;

@Injectable()
export class MarkerWrapperService {
  private _map: Promise<AMapType.Map>;

  constructor(private mapAPI: MapAPIWrapperService) {
    this._map = mapAPI.map;
  }

  createMarker(markerOption: MarkerOptions, addToMap = true): Promise<AMapType.Marker> {
    return this._map.then(map => {
      if (addToMap) {
        markerOption.map = map;
      }

      if (markerOption.offset) {
        markerOption.offset = this.convertPixel('offset', markerOption.offset);
        if (markerOption.offset === undefined) {
          delete markerOption.offset;
        }
      }

      if (markerOption.label) {
        markerOption.label = this.convertLabel(markerOption.label);
        if (markerOption.label === undefined) {
          delete markerOption.label;
        }
      }

      if (markerOption.icon) {
        markerOption.icon = this.convertIcon('icon', markerOption.icon);
        if (markerOption.icon === undefined) {
          delete markerOption.icon;
        }
      }

      if (markerOption.shadow) {
        markerOption.shadow = <AMapType.Icon>this.convertIcon('shadow', markerOption.shadow);
      }

      return new AMap.Marker(markerOption);
    });
  }

  convertPixel(name: string, pixel: PixelOptions): AMapType.Pixel {
    return this.mapAPI.verifyPixel('amap-marker', name, pixel) ? this.mapAPI.createPixel(pixel) : undefined;
  }

  convertSize(name: string, size: SizeOptions): AMapType.Size {
    return this.mapAPI.verifySize('amap-marker', name, size) ? this.mapAPI.createSize(size) : undefined;
  }

  convertIcon(name: string, icon: string|IconOptions): string|AMapType.Icon {
    if (icon === null || icon === undefined) { return undefined; }

    if (typeof icon !== 'string') {
      if (icon.size) {
        icon.size = this.convertSize(`${name}.size`, icon.size);
        if (icon.size === undefined) {
          delete icon.size;
        }
      }

      if (icon.imageSize) {
        icon.imageSize = this.convertSize(`${name}.size`, icon.imageSize);
        if (icon.imageSize === undefined) {
          delete icon.imageSize;
        }
      }

      if (icon.imageOffset) {
        icon.imageOffset = this.convertPixel(`${name}.imageOffset`, icon.imageOffset);
        if (icon.imageOffset === undefined) {
          delete icon.imageOffset;
        }
      }

      return new AMap.Icon(icon);
    }

    return icon;
  }

  convertLabel(label: LabelOptions): AMapType.Label {
    if (label === null || label === undefined) {
      return undefined;
    }

    return {
      content: label.content,
      offset: this.convertPixel('label.offset', label.offset)
    };
  }
}
