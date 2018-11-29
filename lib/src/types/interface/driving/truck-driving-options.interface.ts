import { Map } from '../../class/amap.map';

export interface TruckDrivingOptions {
  policy?: any;
  size?: number;
  width?: number;
  height?: number;
  load?: number;
  weight?: number;
  axlesNum?: number;
  extensions?: string;
  map?: Map;
  panel?: any;
  hideMarkers?: boolean;
  showTraffic?: boolean;
  isOutline?: boolean;
  outlineColor?: string;
  autoFitView?: boolean;
  province?: string;
  number?: string;
}
