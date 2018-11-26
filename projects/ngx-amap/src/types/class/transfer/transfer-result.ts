import { LngLat } from '../amap.lng-lat';
import { Poi } from '../place-search/poi';
import { TransferPlan } from './transfer-plan';

export interface TransferResult {
  info: string;
  origin: LngLat;
  destination: LngLat;
  start: Poi;
  end: Poi;
  taxi_cost: number;
  plans: TransferPlan[];
}
