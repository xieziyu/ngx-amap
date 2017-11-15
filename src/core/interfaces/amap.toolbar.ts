import { ToolbarOptions } from './amap.toolbar-options';
import { Pixel } from './amap.pixel';
import { LngLat } from './amap.lng-lat';

export interface ToolBar {
  new (opts?: ToolbarOptions): ToolBar;
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
