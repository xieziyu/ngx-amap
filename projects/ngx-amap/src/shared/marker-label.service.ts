import { Injectable } from '@angular/core';
import { PixelService } from './pixel.service';
import { IMarkerLabel } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class MarkerLabelService {
  constructor(private pixel: PixelService) {}

  create(options: IMarkerLabel): AMap.Marker.Label | null {
    if (options) {
      const label: AMap.Marker.Label = {};
      if (options.content !== undefined) {
        label.content = options.content;
      }
      if (options.offset !== undefined) {
        if (options.offset instanceof AMap.Pixel) {
          label.offset = options.offset;
        } else {
          label.offset = this.pixel.create(options.offset);
        }
      }
      if (options.direction !== undefined) {
        label.direction = options.direction;
      }
      return label;
    }
    return null;
  }
}
