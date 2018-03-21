import { Map } from '../class/amap.map';
import { LngLat } from '../class/amap.lng-lat';

export interface PolygonOptions {
  map?: Map;
  zIndex?: number;
  path?: LngLat[] | LngLat[][];
  bubble?: boolean;
  cursor?: string;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWeight?: number;
  fillColor?: string;
  fillOpacity?: number;
  strokeStyle?: string;
  strokeDasharray?: number[];
  extData?: any;
}
