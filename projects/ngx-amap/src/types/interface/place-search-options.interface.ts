import { Map } from '../class/amap.map';

export interface PlaceSearchOptions {
  city?: string;
  citylimit?: boolean;
  children?: number;
  type?: string;
  lang?: string;
  pageSize?: number;
  pageIndex?: number;
  extensions?: string;
  map?: Map;
  panel?: string|HTMLElement;
  showCover?: boolean;
  renderStyle?: string;
  autoFitView?: boolean;
}
