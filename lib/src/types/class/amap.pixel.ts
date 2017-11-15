// AMap.Pixel
export declare class Pixel {
  constructor(x: number, y: number);
  getX(): number;
  getY(): number;
  equals(point: Pixel): boolean;
  toString(): string;
}

export interface CPixel {
  new (x: number, y: number): Pixel;
}
