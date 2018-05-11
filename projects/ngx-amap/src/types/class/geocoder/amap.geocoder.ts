import { GeocoderOptions } from '../../interface/geocoder-options.interface';
import { ILngLat } from '../../interface/lng-lat.interface';
import { callbackFn } from '../../interface/callback.type';
import { GeocodeResult } from './geocode-result';
import { ReGeocodeResult } from './re-geocode-result';

export interface CGeocoder {
  new (opts?: GeocoderOptions): Geocoder;
}

export interface Geocoder {
  getLocation(address: string, callback: callbackFn<GeocodeResult>);
  setCity(city: string);
  getAddress(location: ILngLat|ILngLat[], callback: callbackFn<ReGeocodeResult>);
}
