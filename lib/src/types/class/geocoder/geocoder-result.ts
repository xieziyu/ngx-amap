import { Geocode } from './geocode';
import { ReGeocode } from './re-geocode';

export interface GeocoderResult {
  info: string;
  geocodes: Geocode[];
  resultNum: number;
  regeocode: ReGeocode;
}
