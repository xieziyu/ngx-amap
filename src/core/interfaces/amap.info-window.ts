import { InfoWindowOptions } from './amap.info-window-options';
import { Map } from './amap.map';
import { LngLat } from './amap.lng-lat';
import { Size } from './amap.size';

export interface InfoWindow {
  new (opts: InfoWindowOptions): InfoWindow;
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
