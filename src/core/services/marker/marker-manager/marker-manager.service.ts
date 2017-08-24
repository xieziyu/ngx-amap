import { Injectable, SimpleChanges } from '@angular/core';
import { MarkerWrapperService } from '../marker-wrapper/marker-wrapper.service';
import { AmapMarkerDirective } from '../../../directives/amap-marker/amap-marker.directive';
import { KeyMap } from '../../../utils/key-map';
import * as AMapType from '../../../interfaces/amap.interface';
import { MarkerOptions } from '../../../interfaces/amap.marker-options';
import { OptionsChangeDetectorService } from '../../options-change-detector/options-change-detector.service';

@Injectable()
export class MarkerManagerService {
  private _markers = new KeyMap<Promise<AMapType.Marker>>();
  private _totalMarker = 0;
  private _freeMarkerID = 0;

  constructor(private markerWrapper: MarkerWrapperService, private detector: OptionsChangeDetectorService) { }

  addMarker(marker: AmapMarkerDirective): string {
    const markerOptions = marker.getOptions();
    const markerPromise = this.markerWrapper.createMarker(markerOptions);
    const id = this._getFreeMarkerID();
    this._markers.set(id, markerPromise);
    return id;
  }

  deleteMarker(marker: AmapMarkerDirective): Promise<void> {
    const id = marker.id;
    const markerPromise = this._markers.get(id);
    if (!markerPromise) {
      return Promise.resolve();
    }

    return markerPromise.then(m => {
      m.setMap(null);
      this._markers.delete(id);
    });
  }

  private _getFreeMarkerID(): string {
    return (++this._freeMarkerID).toString();
  }

  onMarkerOptionChange(markerId: string, changes: SimpleChanges) {
    const markerPromise = this._markers.get(markerId);

    if (markerPromise) {
      // TODO: Pixel
      this.detector.scan<any>(changes, 'offset').subscribe(offset => {
        markerPromise.then(marker => marker.setOffset(offset.value));
      });

      this.detector.scan<boolean>(changes, 'clickable').subscribe(clickable => {
        markerPromise.then(marker => marker.setClickable(clickable.value));
      });

      this.detector.scan<number[]>(changes, 'position').subscribe(position => {
        markerPromise.then(marker => marker.setPosition(position.value));
      });

      this.detector.scan<number>(changes, 'angle').subscribe(angle => {
        markerPromise.then(marker => marker.setAngle(angle.value));
      });

      this.detector.scan<number>(changes, 'zIndex').subscribe(zIndex => {
        markerPromise.then(marker => marker.setzIndex(zIndex.value));
      });

      // TODO: Icon
      this.detector.scan<any>(changes, 'icon').subscribe(icon => {
        markerPromise.then(marker => marker.setIcon(icon.value));
      });

      this.detector.scan<any>(changes, 'content').subscribe(content => {
        markerPromise.then(marker => marker.setContent(content.value));
      });

      this.detector.scan<string>(changes, 'title').subscribe(title => {
        markerPromise.then(marker => marker.setTitle(title.value));
      });

      this.detector.scan<any>(changes, 'shadow').subscribe(shadow => {
        markerPromise.then(marker => marker.setShadow(shadow.value));
      });

      this.detector.scan<any>(changes, 'label').subscribe(label => {
        markerPromise.then(marker => marker.setLabel(label.value));
      });
    }
  }
}
