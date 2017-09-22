import { Map } from './amap.map';
import { PolylineOptions } from './amap.polyline-options';

export interface Polyline {
  new (opts: PolylineOptions): Polyline;
  setPath(path: number[][]): void;
  getPath(): number[][];
  setOptions(opt: PolylineOptions): void;
  getOptions(): PolylineOptions;
  getLength(): number;
  getBounds(): any; // TODO: Bounds
  hide(): void;
  show(): void;
  setMap(map: Map): void;
  setExtData(ext: any): void;
  getExtData(): any;
}
