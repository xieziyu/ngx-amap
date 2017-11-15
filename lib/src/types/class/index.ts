import { Map, CMap } from './amap.map';
import { LngLat, CLngLat } from './amap.lng-lat';
import { Pixel, CPixel } from './amap.pixel';
import { Size, CSize } from './amap.size';

export interface AMapClass {
  Map: CMap;
  LngLat: CLngLat;
  Pixel: CPixel;
  Size: CSize;
}

export { Map, LngLat, Pixel, Size };
