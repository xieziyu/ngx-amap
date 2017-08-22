import { LngLat } from './amap.lng-lat';

export interface MapOptions {
  view?: any; // TODO: View2D
  layers?: Array<any>; // TODO: TileLayer
  zoom?: number;
  center?: LngLat|Array<number>;
  labelzIndex?: number;
  zooms?: Array<number>;
  lang?: string;
  cursor?: string;
  crs?: string;
  animateEnable?: boolean;
  isHotspot?: boolean;
  defaultLayer?: any; // TODO: TileLayer
  rotateEnable?: boolean;
  resizeEnable?: boolean;
  showIndoorMap?: boolean;
  indoorMap?: any; // TODO: IndoorMap
  expandZoomRange?: boolean;
  dragEnable?: boolean;
  zoomEnable?: boolean;
  doubleClickZoom?: boolean;
  keyboardEnable?: boolean;
  jogEnable?: boolean;
  scrollWheel?: boolean;
  touchZoom?: boolean;
  mapStyle?: string;
  features?: Array<string>;
  showBuildingBlock?: boolean;
}
