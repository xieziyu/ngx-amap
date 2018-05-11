import { LngLat } from '../amap.lng-lat';
import { AddressComponent } from './address-component';
import { ReGeocodePoi } from './re-geocode-poi';
import { Road } from './road';
import { Cross } from './cross';

export interface ReGeocode {
  addressComponent: AddressComponent;
  formattedAddress: string;
  roads: Road[];
  crosses: Cross[];
  pois: ReGeocodePoi[];
}
