import { LngLat } from './amap.lng-lat';

// AMap.Bounds
export interface Bounds {
  southWest: LngLat;
  northEast: LngLat;

  contains(point: LngLat): boolean;
  getCenter(): LngLat;
  getSouthWest(): LngLat;
  getNorthEast(): LngLat;
  toString(): string;
}

export interface CBounds {
  new (southWest: LngLat, northEast: LngLat): Bounds;
}
