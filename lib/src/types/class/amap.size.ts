import { ISize } from '../interface/size.interface';

// AMap.Size
export interface Size extends ISize {
  getWidth(): number;
  getHeight(): number;
  toString(): string;
}

export interface CSize {
  new (width: number, height: number): Size;
}
