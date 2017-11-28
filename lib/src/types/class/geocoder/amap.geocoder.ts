import { GeocoderOptions } from '../../interface/geocoder-options.interface';
import { ILngLat } from '../../interface/lng-lat.interface';
import { GeocodeResult } from './geocode-result';
import { ReGeocodeResult } from './re-geocode-result';

export interface CGeocoder {
  new (opts?: GeocoderOptions): Geocoder;
}

export declare class Geocoder {
  constructor(opts?: GeocoderOptions);
  getLocation(address: string, callback: (status: string, result: string|GeocodeResult) => void);
  setCity(city: string);
  getAddress(location: ILngLat|ILngLat[], callback: (status: string, result: string|ReGeocodeResult) => void);
}
