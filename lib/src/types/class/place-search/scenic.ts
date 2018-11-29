import { Photo } from './photo';

export interface Scenic {
  intro: string;
  rating: string;
  deep_src: string;
  level: string;
  price: string;
  season: string;
  recommened: string;
  theme: string;
  ordering_wap_url: string;
  ordering_web_url: string;
  opentime_GDF: string;
  opentime: string;
  photos: Photo[];
}
