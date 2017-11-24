import { Marker } from '../class/amap.marker';
import { IClusterStyle } from './cluster-style.interface';

export interface MarkerClustererOptions {
  gridSize?: number;
  minClusterSize?: number;
  maxZoom?: number;
  averageCenter?: boolean;
  styles?: IClusterStyle[];
  renderCluserMarker?: (object: RenderObject) => void;
  zoomOnClick: boolean;
}

export declare class RenderObject {
  count: number;
  markers: Marker[];
  marker: Marker;
}
