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
    return this.verifyPixel(name, pixel) ? this._convertPixel(pixel) : undefined;
  }

  convertSize(name: string, size: SizeOptions): AMapType.Size {
    return this.verifySize(name, size) ? this._convertSize(size) : undefined;
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

  verifyPixel(name: string, pixel: PixelOptions) {
    if (typeof pixel.x !== 'number' || typeof pixel.y !== 'number') {
      console.error(`[amap-marker] '${name}' should have type {x: number, y: number}`);
      return false;
    }
    return true;
  }

  verifySize(name: string, size: SizeOptions) {
    if (typeof size.width !== 'number' || typeof size.height !== 'number') {
      console.error(`[amap-marker] '${name}' should have type {width: number, height: number}`);
      return false;
    }
    return true;
  }

  private _convertPixel(pixel: PixelOptions): AMapType.Pixel {
    return new AMap.Pixel(pixel.x, pixel.y);
  }

  private _convertSize(size: SizeOptions): AMapType.Size {
    return new AMap.Size(size.width, size.height);
  }
}
