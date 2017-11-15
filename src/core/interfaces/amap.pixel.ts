import { PixelOptions } from './amap.pixel-options';

export interface Pixel extends PixelOptions {
  new (x: number, y: number): Pixel;
  getX(): number;
  getY(): number;
  equals(point: Pixel): boolean;
  toString(): string;
}
