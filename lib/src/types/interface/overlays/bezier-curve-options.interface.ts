import { Map } from '../../class/amap.map';

export type CurvePath = Array<Array<number>>|Array<Array<Array<number>>>;

export interface BezierCurveOptions {
  path?: CurvePath;
  map?: Map;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWeight?: number;
  strokeStyle?: string;
  strokeDasharray?: number[];
  zIndex?: number;
  showDir?: boolean;
  bubble?: boolean;
  cursor?: string;
  isOutline?: boolean;
  outlineColor?: string;
  borderWeight?: number;
}
