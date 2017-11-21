import { LngLat } from './amap.lng-lat';
import { Map } from './amap.map';
import { Size } from './amap.size';
import { InfoWindowOptions } from '../interface/info-window-options.interface';

export interface CInfoWindow {
  new (opts: InfoWindowOptions): InfoWindow;
}

export declare class InfoWindow {
  constructor(opts: InfoWindowOptions);
  open(map: Map, pos?: LngLat): void;
  close(): void;
  getIsOpen(): boolean;
  setContent(content: any): void;
  getContent(): string;
  setPosition(lnglat: LngLat): void;
  getPosition(): LngLat;
  setSize(size: Size): void;
  getSize(): Size;
}
