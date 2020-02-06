export interface PixelOptions {
  x: number;
  y: number;
  round?: boolean;
}

export type IPixel = PixelOptions | [number, number];
