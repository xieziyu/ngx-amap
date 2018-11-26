import { Map } from '../../class/amap.map';

export interface TransferOptions {
  city?: string;
  nightflag?: boolean;
  policy?: any;
  cityd?: string;
  map?: Map;
  panel?: any;
  extensions?: string;
  hideMarkers?: boolean;
  isOutline?: boolean;
  outlineColor?: string;
  autoFitView?: boolean;
}
