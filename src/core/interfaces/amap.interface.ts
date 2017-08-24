import { Map } from './amap.map';
import { LngLat } from './amap.lng-lat';
import { Marker } from './amap.marker';

export interface AMapClass {
  Map: Map;
  LngLat: LngLat;
  Marker: Marker;
}

export { Map, LngLat, Marker };
