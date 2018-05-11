import { LngLat } from '../class/amap.lng-lat';
import { Pixel } from '../class/amap.pixel';
import { Size } from '../class/amap.size';

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
