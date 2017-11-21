import { Map, CMap } from './amap.map';
import { LngLat, CLngLat } from './amap.lng-lat';
import { Pixel, CPixel } from './amap.pixel';
import { Size, CSize } from './amap.size';
import { CMarker, Marker } from './amap.marker';
import { CIcon, Icon } from './amap.icon';
import { AMapEvent } from './amap.event';
import { CInfoWindow, InfoWindow } from './amap.info-window';

export interface AMapClass {
  Map: CMap;
  LngLat: CLngLat;
  Pixel: CPixel;
  Size: CSize;
  Marker: CMarker;
  Icon: CIcon;
  event: AMapEvent;
  InfoWindow: CInfoWindow;
}

export { Map, LngLat, Pixel, Size, Marker, Icon, InfoWindow };
