import { ISize } from '../interface/size.interface';

// AMap.Size
export declare class Size implements ISize {
  width: number;
  height: number;

  constructor(width: number, height: number);
  getWidth(): number;
  getHeight(): number;
  toString(): string;
}

export interface CSize {
  new (width: number, height: number): Size;
}
