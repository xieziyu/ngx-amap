import { Map } from './amap.map';
import { CircleOptions } from '../interface/overlays/circle-options.interface';
import { MarkerOptions } from '../interface/overlays/marker-options.interface';
import { PolygonOptions } from '../interface/overlays/polygon-options.interface';
import { PolylineOptions } from '../interface/overlays/polyline-options.interface';

export interface CMouseTool {
  new (map: Map): MouseTool;
}

export interface MouseTool {
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
