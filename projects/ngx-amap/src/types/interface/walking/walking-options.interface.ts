import { Map } from '../../class/amap.map';

export interface WalkingOptions {
  map?: Map;
  panel?: any;
  hideMarkers?: boolean;
  isOutline?: boolean;
  outlineColor?: string;
  autoFitView?: boolean;
}
