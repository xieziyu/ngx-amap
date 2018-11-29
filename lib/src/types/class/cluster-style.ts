import { Size } from './amap.size';
import { Pixel } from './amap.pixel';

export interface ClusterStyle {
  url: string;
  size: Size;
  offset?: Pixel;
  imageOffset?: Pixel;
  textColor?: string;
  textSize?: number;
}
