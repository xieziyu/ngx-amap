import { Injectable } from '@angular/core';
import { IPixel, ImageLayerOptions } from '../../types/interface';
import { AMapClass, Map, ImageLayer } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { MapAPIService } from '../map-api/map-api.service';
import { PixelService } from '../pixel/pixel.service';
import { IconService } from '../icon/icon.service';
import { LabelService } from '../label/label.service';
import { EventBinder } from '../../utils/event-binder';

declare const AMap: AMapClass;

@Injectable()
export class ImageLayerService extends EventBinder {
    TAG = 'image-layer-service';
    private _map: Promise<Map>;

    constructor(
        private map: MapAPIService,
        private logger: LoggerService
    ) {
        super();
        this._map = map.map;
    }

    create(options: ImageLayerOptions, addToMap = true): Promise<ImageLayer> {
        return this._map.then(map => {


            if (addToMap) {
                options.map = map;
            }
            return new AMap.ImageLayer(options);
        });
    }

    destroy(imageLayer: Promise<ImageLayer>): Promise<void> {
        return imageLayer.then(m => {
            m.setMap(null);
        });
    }
}
