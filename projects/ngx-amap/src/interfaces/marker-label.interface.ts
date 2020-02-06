import { IPixel } from './pixel.interface';

export interface IMarkerLabel {
  content?: string;
  offset?: IPixel | AMap.Pixel;
  direction?: AMap.Marker.LabelDirection;
}
