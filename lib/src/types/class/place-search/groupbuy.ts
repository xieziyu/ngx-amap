import { Photo } from './photo';

export interface Groupbuy {
  title: string;
  type_code: string;
  type: string;
  detail: string;
  stime: string;
  etime: string;
  count: number;
  sold_num: number;
  original_price: number;
  groupbuy_price: number;
  discount: number;
  ticket_address: string;
  ticket_tel: string;
  photos: Photo[];
  url: string;
  provider: string;
}
