import { Geocode } from './geocode';
import { ReGeocode } from './re-geocode';

export declare class GeocoderResult {
  info: string;
  geocodes: Geocode[];
  resultNum: number;
  regeocode: ReGeocode;
}
