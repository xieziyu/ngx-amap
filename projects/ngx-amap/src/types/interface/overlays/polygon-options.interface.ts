import { Map } from '../../class/amap.map';
import { PolygonPath } from '../../class/overlays/amap.polygon';

export interface PolygonOptions {
  map?: Map;
  zIndex?: number;
  path?: PolygonPath;
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
