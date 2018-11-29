import { LngLat } from '../amap.lng-lat';
import { Poi } from '../place-search/poi';
import { RideRoute } from './ride-route';

export interface RidingResult {
  info: string;
  origin: LngLat;
  destination: LngLat;
  start: Poi;
  end: Poi;
  count: number;
  routes: RideRoute;
}
