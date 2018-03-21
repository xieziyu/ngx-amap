import { Map } from './amap.map';
import { CircleOptions, MarkerOptions, PolygonOptions, PolylineOptions } from '../interface/index';

export interface CMouseTool {
  new (map: Map): MouseTool;
}

export declare class MouseTool {
  constructor(map: Map)
  marker(options: MarkerOptions);
  polyline(options: PolylineOptions);
  polygon(options: PolygonOptions);
  rectangle(options: PolygonOptions);
  circle(options: CircleOptions);
  rule(options: PolylineOptions);
  measureArea(options: PolygonOptions);
  rectZoomIn(options: PolygonOptions);
  rectZoomOut(options: PolygonOptions);
  close(clear: boolean);
}
