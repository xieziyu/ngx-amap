import { Size } from './amap.size';
import { Pixel } from './amap.pixel';
import { LngLat } from './amap.lng-lat';

export interface InfoWindowOptions {
  isCustom?: boolean;
  autoMove?: boolean;
  closeWhenClickMap?: boolean;
  content?: any;
  size?: Size;
  offset?: Pixel;
  position?: LngLat;
  showShadow?: boolean;
}
