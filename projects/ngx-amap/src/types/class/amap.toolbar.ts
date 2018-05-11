import { ToolbarOptions } from '../interface/toolbar-options.interface';
import { Pixel } from './amap.pixel';
import { LngLat } from './amap.lng-lat';

export interface CToolBar {
  new (opts?: ToolbarOptions): ToolBar;
}

export interface ToolBar {
  getOffset(): Pixel;
  setOffset(offset: Pixel): void;
  hideRuler(): void;
  showRuler(): void;
  hideDirection(): void;
  showDirection(): void;
  hideLocation(): void;
  showLocation(): void;
  doLocation(): void;
  getLocation(): LngLat;
  hide(): void;
  show(): void;
}
