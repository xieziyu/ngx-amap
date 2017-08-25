import { LngLat } from './amap.lng-lat';
import { Map } from './amap.map';
import { Pixel } from './amap.pixel';
import { Icon } from './amap.icon';
import { Label } from './amap.label';

export interface MarkerOptions {
  map?: Map;
  position?: LngLat|Array<number>;
  offset?: Pixel;
  icon?: string|Icon;
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
  shadow?: Icon;
  title?: string;
  clickable?: boolean;
  shape?: any;  // TODO: MarkerShape
  extData?: any;
  label?: Label;
}
