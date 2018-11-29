import { Map } from '../amap.map';
import { LngLat } from '../amap.lng-lat';
import { Bounds } from '../amap.bounds';
import { EllipseOptions } from '../../interface/overlays/ellipse-options.interface';
import { ILngLat } from '../../interface/lng-lat.interface';

export interface CEllipse {
  new (opts: EllipseOptions): Ellipse;
}

export interface Ellipse {
  setOptions(opt: EllipseOptions);
  getOptions(): EllipseOptions;
  getCenter(): LngLat;
  setCenter(center: LngLat|ILngLat): void;
  getBounds(): Bounds;
  hide(): void;
  show(): void;
  setMap(map: Map);
  setExtData(ext: any): void;
  getExtData(): any;
  contains(point: LngLat|ILngLat): boolean;
}
