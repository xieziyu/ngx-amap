import { Map } from '../amap.map';
import { RectangleOptions } from '../../interface/overlays/rectangle-options.interface';
import { LngLat } from '../amap.lng-lat';
import { Bounds } from '../amap.bounds';
import { ILngLat } from '../../interface/lng-lat.interface';

export interface CRectangle {
  new (opts: RectangleOptions): Rectangle;
}

export interface Rectangle {
  setOptions(opt: RectangleOptions): void;
  getOptions(): RectangleOptions;
  getBounds(): Bounds;
  setBounds(bounds: Bounds): void;
  getArea(): number;
  hide(): void;
  show(): void;
  setMap(map: Map): void;
  setExtData(ext: any): void;
  getExtData(): any;
  contains(point: LngLat|ILngLat): boolean;
}
