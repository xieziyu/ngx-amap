import { Map } from './amap.map';
import { Circle } from './overlays/amap.circle';
import { Polyline } from './overlays/amap.polyline';
import { Polygon } from './overlays/amap.polygon';

export declare class Editor<T> {
  constructor(map: Map, target: T);
  open(): void;
  close(): void;
}

export interface CEditor<T> {
  new (map: Map, target: T): Editor<T>;
}

export type CircleEditor = Editor<Circle>;
export type CCircleEditor = CEditor<Circle>;

export type PolyEditor = Editor<Polyline|Polygon>;
export type CPolyEditor = CEditor<Polyline|Polygon>;
