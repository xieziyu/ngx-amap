import { SizeOptions } from './amap.size-options';
import { PixelOptions } from './amap.pixel-options';

export interface IconOptions {
  size?: SizeOptions;
  imageOffset?: PixelOptions;
  image?: string;
  imageSize?: SizeOptions;
}
