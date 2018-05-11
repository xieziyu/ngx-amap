import { Map } from '../../class/amap.map';
import { LngLat } from '../../class/amap.lng-lat';
import { Bounds } from '../../class/amap.bounds';

export interface RectangleOptions {
  map?: Map;
  zIndex?: number;
  bounds?: Bounds;
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
  draggable?: boolean;
}
