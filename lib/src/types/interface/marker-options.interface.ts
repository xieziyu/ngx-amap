import { ILabel } from './label.interface';
import { Map } from '../class/amap.map';
import { LngLat } from '../class/amap.lng-lat';
import { Icon } from '../class/amap.icon';
import { Pixel } from '../class/amap.pixel';

export interface MarkerOptions {
  map?: Map;
  position?: LngLat;
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
  label?: ILabel;
}
