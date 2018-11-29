import { Photo } from './photo';

export interface Discount {
  title: string;
  detail: string;
  start_time: string;
  end_time: string;
  sold_num: number;
  photos: Photo[];
  url: string;
  provider: string;
}
