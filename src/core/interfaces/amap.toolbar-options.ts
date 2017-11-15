import { Pixel } from './amap.pixel';
import { Marker } from './amap.marker';

export interface ToolbarOptions {
  offset?: Pixel;
  position?: string;
  ruler?: boolean;
  noIpLocate?: boolean;
  locate?: boolean;
  liteStyle?: boolean;
  direction?: boolean;
  autoPosition?: boolean;
  locationMarker?: Marker;
  useNative?: boolean;
}
