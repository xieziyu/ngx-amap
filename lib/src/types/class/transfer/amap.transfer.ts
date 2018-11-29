import { callbackFn } from '../../interface/callback.type';
import { ILngLat } from '../../interface/lng-lat.interface';
import { TransferOptions } from '../../interface/transfer/transfer-options.interface';
import { TransferResult } from './transfer-result';

export interface CTransfer {
  new (opts?: TransferOptions): Transfer;
}

export interface Transfer {
  search(
    origin: ILngLat,
    destination: ILngLat,
    callback: callbackFn<TransferResult>
  );
  search(
    points: any[],
    callback: callbackFn<TransferResult>
  );
  setPolicy(policy: any);
  setCity(city: string);
  setCityd(city: string);
  leaveAt(time: string, data: string);
  clear();
  searchOnAMAP(obj: any);
}
