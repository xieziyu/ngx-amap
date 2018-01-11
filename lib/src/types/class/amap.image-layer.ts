import { Map } from './amap.map';
import { Bounds } from './amap.bounds';
import { ImageLayerOptions } from "../interface/image-layer-options.interface";

export interface CImageLayer {
    new(opts: ImageLayerOptions): ImageLayer;
}

export declare class ImageLayer {
    constructor(opts: ImageLayerOptions);

    setMap(map: Map);
    getMap(): Map;
    show();
    hide();
    setzIndex(zindex: Number);
    getzIndex(): number;
    getElement(): HTMLCanvasElement;
    setImageUrl(url: string);
    getImageUrl(): string;
}