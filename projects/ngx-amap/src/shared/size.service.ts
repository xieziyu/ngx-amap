import { Injectable } from '@angular/core';
import { ISize } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class SizeService {
  constructor() {}

  create(options: ISize | AMap.SizeValue): AMap.SizeValue | null {
    if (!options) {
      return null;
    }
    if (options instanceof AMap.Size || Array.isArray(options)) {
      return options;
    }
    if (options.width !== undefined && options.height !== undefined) {
      return new AMap.Size(options.width, options.height);
    }
    if (options.w !== undefined && options.h !== undefined) {
      return new AMap.Size(options.w, options.h);
    }
    return null;
  }
}
