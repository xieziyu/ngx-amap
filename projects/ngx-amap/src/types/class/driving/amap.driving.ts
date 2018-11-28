import { callbackFn } from '../../interface/callback.type';
import { DrivingResult } from './driving-result';
import { LngLat } from '../amap.lng-lat';
import { ILngLat } from '../../interface/lng-lat.interface';
import { DrivingOptions } from '../../interface/driving/driving-options.interface';

export interface CDriving {
  new (opts?: DrivingOptions): Driving;
}

export interface Driving {
  search(
    origin: ILngLat,
    destination: ILngLat,
    opts: any,
    callback: callbackFn<DrivingResult>
  );
  search(
    points: any[],
    callback: callbackFn<DrivingResult>
  );
  setPolicy(policy: any);
  setAvoidPolygons(path: ILngLat[]);
  setAvoidRoad(road: string);
  clearAvoidRoad();
  clearAvoidPolygons();
  getAvoidPolygons(): LngLat[];
  getAvoidRoad(): string;
  clear();
  searchOnAMAP(obj: any);
  setProvinceAndNumber(province: string, number: string);
}
