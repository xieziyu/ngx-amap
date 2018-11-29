import { Map } from '../../class/amap.map';

export interface DrivingOptions {
  policy?: any;
  extensions?: string;
  ferry?: number;
  map?: Map;
  panel?: any;
  hideMarkers?: boolean;
  showTraffic?: boolean;
  province?: string;
  number?: string;
  isOutline?: boolean;
  outlineColor?: string;
  autoFitView?: boolean;
}
