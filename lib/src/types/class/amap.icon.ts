import { Size } from './amap.size';
import { IIcon } from '../interface/icon.interface';

// AMap.Icon
export declare class Icon {
  constructor(opts: IIcon);
  getImageSize(): Size;
  setImageSize(size: Size): void;
}

export interface CIcon {
  new (opts: IIcon): Icon;
}
