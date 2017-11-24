import { Map, CMap } from './amap.map';
import { LngLat, CLngLat } from './amap.lng-lat';
import { Pixel, CPixel } from './amap.pixel';
import { Size, CSize } from './amap.size';
import { CMarker, Marker } from './amap.marker';
import { CIcon, Icon } from './amap.icon';
import { AMapEvent } from './amap.event';
import { CInfoWindow, InfoWindow } from './amap.info-window';
import { CPolyline, Polyline } from './amap.polyline';
import { CToolBar, ToolBar } from './amap.toolbar';
import { CMarkerClusterer, MarkerClusterer } from './amap.marker-clusterer';
import { ClusterStyle } from './cluster-style';

export interface AMapClass {
  Map: CMap;
  LngLat: CLngLat;
  Pixel: CPixel;
  Size: CSize;
  Marker: CMarker;
  Icon: CIcon;
  event: AMapEvent;
  InfoWindow: CInfoWindow;
  Polyline: CPolyline;
  ToolBar: CToolBar;
  MarkerClusterer: CMarkerClusterer;
}

export {
  Map, LngLat, Pixel, Size, Marker, Icon,
  InfoWindow, Polyline, ToolBar, MarkerClusterer,
  ClusterStyle
};
