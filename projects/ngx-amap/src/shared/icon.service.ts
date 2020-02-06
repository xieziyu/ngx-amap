import { Injectable } from '@angular/core';
import { PixelService } from './pixel.service';
import { SizeService } from './size.service';
import { IIcon } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(private pixels: PixelService, private sizes: SizeService) {}

  create(options: string | AMap.Icon | IIcon): string | AMap.Icon | null {
    if (!options) {
      return null;
    }

    if (typeof options === 'string') {
      return options;
    }

    if (options instanceof AMap.Icon) {
      return options;
    }

    const iconOption: AMap.Icon.Options = {};
    const { size, image, imageOffset, imageSize } = options;
    if (size !== undefined) {
      iconOption.size = this.sizes.create(size);
    }
    if (image !== undefined) {
      iconOption.image = image;
    }
    if (imageOffset !== undefined) {
      iconOption.imageOffset = this.pixels.create(imageOffset);
    }
    if (imageSize !== undefined) {
      iconOption.imageSize = this.sizes.create(imageSize);
    }
    return new AMap.Icon(iconOption);
  }
}
