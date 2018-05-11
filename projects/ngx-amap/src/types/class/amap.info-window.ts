import { LngLat } from './amap.lng-lat';
import { Map } from './amap.map';
import { Size } from './amap.size';
import { InfoWindowOptions } from '../interface/info-window-options.interface';

export interface CInfoWindow {
  new (opts: InfoWindowOptions): InfoWindow;
}

export interface InfoWindow {
  open(map: Map, pos?: LngLat|number[]): void;
  close(): void;
  getIsOpen(): boolean;
  setContent(content: any): void;
  getContent(): string;
  setPosition(lnglat: LngLat|number[]): void;
  getPosition(): LngLat;
  setSize(size: Size): void;
  getSize(): Size;
}
