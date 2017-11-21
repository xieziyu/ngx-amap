import { Map, CMap } from './amap.map';
import { LngLat, CLngLat } from './amap.lng-lat';
import { Pixel, CPixel } from './amap.pixel';
import { Size, CSize } from './amap.size';
import { CMarker, Marker } from './amap.marker';
import { CIcon, Icon } from './amap.icon';
import { AMapEvent } from './amap.event';

export interface AMapClass {
  Map: CMap;
  LngLat: CLngLat;
  Pixel: CPixel;
  Size: CSize;
  Marker: CMarker;
  Icon: CIcon;
  event: AMapEvent;
}

export { Map, LngLat, Pixel, Size, Marker, Icon };
