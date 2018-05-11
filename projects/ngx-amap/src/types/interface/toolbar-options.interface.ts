import { Map } from '../class/amap.map';
import { Marker } from '../class/overlays/amap.marker';
import { IPixel } from '../interface/pixel.interface';

export interface ToolbarOptions {
  offset?: IPixel;
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
