import { Map } from '../class/amap.map';

export interface PolylineOptions {
  map?: Map;
  zIndex?: number;
  bubble?: boolean;
  geodesic?: boolean;
  isOutline?: boolean;
  borderWeight?: number;
  outlineColor?: string;
  path?: number[][];
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWeight?: number;
  strokeStyle?: string;
  strokeDasharray?: number[];
  lineJoin?: string;
  extData?: any;
  showDir?: boolean;
}
