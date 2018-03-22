import { Map } from './amap.map';
import { LngLat } from './amap.lng-lat';
import { Bounds } from './amap.bounds';
import { CircleOptions } from '../interface/circle-options.interface';

export interface CCircle {
  new (opts: CircleOptions): Circle;
}

export declare class Circle {
  constructor(opts: CircleOptions);
  setCenter(lnglat: LngLat|number[]): void;
  getCenter(): LngLat;
  getBounds(): Bounds;
  setRadius(radius: number): void;
  getRadius(): number;
  setOptions(opt: CircleOptions): void;
  getOptions(): CircleOptions;
  hide(): void;
  show(): void;
  setMap(map: Map): void;
  setExtData(ext: any): void;
  getExtData(): any;
  contains(point: LngLat|number[]): boolean;
}
