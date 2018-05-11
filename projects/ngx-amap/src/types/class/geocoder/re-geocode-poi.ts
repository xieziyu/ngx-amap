import { LngLat } from '../amap.lng-lat';

export interface ReGeocodePoi {
  id: string;
  name: string;
  type: string;
  tel: string;
  distance: number;
  direction: string;
  address: string;
  location: LngLat;
  businessArea: string;
}
