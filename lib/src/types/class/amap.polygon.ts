import { Map } from './amap.map';
import { PolygonOptions } from '../interface';
import { LngLat } from './amap.lng-lat';

export interface CPolygon {
  new (opts: PolygonOptions): Polygon;
}

export declare class Polygon {
  constructor(opts: PolygonOptions);
  setPath(path: number[][]): void;
  getPath(): number[][];
  setOptions(opt: PolygonOptions): void;
  getOptions(): PolygonOptions;
  getBounds(): any; // TODO: Bounds
  getArea(): number;
  hide(): void;
  show(): void;
  setMap(map: Map): void;
  setExtData(ext: any): void;
  getExtData(): any;
  contains(point: LngLat): boolean;
}
