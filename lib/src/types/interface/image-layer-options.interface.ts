import { Map } from '../class/amap.map';
import { Bounds } from '../class/amap.bounds';

export interface ImageLayerOptions {
    bounds?: Bounds;
    url?: string;
    opacity?: number;
    visible?: boolean;
    map?: Map;
    zIndex?: number;
    zooms?: [number, number];
}