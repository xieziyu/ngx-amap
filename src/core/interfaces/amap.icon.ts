import { IconOptions } from './amap.icon-options';
import { Size } from './amap.size';

export interface Icon extends IconOptions {
  new (opt: IconOptions): Icon;
  getImageSize(): Size;
  setImageSize(size: Size): void;
}
