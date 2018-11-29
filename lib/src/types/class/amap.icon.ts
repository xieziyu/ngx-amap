import { Size } from './amap.size';
import { IIcon } from '../interface/icon.interface';

// AMap.Icon
export interface Icon {
  getImageSize(): Size;
  setImageSize(size: Size): void;
}

export interface CIcon {
  new (opts: IIcon): Icon;
}
