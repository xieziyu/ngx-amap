import { SizeOptions } from './amap.size-options';

export interface Size extends SizeOptions {
  new (width: number, height: number): Size;
  getWidth(): number;
  getHeight(): number;
  toString(): string;
}
