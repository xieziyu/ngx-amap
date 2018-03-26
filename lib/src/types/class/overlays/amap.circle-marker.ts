import { Map } from '../amap.map';
import { LngLat } from '../amap.lng-lat';
import { CircleMarkerOptions } from '../../interface/overlays/circle-marker-options.interface';

export interface CCircleMarker {
  new (opts: CircleMarkerOptions): CircleMarker;
}

export declare class CircleMarker {
  constructor(opts: CircleMarkerOptions);
  setCenter(lnglat: LngLat|number[]): void;
  getCenter(): LngLat;
  setRadius(radius: number): void;
  getRadius(): number;
  setOptions(opt: CircleMarkerOptions): void;
  getOptions(): CircleMarkerOptions;
  hide(): void;
  show(): void;
  setMap(map: Map): void;
  setExtData(ext: any): void;
  getExtData(): any;
}
