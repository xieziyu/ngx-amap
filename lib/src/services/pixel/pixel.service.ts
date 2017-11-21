import { Injectable } from '@angular/core';
import { IPixel } from '../../types/interface';
import { AMapClass, Pixel } from '../../types/class';
import { LoggerService } from '../logger';

declare const AMap: AMapClass;

@Injectable()
export class PixelService {
  TAG = 'pixel-service';

  constructor(private logger: LoggerService) {}

  create(options: IPixel, name?: string): Pixel {
    if (this.verify(options, name)) {
      return new AMap.Pixel(options.x, options.y);
    } else {
      return undefined;
    }
  }

  verify(pixel: IPixel, name?: string) {
    if (typeof pixel.x !== 'number' || typeof pixel.y !== 'number') {
      this.logger.e(`${name || 'pixel'} should have type {x: number, y: number}`);
      return false;
    }
    return true;
  }
}
