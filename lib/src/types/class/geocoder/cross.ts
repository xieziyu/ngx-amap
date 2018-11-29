import { LngLat } from '../amap.lng-lat';

export interface Cross {
  distance: number;
  direction: string;
  location: LngLat;
  first_id: string;
  first_name: string;
  second_id: string;
  second_name: string;
}
