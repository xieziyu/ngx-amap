import { LngLat } from "./amap.lng-lat";

export interface CBounds {
    new(southWest: LngLat, northEast: LngLat): Bounds;
}

export declare class Bounds {
    constructor(southWest: LngLat, northEast: LngLat);
    contains(point: LngLat): boolean;
    getCenter(): LngLat;
    getSouthWest(): LngLat;
    getNorthEast(): LngLat;
    toString(): string;
}