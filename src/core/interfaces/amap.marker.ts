import { LngLat } from './amap.lng-lat';
import { Map } from './amap.map';
import { MarkerOptions } from './amap.marker-options';
import { Pixel } from './amap.pixel';
import { Icon } from './amap.icon';

export interface Marker {
  new (opts: MarkerOptions): Marker;
  getOffset(): Pixel;
  setOffset(offset: Pixel): void;
  setAnimation(animate: string): void;
  getAnimation(): string;
  setClickable(clickable: boolean): void;
  getClickable(): boolean;
  getPosition(): LngLat;
  setPosition(lnglat: LngLat|Array<number>): void;
  setAngle(angle: number): void;
  setLabel(label: any): void;
  getLabel(): any;
  getAngle(): number;
  setzIndex(index: number): void;
  getzIndex(): number;
  setIcon(content: string|Icon): void;
  getIcon(): string|Icon;
  setDraggable(draggable: boolean): void;
  getDraggable(): boolean;
  hide(): void;
  show(): void;
  setCursor(cursor: string): void;
  setContent(html: string|HTMLElement): void;
  getContent(): string;
  moveAlong(path: Array<number>|Array<LngLat>, speed: number, f?:(k:any)=>any, circlable?: boolean): void;
  moveTo(lnglat: LngLat|Array<number>, speed: number, f?:(k:any)=>any): void;
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
  setShape(shape: any); // TODO: MarkerShape
  getShape(): any; // TODO: MarkerShape
  setExtData(ext: any): void;
  getExtData(): any;
}
