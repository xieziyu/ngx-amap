import { Photo } from './photo';

export interface Cinema {
  intro: string;
  rating: string;
  deep_src: string;
  parking: string;
  opentime_GDF: string;
  openingtime: string;
  photos: Photo[];
}
