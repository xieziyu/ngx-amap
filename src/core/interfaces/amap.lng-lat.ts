export interface LngLat {
  new (lng: number, lat: number): LngLat;
  offset(w: number, s: number): LngLat;
  distance(lnglat: LngLat|Array<LngLat>): number;
  getLng(): number;
  getLat(): number;
  equals(lnglat: LngLat): boolean;
  toString(): string;
}
