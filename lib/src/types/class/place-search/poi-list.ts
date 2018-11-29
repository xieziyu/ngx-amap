import { Poi } from './poi';

export interface PoiList {
  pois: Poi[];
  pageIndex: number;
  pageSize: number;
  count: number;
}
