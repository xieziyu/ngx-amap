import { Map } from '../../class/amap.map';
import { LngLat } from '../../class/amap.lng-lat';

export interface CircleMarkerOptions {
  map?: Map;
  zIndex?: number;
  center?: LngLat;
  bubble?: boolean;
  cursor?: string;
  radius?: number;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWeight?: number;
  fillColor?: string;
  fillOpacity?: number;
  extData?: any;
}
