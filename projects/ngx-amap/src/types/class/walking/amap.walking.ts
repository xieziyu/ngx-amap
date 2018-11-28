import { callbackFn } from '../../interface/callback.type';
import { WalkingResult } from './walking-result';
import { LngLat } from '../amap.lng-lat';
import { ILngLat } from '../../interface/lng-lat.interface';
import { WalkingOptions } from '../../interface/walking/walking-options.interface';

export interface CWalking {
  new (opts?: WalkingOptions): Walking;
}

export interface Walking {
  search(
    origin: ILngLat,
    destination: ILngLat,
    callback: callbackFn<WalkingResult>
  );
  search(
    points: any[],
    callback: callbackFn<WalkingResult>
  );
  clear();
  searchOnAMAP(obj: any);
}
