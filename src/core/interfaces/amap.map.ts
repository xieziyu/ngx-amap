import { LngLat } from './amap.lng-lat';
import { MapOptions } from './amap.map-options';
import { Pixel } from './amap.pixel';
import { Size } from './amap.size';
import { AMapPluginType } from './amap.plugin';

export interface Map {
  new (container: string|HTMLDivElement, opts: MapOptions): Map;
  getZoom(): number;
  getLayers(): Array<any>;  // TODO: TileLayer
  getCenter(): LngLat;
  getContainer(): HTMLDivElement;
  getCity(callback: (result: any) => void): void; // TODO: city property
  getBounds(): any; // TODO: Bounds
  getlabelzIndex(): number;
  getLimitBounds(): any; // TODO: Bounds
  getLang(): string;
  getSize(): Size;
  getRotation(): number;
  getStatus(): any;
  getDefaultCursor(): string;
  getResolution(point?: LngLat): number;
  getScale(dpi: number): number;
  setZoom(level: number): void;
  setlabelzIndex(index: number): void;
  setLayers(layers: Array<any>): void;  // TODO: TileLayer
  add(overlayers: Array<any>): void;  // TODO: TileLayer
  remove(overlayers: Array<any>): void; // TODO: TileLayer
  getAllOverlays(type?: string): any;
  setCenter(position: LngLat|Array<number>): void;
  setZoomAndCenter(zoomLevel: number, center: LngLat|Array<number>): void;
  setCity(city: string, callback?: (result: any) => void): void;
  setBounds(bound: any): void; // TODO: Bounds
  setLimitBounds(bound: any): void; // TODO: Bounds
  clearLimitBounds(): void;
  setLang(lang: string): string;
  setRotation(rotation: number): number;
  setStatus(status: any): void;
  setDefaultCursor(cursor: string): void;
  zoomIn(): void;
  zoomOut(): void;
  panTo(position: LngLat|Array<number>): void;
  panBy(x: number, y: number): void;
  setFitView(overlayList?: Array<any>): void;
  clearMap(): void;
  destroy(): void;
  plugin(name: string|Array<string>, callback: (result: any) => void): void;
  addControl(obj: AMapPluginType): void;
  removeControl(obj: AMapPluginType): void;
  clearInfoWindow(): void;
  pixelToLngLat(pixel: Pixel, level: number): LngLat;
  lnglatToPixel(lngLat: LngLat|Array<number>, level: number): Pixel;
  containerToLngLat(pixel: Pixel): LngLat;
  lngLatToContainer(lnglat: LngLat|Array<number>): Pixel;
  setMapStyle(style: string): void;
  getMapStyle(): string;
  setFeatures(feature: Array<string>): void;
  getFeatures(): Array<string>;
}
