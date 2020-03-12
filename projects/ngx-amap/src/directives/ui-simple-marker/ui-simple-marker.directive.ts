import { Directive, NgZone } from '@angular/core';
import { UISimpleMarkerService } from './ui-simple-marker.service';
import { UISimpleMarker } from './ui-simple-marker';
import { EventBinderService } from '../../shared/event-binder.service';
import { AMapService } from '../../shared/amap.service';
import { PixelService } from '../../shared/pixel.service';
import { IconService } from '../../shared/icon.service';
import { MarkerLabelService } from '../../shared/marker-label.service';
import { LoggerService } from '../../shared/logger/logger.service';

@Directive({
  selector: 'ui-simple-marker',
  exportAs: 'simpleMarker',
  providers: [UISimpleMarkerService],
})
export class UISimpleMarkerDirective extends UISimpleMarker {
  constructor(
    protected os: UISimpleMarkerService,
    protected binder: EventBinderService,
    protected amaps: AMapService,
    protected pixels: PixelService,
    protected icons: IconService,
    protected mlabels: MarkerLabelService,
    protected logger: LoggerService,
    protected ngZone: NgZone,
  ) {
    super(os, binder, amaps, pixels, icons, mlabels, logger, ngZone);
  }
}
