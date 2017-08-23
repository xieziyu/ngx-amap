import { Injectable } from '@angular/core';
import { MapAPIWrapperService } from '../../map-api-wrapper/map-api-wrapper.service';

@Injectable()
export class MarkerWrapperService {
  constructor(private mapAPI: MapAPIWrapperService) { }

  createMarker() {
    // TODO: create a Promise wrapper for marker
  }
}
