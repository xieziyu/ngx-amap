import { LngLat } from '../amap.lng-lat';
import { Poi } from '../place-search/poi';
import { DriveRoute } from './drive-route';

export interface DrivingResult {
  info: string;
  origin: LngLat;
  destination: LngLat;
  start: Poi;
  end: Poi;
  waypoints: Poi;
  taxi_cost: number;
  routes: DriveRoute[];
}
