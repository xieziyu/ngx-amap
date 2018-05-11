import { Injectable } from '@angular/core';
import { IIcon } from '../../types/interface';
import { AMapClass, Icon } from '../../types/class';
import { LoggerService } from '../logger/logger.service';
import { PixelService } from '../pixel/pixel.service';
import { SizeService } from '../size/size.service';

declare const AMap: AMapClass;

@Injectable()
export class IconService {
  TAG = 'icon-service';

  constructor(
    private logger: LoggerService,
    private pixel: PixelService,
    private size: SizeService
  ) {}

  create(options: string|Icon|IIcon, name?: string): string|Icon {
    if (typeof options === 'string') {
      return options;
    }

    if (!options) {
      return undefined;
    }

    if (!(<IIcon>options).size) {
      return <Icon>options;
    }

    let iconOption = <IIcon>options;
    if (iconOption.size) {
      iconOption.size = this.size.create(iconOption.size, `${name || 'icon'}.size`);
    }

    if (iconOption.imageSize) {
      iconOption.imageSize = this.size.create(iconOption.size, `${name || 'icon'}.imageSize`);
    }

    if (iconOption.imageOffset) {
      iconOption.imageOffset = this.pixel.create(iconOption.imageOffset, `${name || 'icon'}.imageOffset`);
    }

    if (!iconOption.size) {
      delete iconOption.size;
    }

    if (!iconOption.imageSize) {
      delete iconOption.imageSize;
    }

    if (!iconOption.imageOffset) {
      delete iconOption.imageOffset;
    }

    return new AMap.Icon(iconOption);
  }
}
