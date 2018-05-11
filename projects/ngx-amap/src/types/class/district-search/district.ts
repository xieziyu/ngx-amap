import { LngLat } from '../amap.lng-lat';

export interface District {
  name: string;
  center: LngLat;
  citycode: string;
  adcode: string;
  level: string;
  boundaries: LngLat[][];
  districtList: District[];
}
