import { ISize } from './size.interface';
import { IPixel } from './pixel.interface';

export interface IIcon {
  size?: ISize | AMap.SizeValue;
  imageOffset?: IPixel | AMap.Pixel;
  image?: string;
  imageSize?: ISize | AMap.SizeValue;
}
