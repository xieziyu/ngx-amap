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
import { CGeocoder, Geocoder } from './geocoder/amap.geocoder';
import { CAutocomplete, Autocomplete } from './autocomplete/amap.autocomplete';

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
  Geocoder: CGeocoder;
  Autocomplete: CAutocomplete;

  plugin(name: string|Array<string>, callback: (result: any) => void): void;
}

export {
  Map, LngLat, Pixel, Size, Marker, Icon,
  InfoWindow, Polyline, ToolBar, MarkerClusterer,
  ClusterStyle, Geocoder, Autocomplete
};

// Geocoder
export * from './geocoder/address-component';
export * from './geocoder/business-area';
export * from './geocoder/cross';
export * from './geocoder/geocode-result';
export * from './geocoder/geocode';
export * from './geocoder/geocoder-result';
export * from './geocoder/re-geocode-poi';
export * from './geocoder/re-geocode-result';
export * from './geocoder/re-geocode';
export * from './geocoder/road';

// Autocomplete
export * from './autocomplete/autocomplete-result';
export * from './autocomplete/tip';
