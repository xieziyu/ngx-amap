import { LngLat } from '../class/amap.lng-lat';

export interface MapOptions {
  view?: any; // TODO: View2D
  layers?: any[]; // TODO: TileLayer
  zoom?: number;
  center?: LngLat;
  labelzIndex?: number;
  zooms?: number[];
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
  features?: string[];
  showBuildingBlock?: boolean;
}
