import { ISize } from './size.interface';
import { IPixel } from './pixel.interface';

export interface IIcon {
  size?: ISize;
  imageOffset?: IPixel;
  image?: string;
  imageSize?: ISize;
  src?: string;
  style?: any;
}
