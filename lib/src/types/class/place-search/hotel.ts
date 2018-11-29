import { Photo } from './photo';

export interface Hotel {
  rating: string;
  star: string;
  intro: string;
  lowest_price: string;
  faci_rating: string;
  health_rating: string;
  environment_rating: string;
  service_rating: string;
  traffic: string;
  addition: string;
  deep_src: string;
  photos: Photo[];
}
