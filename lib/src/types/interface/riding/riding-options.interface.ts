import { Map } from '../../class/amap.map';

export interface RidingOptions {
  map?: Map;
  policy?: any;
  panel?: any;
  hideMarkers?: boolean;
  isOutline?: boolean;
  outlineColor?: string;
  autoFitView?: boolean;
}
