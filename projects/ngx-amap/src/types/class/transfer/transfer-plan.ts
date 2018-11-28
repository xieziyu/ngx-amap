import { LngLat } from '../amap.lng-lat';
import { Segment } from './segment';

export interface TransferPlan {
  cost: number;
  time: number;
  distance: number;
  nightLine: boolean;
  walking_distance: number;
  transit_distance: number;
  railway_distance: number;
  taxi_distance: number;
  path: LngLat[];
  segments: Segment[];
}
