import { LngLat } from '../amap.lng-lat';
import { Map } from '../amap.map';
import { Pixel } from '../amap.pixel';
import { Icon } from '../amap.icon';
import { TextOptions } from '../../interface/overlays/text-options.interface';

export interface CText {
  new (opts: TextOptions): Text;
}

export interface Text {
  getText(): string;
  setText(text: string): void;
  setStyle(obj: any): void;
  getOffset(): Pixel;
  setOffset(offset: Pixel): void;
  setAnimation(animate: string): void;
  getAnimation(): string;
  setClickable(clickable: boolean): void;
  getClickable(): boolean;
  getPosition(): LngLat;
  setPosition(lnglat: LngLat|number[]): void;
  setAngle(angle: number): void;
  getAngle(): number;
  setzIndex(index: number): void;
  getzIndex(): number;
  setDraggable(draggable: boolean): void;
  getDraggable(): boolean;
  hide(): void;
  show(): void;
  setCursor(cursor: string): void;
  moveAlong(path: number[][]|LngLat[], speed: number, f?: (k: any) => any, circlable?: boolean): void;
  moveTo(lnglat: LngLat|number[], speed: number, f?: (k: any) => any): void;
  stopMove(): void;
  pauseMove(): void;
  resumeMove(): void;
  setMap(map: Map): void;
  getMap(): Map;
  setTitle(title: string): void;
  getTitle(): string;
  setTop(isTop: boolean): void;
  getTop(): boolean;
  setShadow(icon: Icon): void;
  getShadow(): Icon;
  setExtData(ext: any): void;
  getExtData(): any;
}
