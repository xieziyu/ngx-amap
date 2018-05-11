import { Map } from '../../class/amap.map';
import { LngLat } from '../../class/amap.lng-lat';
import { Icon } from '../../class/amap.icon';
import { Pixel } from '../../class/amap.pixel';

export interface TextOptions {
  text?: string;
  textAlign?: string;
  verticalAlign?: string;
  map?: Map;
  position?: LngLat;
  offset?: Pixel;
  topWhenClick?: boolean;
  bubble?: boolean;
  draggable?: boolean;
  raiseOnDrag?: boolean;
  cursor?: string;
  visible?: boolean;
  zIndex?: number;
  angle?: number;
  autoRotation?: boolean;
  animation?: string;
  shadow?: Icon;
  title?: string;
  clickable?: boolean;
  extData?: any;
  style?: any;
}
