import { LngLat } from './amap.lng-lat';
import { Map } from './amap.map';

export interface MarkerOptions {
  map?: Map;
  position?: LngLat|Array<number>;
  offset?: any; // TODO: Pixel
  icon?: string|any; // TODO: Icon
  content?: any;
  topWhenClick?: boolean;
  bubble?: boolean;
  draggable?: boolean;
  raiseOnDrag?: boolean;
  cursor?: string;
  visible?: boolean;
  zIndex?: number;
  angle?: number;
  autoRotation?: boolean;
  shadow?: any; // TODO: Icon
  title?: string;
  clickable?: boolean;
  shape?: any;  // TODO: MarkerShape
  extData?: any;
  label?: { content: any; offset: any }; // TODO: Pixel
}
