import { Injectable, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MarkerWrapperService } from '../marker-wrapper/marker-wrapper.service';
import { KeyMap } from '../../../utils/key-map';
import * as AMapType from '../../../interfaces/amap.interface';
import { AMapClass } from '../../../interfaces/amap.interface';
import { MarkerOptions } from '../../../interfaces/amap.marker-options';
import { PixelOptions } from '../../../interfaces/amap.pixel-options';
import { LabelOptions } from '../../../interfaces/amap.label-options';
import { IconOptions } from '../../../interfaces/amap.icon-options';
import { OptionsChangeDetectorService } from '../../options-change-detector/options-change-detector.service';

declare const AMap: AMapClass;

@Injectable()
export class MarkerManagerService {
  private _markers = new KeyMap<Promise<AMapType.Marker>>();
  private _totalMarker = 0;
  private _freeMarkerID = 0;

  constructor(private markerWrapper: MarkerWrapperService, private detector: OptionsChangeDetectorService) { }

  getMarker(id: string): Promise<AMapType.Marker> {
    return this._markers.get(id);
  }

  addMarker(markerOptions: MarkerOptions): string {
    const markerPromise = this.markerWrapper.createMarker(markerOptions);
    const id = this._getFreeMarkerID();
    this._markers.set(id, markerPromise);
    return id;
  }

  deleteMarker(id: string): Promise<void> {
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
      markerPromise.then(marker => {
        this.detector.scan<PixelOptions>(changes, 'offset').subscribe(offset => {
          const value = this.markerWrapper.convertPixel('offset', offset.value);
          if (value) {
            marker.setOffset(value);
          }
        });

        this.detector.scan<string|IconOptions>(changes, 'icon').subscribe(icon => {
          const value = this.markerWrapper.convertIcon('icon', icon.value);
          if (value) {
            marker.setIcon(value);
          }
        });

        this.detector.scan<IconOptions>(changes, 'shadow').subscribe(shadow => {
          const value = <AMapType.Icon>this.markerWrapper.convertIcon('shadow', shadow.value);
          if (value) {
            marker.setShadow(value);
          }
        });

        this.detector.scan<LabelOptions>(changes, 'label').subscribe(label => {
          const value = this.markerWrapper.convertLabel(label.value);
          if (value) {
            marker.setLabel(value);
          }
        });

        this.detector.scan<boolean>(changes, 'clickable').subscribe(clickable => marker.setClickable(clickable.value));
        this.detector.scan<number[]>(changes, 'position').subscribe(position => marker.setPosition(position.value));
        this.detector.scan<number>(changes, 'angle').subscribe(angle => marker.setAngle(angle.value));
        this.detector.scan<number>(changes, 'zIndex').subscribe(zIndex => marker.setzIndex(zIndex.value));
        this.detector.scan<any>(changes, 'content').subscribe(content => marker.setContent(content.value));
        this.detector.scan<string>(changes, 'title').subscribe(title => marker.setTitle(title.value));
      });
    }
  }

  onMarkerExtraPropertyChange(markerId: string, changes: SimpleChanges) {
    const markerPromise = this._markers.get(markerId);

    if (markerPromise) {
      markerPromise.then(marker => {
        this.detector.scan(changes, 'hidden').subscribe(hidden => {
          if (hidden.value) {
            marker.hide();
          } else {
            marker.show();
          }
        });
      });
    }
  }

  observeEvent(markerId: string, event: string): Observable<any> {
    return Observable.create(observer => {
      const markerPromise = this._markers.get(markerId);

      if (markerPromise) {
        let listenerPromise = markerPromise.then(marker => {
          return AMap.event.addListener(marker, event, (e) => {
            setTimeout(() => observer.next(e));
          }, this);
        });

        return () => {
          listenerPromise.then(listener => {
            AMap.event.removeListener(listener);
            listenerPromise = null;
          });
        };
      }
    });
  }

  moveTo(id: string, lnglat: AMapType.LngLat|number[], speed: number, f?: (k:any)=>any): Promise<void> {
    const markerPromise = this._markers.get(id);
    if (markerPromise) {
      return markerPromise.then(marker => {
        marker.moveTo(lnglat, speed, f);
      });
    } else {
      return Promise.resolve();
    }
  }

  moveAlong(id: string, path: AMapType.LngLat[]|number[][], speed: number, f?: (k:any)=>any): Promise<void> {
    const markerPromise = this._markers.get(id);
    if (markerPromise) {
      return markerPromise.then(marker => {
        marker.moveAlong(path, speed, f);
      });
    } else {
      return Promise.resolve();
    }
  }

  commonAction<T>(id: string, action: string): Promise<T> {
    const markerPromise = this._markers.get(id);
    if (markerPromise) {
      return markerPromise.then(marker => marker[action]());
    } else {
      return Promise.resolve(undefined);
    }
  }
}
