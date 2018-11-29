import { LngLat } from '../amap.lng-lat';

export interface Road {
  id: string;
  name: string;
  distance: number;
  location: LngLat;
  direction: string;
}
