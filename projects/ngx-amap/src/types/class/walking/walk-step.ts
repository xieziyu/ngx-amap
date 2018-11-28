import { LngLat } from '../amap.lng-lat';

export interface WalkStep {
  start_location: LngLat;
  end_location: LngLat;
  instruction: string;
  distance: number;
  time: number;
  path: LngLat[];
  action: string;
  assist_action: string;
  orientation: string;
  road: string;
}
