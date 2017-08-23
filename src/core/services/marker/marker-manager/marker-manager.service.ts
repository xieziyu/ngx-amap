import { Injectable } from '@angular/core';
import { MarkerWrapperService } from '../marker-wrapper/marker-wrapper.service';
import { AmapMarkerDirective } from '../../../directives/amap-marker/amap-marker.directive';
import { KeyMap } from '../../../utils/key-map';
import * as AMapType from '../../../interfaces/amap.interface';

@Injectable()
export class MarkerManagerService {
  private _markers = new KeyMap<Promise<AMapType.Marker>>();
  private _totalMarker = 0;
  private _freeMarkerID = 0;

  constructor(private markerWrapper: MarkerWrapperService) { }

  addMarker(marker: AmapMarkerDirective) {
    // TODO: use marker-wrapper service to create marker
  }

  private _getFreeMarkerID(): string {
    return (++this._freeMarkerID).toString();
  }
}
