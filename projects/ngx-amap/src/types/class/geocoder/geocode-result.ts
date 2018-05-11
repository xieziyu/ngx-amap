import { Geocode } from './geocode';

export interface GeocodeResult {
  info: string;
  geocodes: Geocode[];
  resultNum: number;
}
