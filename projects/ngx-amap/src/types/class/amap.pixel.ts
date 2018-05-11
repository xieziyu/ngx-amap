import { IPixel } from '../interface/pixel.interface';

// AMap.Pixel
export interface Pixel extends IPixel {
  getX(): number;
  getY(): number;
  equals(point: Pixel): boolean;
  toString(): string;
}

export interface CPixel {
  new (x: number, y: number): Pixel;
}
