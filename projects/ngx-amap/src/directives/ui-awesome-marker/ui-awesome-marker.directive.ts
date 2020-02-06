import { Directive, Input, OnChanges, SimpleChanges, NgZone } from '@angular/core';
import { zip } from 'rxjs';
import { UIAwesomeMarkerService } from './ui-awesome-marker.service';
import { UISimpleMarker, SimpleMarkerOptions } from '../ui-simple-marker/ui-simple-marker';
import { getOptions, ChangeFilter } from '../../utils';
import { EventBinderService } from '../../shared/event-binder.service';
import { AMapService } from '../../shared/amap.service';
import { PixelService } from '../../shared/pixel.service';
import { IconService } from '../../shared/icon.service';
import { MarkerLabelService } from '../../shared/marker-label.service';
import { LoggerService } from '../../shared/logger';

const AwesomeMarkerOptions = [...SimpleMarkerOptions, 'awesomeIcon', 'getClassnamesOfAwesomeIcon'];

@Directive({
  selector: 'ui-awesome-marker',
  exportAs: 'awesomeMarker',
  providers: [UIAwesomeMarkerService],
})
export class UIAwesomeMarkerDirective extends UISimpleMarker<AMapUI.AwesomeMarker>
  implements OnChanges {
  TAG = 'ui-awesome-marker';
  // ---- Options ----
  /**
   * icon 的名称，可用的 icons 参见 Font Awesome 官网
   */
  @Input() awesomeIcon: string;
  /**
   * 返回字体节点上的 classNames
   */
  @Input() getClassnamesOfAwesomeIcon: (icon: string) => string;

  constructor(
    protected os: UIAwesomeMarkerService,
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

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    const filter = ChangeFilter.of(changes);
    const marker = this.get();
    if (this.inited) {
      zip(filter.has<string>('awesomeIcon'), marker).subscribe(([v, m]) => m.setAwesomeIcon(v));
    }
  }

  getOptions() {
    return getOptions<AMapUI.AwesomeMarker.Options>(this, AwesomeMarkerOptions);
  }
}
