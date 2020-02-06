import { IPixel } from './pixel.interface';
import { IStyle } from './style.interface';

export interface ILabel {
  content: string;
  offset: IPixel;
}

export interface IconLabel {
  innerHTML?: string;
  style?: IStyle;
}
