import { Injectable } from '@angular/core';
import { ISize } from '../../types/interface';
import { AMapClass, Size } from '../../types/class';
import { LoggerService } from '../logger';

declare const AMap: AMapClass;

@Injectable()
export class SizeService {
  TAG = 'size-service';

  constructor(private logger: LoggerService) {}

  create(options: ISize, name?: string): Size {
    if (this.verify(options, name)) {
      return new AMap.Size(options.width, options.height);
    } else {
      return undefined;
    }
  }

  verify(size: ISize, name?: string) {
    if (typeof size.width !== 'number' || typeof size.height !== 'number') {
      this.logger.e(`${name || 'size'} should have type {width: number, height: number}`);
      return false;
    }
    return true;
  }
}
