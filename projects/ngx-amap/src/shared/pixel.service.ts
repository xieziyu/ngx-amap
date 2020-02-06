import { Injectable } from '@angular/core';
import { IPixel } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PixelService {
  constructor() {}

  create(options: IPixel | AMap.Pixel): AMap.Pixel | null {
    if (!options) {
      return null;
    }
    if (options instanceof AMap.Pixel) {
      return options;
    }
    if (Array.isArray(options)) {
      return new AMap.Pixel(options[0], options[1]);
    }
    return new AMap.Pixel(options.x || 0, options.y || 0, options.round);
  }
}
