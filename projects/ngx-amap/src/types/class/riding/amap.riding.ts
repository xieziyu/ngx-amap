import { callbackFn } from '../../interface/callback.type';
import { RidingResult } from './riding-result';
import { ILngLat } from '../../interface/lng-lat.interface';
import { RidingOptions } from '../../interface/riding/riding-options.interface';

export interface CRiding {
  new (opts?: RidingOptions): Riding;
}

export interface Riding {
  search(
    origin: ILngLat,
    destination: ILngLat,
    callback: callbackFn<RidingResult>
  );
  search(
    points: any[],
    callback: callbackFn<RidingResult>
  );
  clear();
}
