import { ISize } from './size.interface';
import { IPixel } from './pixel.interface';

export interface IClusterStyle {
  url: string;
  size: ISize;
  offset?: IPixel;
  imageOffset?: IPixel;
  textColor?: string;
  textSize?: number;
}
