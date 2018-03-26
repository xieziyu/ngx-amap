import { MarkerClustererOptions } from '../interface/marker-cluster-options.interface';
import { ClusterStyle } from './cluster-style';
import { Marker } from './overlays/amap.marker';
import { Map } from './amap.map';

export interface CMarkerClusterer {
  new (map: Map, markers: Marker[], opts: MarkerClustererOptions): MarkerClusterer;
}

export declare class MarkerClusterer {
  constructor(map: Map, markers: Marker[], opts: MarkerClustererOptions);
  addMarker(marker: Marker);
  removeMarker(marker: Marker);
  getClustersCount(): number;
  getGridSize(): number;
  getMaxZoom(): number;
  getMinClusterSize(): number;
  getStyles(): ClusterStyle[];
  setGridSize(size: number);
  setMaxZoom(zoom: number);
  setMinClusterSize(size: number);
  setStyles(styles: ClusterStyle[]);
  clearMarkers();
  setMap(map: Map);
  setMarkers(markers: Marker[]);
  getMap(): Map;
  getMarkers(): Marker[];
  addMarkers(markers: Marker[]);
  removeMarkers(markers: Marker[]);
  isAverageCenter(): boolean;
  setAverageCenter(averageCenter: boolean);
}
