import { Map } from './amap.map';
import { MapOptions } from './amap.map-options';
import { LngLat } from './amap.lng-lat';
import { Marker } from './amap.marker';

export interface AMapClass {
  Map: Map;
  LngLat: LngLat;
  Marker: Marker;
}

export { Map, MapOptions, LngLat, Marker };
