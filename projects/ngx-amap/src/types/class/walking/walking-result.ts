import { LngLat } from '../amap.lng-lat';
import { Poi } from '../place-search/poi';
import { WalkRoute } from './walk-route';

export interface WalkingResult {
  info: string;
  origin: LngLat;
  destination: LngLat;
  start: Poi;
  end: Poi;
  count: number;
  routes: WalkRoute;
}
