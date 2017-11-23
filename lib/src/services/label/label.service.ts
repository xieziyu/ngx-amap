import { Injectable } from '@angular/core';
import { ILabel } from '../../types/interface';
import { AMapClass } from '../../types/class';
import { LoggerService } from '../logger';
import { PixelService } from '../pixel/pixel.service';

declare const AMap: AMapClass;

@Injectable()
export class LabelService {
  TAG = 'label-service';

  constructor(private logger: LoggerService, private pixel: PixelService) {}

  create(options: ILabel, name?: string): ILabel {
    if (options) {
      return {
        content: options.content,
        offset: this.pixel.create(options.offset, `${name || 'label'}.offset`)
      };
    } else {
      return undefined;
    }
  }
}
