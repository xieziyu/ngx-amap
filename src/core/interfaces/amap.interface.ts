import { Map } from './amap.map';
import { LngLat } from './amap.lng-lat';
import { Marker } from './amap.marker';
import { AMapEvent } from './amap.event';
import { Pixel } from './amap.pixel';
import { Size } from './amap.size';
import { Icon } from './amap.icon';
import { Label } from './amap.label';
import { ToolBar } from './amap.toolbar';

export interface AMapClass {
  Map: Map;
  LngLat: LngLat;
  Marker: Marker;
  event: AMapEvent;
  Pixel: Pixel;
  Size: Size;
  Icon: Icon;
  Label: Label;
  ToolBar: ToolBar;
}

export { Map, LngLat, Marker, Pixel, Size, Icon, Label, ToolBar };
