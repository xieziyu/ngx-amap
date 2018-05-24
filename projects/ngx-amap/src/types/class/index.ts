import { Map, CMap } from './amap.map';
import { LngLat, CLngLat } from './amap.lng-lat';
import { Pixel, CPixel } from './amap.pixel';
import { Size, CSize } from './amap.size';
import { CIcon, Icon } from './amap.icon';
import { AMapEvent } from './amap.event';
import { CInfoWindow, InfoWindow } from './amap.info-window';
import { CToolBar, ToolBar } from './amap.toolbar';
import { ClusterStyle } from './cluster-style';
import { CGeocoder, Geocoder } from './geocoder/amap.geocoder';
import { CAutocomplete, Autocomplete } from './autocomplete/amap.autocomplete';
import { CPlaceSearch, PlaceSearch } from './place-search/amap.place-search';
import { CDistrictSearch, DistrictSearch } from './district-search/amap.district-search';
import { CMouseTool, MouseTool } from './amap.mouse-tool';
import { Bounds, CBounds } from './amap.bounds';
import { CMarker, Marker } from './overlays/amap.marker';
import { CPolyline, Polyline } from './overlays/amap.polyline';
import { CPolygon, Polygon } from './overlays/amap.polygon';
import { CCircle, Circle } from './overlays/amap.circle';
import { CCircleMarker, CircleMarker } from './overlays/amap.circle-marker';
import { Text, CText } from './overlays/amap.text';
import { CMarkerClusterer, MarkerClusterer } from './amap.marker-clusterer';
import { BezierCurve, CBezierCurve } from './overlays/amap.bezier-curve';
import { Ellipse, CEllipse } from './overlays/amap.ellipse';
import { Rectangle, CRectangle } from './overlays/amap.rectangle';
import { CircleEditor, CCircleEditor } from './amap.editor';
import { PolyEditor, CPolyEditor } from './amap.editor';
import { BezierCurveEditor, CBezierCurveEditor } from './amap.editor';
import { EllipseEditor, CEllipseEditor } from './amap.editor';
import { RectangleEditor, CRectangleEditor } from './amap.editor';
import { Heatmap, CHeatmap } from './layers/amap.heatmap';

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
  Polygon: CPolygon;
  ToolBar: CToolBar;
  MarkerClusterer: CMarkerClusterer;
  Geocoder: CGeocoder;
  Autocomplete: CAutocomplete;
  PlaceSearch: CPlaceSearch;
  DistrictSearch: CDistrictSearch;
  MouseTool: CMouseTool;
  Circle: CCircle;
  CircleMarker: CCircleMarker;
  Bounds: CBounds;
  Text: CText;
  BezierCurve: CBezierCurve;
  Ellipse: CEllipse;
  Rectangle: CRectangle;
  CircleEditor: CCircleEditor;
  PolyEditor: CPolyEditor;
  BezierCurveEditor: CBezierCurveEditor;
  EllipseEditor: CEllipseEditor;
  RectangleEditor: CRectangleEditor;
  Heatmap: CHeatmap;

  plugin(name: string | string[], callback: (result: any) => void): void;
}

export {
  Map, LngLat, Pixel, Size, Marker, Icon,
  InfoWindow, Polyline, Polygon, ToolBar, MarkerClusterer,
  ClusterStyle, Geocoder, Autocomplete, PlaceSearch, DistrictSearch,
  Circle, CircleMarker, MouseTool, Bounds, Text, BezierCurve,
  Ellipse, Rectangle, CircleEditor, PolyEditor, BezierCurveEditor,
  EllipseEditor, RectangleEditor
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

// PlaceSearch
export * from './place-search/cinema';
export * from './place-search/city-info';
export * from './place-search/dining';
export * from './place-search/discount';
export * from './place-search/groupbuy';
export * from './place-search/hotel';
export * from './place-search/photo';
export * from './place-search/poi-list';
export * from './place-search/poi';
export * from './place-search/scenic';
export * from './place-search/search-result';

// DistrictSearch
export * from './district-search/district-search-result';
export * from './district-search/district';

// Layers
export * from './layers/amap.heatmap';

