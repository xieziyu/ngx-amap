import { LngLat } from '../amap.lng-lat';
import { Discount } from './discount';
import { Groupbuy } from './groupbuy';
import { Dining } from './dining';
import { Hotel } from './hotel';
import { Cinema } from './cinema';
import { Scenic } from './scenic';

export interface Poi {
  // basic:
  id: string;
  name: string;
  type: string;
  location: LngLat;
  address: string;
  distance: number;
  tel: string;

  // detail:
  website: string;
  pcode: string;
  citycode: string;
  adcode: string;
  postcode: string;
  pname: string;
  cityname: string;
  adname: string;
  email: string;
  entr_location: LngLat;
  exit_location: LngLat;
  groupbuy: boolean;
  discount: boolean;

  // deep:
  groupbuys: Groupbuy[];
  discounts: Discount[];
  deep_type: string;
  dining: Dining;
  hotel: Hotel;
  cinema: Cinema;
  scenic: Scenic;
}
