import { Map } from '../../class/amap.map';
import { LngLat } from '../../class/amap.lng-lat';

export interface EllipseOptions {
  map?: Map;
  zIndex?: number;
  center?: LngLat;
  radius?: number[];
  bubble?: boolean;
  cursor?: string;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWeight?: number;
  fillColor?: string;
  fillOpacity?: number;
  strokeStyle?: string;
  strokeDasharray?: number;
  extData?: any;
}
