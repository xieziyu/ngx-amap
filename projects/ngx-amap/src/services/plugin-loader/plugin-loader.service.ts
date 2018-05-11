import { Injectable } from '@angular/core';
import { AMapClass } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { MapAPILoaderService } from '../map-api-loader/map-api-loader.service';

declare const AMap: AMapClass;

@Injectable()
export class PluginLoaderService {
  TAG = 'plugin-loader';

  constructor(private loader: MapAPILoaderService, private logger: LoggerService) {}

  load(name: string): Promise<any> {
    this.logger.d(this.TAG, 'loading plugin:', name);

    return this.loader.load().then(() => {
      return new Promise(resolve => {
        this.logger.d(this.TAG, 'loading plugin:', name, 'COMPLETE');
        AMap.plugin(name, () => resolve());
      });
    });
  }
}
