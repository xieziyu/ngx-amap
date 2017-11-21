import { IPixel } from '../interface/pixel.interface';

// AMap.Pixel
export declare class Pixel implements IPixel {
  x: number;
  y: number;

  constructor(x: number, y: number);
  getX(): number;
  getY(): number;
  equals(point: Pixel): boolean;
  toString(): string;
}

export interface CPixel {
  new (x: number, y: number): Pixel;
}
