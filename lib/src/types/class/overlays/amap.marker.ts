import { LngLat } from '../amap.lng-lat';
import { Map } from '../amap.map';
import { Pixel } from '../amap.pixel';
import { Icon } from '../amap.icon';
import { MarkerOptions } from '../../interface/overlays/marker-options.interface';

// Default AMAP.Marker & UI Component Marker: SvgMarker、SimpleMarker、AwesomeMarker
export type MarkerType = 'default' | 'simple' | 'svg' | 'awesome';

export interface CMarker {
  new(opts: MarkerOptions): Marker;
}

export interface Marker {
  type: MarkerType;
  getOffset(): Pixel;
  setOffset(offset: Pixel): void;
  setAnimation(animate: string): void;
  getAnimation(): string;
  setClickable(clickable: boolean): void;
  getClickable(): boolean;
  getPosition(): LngLat;
  setPosition(lnglat: LngLat | number[]): void;
  setAngle(angle: number): void;
  setLabel(label: any): void;
  getLabel(): any;
  getAngle(): number;
  setzIndex(index: number): void;
  getzIndex(): number;
  setIcon(content: string | Icon): void;
  getIcon(): string | Icon;
  setDraggable(draggable: boolean): void;
  getDraggable(): boolean;
  hide(): void;
  show(): void;
  setCursor(cursor: string): void;
  setContent(html: string | HTMLElement): void;
  getContent(): string;
  moveAlong(path: number[][] | LngLat[], speed: number, f?: (k: any) => any, circlable?: boolean): void;
  moveTo(lnglat: LngLat | number[], speed: number, f?: (k: any) => any): void;
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
