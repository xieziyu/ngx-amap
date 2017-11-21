// AMap.LngLat
export declare class LngLat extends Array<number> {
  constructor(lng: number, lat: number);
  offset(w: number, s: number): LngLat;
  distance(lnglat: LngLat|Array<LngLat>): number;
  getLng(): number;
  getLat(): number;
  equals(lnglat: LngLat): boolean;
  toString(): string;
}

export interface CLngLat {
  new (lng: number, lat: number): LngLat;
}
