import { callbackFn } from '../../interface/callback.type';
import { DrivingResult } from './driving-result';
import { LngLat } from '../amap.lng-lat';
import { ILngLat } from '../../interface/lng-lat.interface';
import { TruckDrivingOptions } from '../../interface/driving/truck-driving-options.interface';

export interface CTruckDriving {
  new (opts?: TruckDrivingOptions): TruckDriving;
}

export interface TruckDriving {
  search(
    path: any[],
    callback: callbackFn<DrivingResult>
  );
  clear();
  setProvinceAndNumber(province: string, number: string);
}
