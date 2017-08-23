import { LngLat } from './amap.lng-lat';
import { Map } from './amap.map';

export interface Marker {
  new (opts: any): Marker; // TODO: MarkerOptions
  getOffset(): any; // TODO: Pixel
  setOffset(offset: any): void; // TODO: Pixel
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
  setIcon(content: string|any): void; // TODO: Icon
  getIcon(): string|any;  // TODO: Icon
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
  setShadow(icon: any): void; // TODO: Icon
  getShadow(): any; // TODO: Icon
  setShape(shape: any); // TODO: MarkerShape
  getShape(): any; // TODO: MarkerShape
  setExtData(ext: any): void;
  getExtData(): any;
}
