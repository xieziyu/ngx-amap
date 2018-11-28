import { LngLat } from '../amap.lng-lat';
import { District } from '../district-search/district';

export interface DriveStep {
  start_location: LngLat;
  end_location: LngLat;
  instruction: string;
  action: string;
  assist_action: string;
  orientation: string;
  road: string;
  distance: number;
  tolls: number;
  tolls_distance: number;
  toll_road: string;
  time: number;
  path: LngLat[];
  cities: ViaCity[];
  tmcs: TMC[];
}

export interface ViaCity {
  name: string;
  citycode: string;
  adcode: string;
  districts: District[];
}

export interface TMC {
  lcode: string;
  distance: number;
  status: string;
}
