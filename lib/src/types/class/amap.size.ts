// AMap.Size
export declare class Size {
  constructor(width: number, height: number);
  getWidth(): number;
  getHeight(): number;
  toString(): string;
}

export interface CSize {
  new (width: number, height: number): Size;
}
