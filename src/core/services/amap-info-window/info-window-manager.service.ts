import { Injectable, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MapAPIWrapperService } from '../map-api-wrapper/map-api-wrapper.service';
import * as AMapType from '../../interfaces/amap.interface';
import { AMapClass } from '../../interfaces/amap.interface';
import { InfoWindowOptions } from '../../interfaces/amap.info-window-options';
import { PixelOptions } from '../../interfaces/amap.pixel-options';
import { SizeOptions } from '../../interfaces/amap.size-options';
import { OptionsChangeDetectorService } from '../options-change-detector/options-change-detector.service';
import { AmapInfoWindowComponent } from '../../components/amap-info-window/amap-info-window.component';
import { KeyMap } from '../../utils/key-map';

declare const AMap: AMapClass;

@Injectable()
export class InfoWindowManagerService {
  private _map: Promise<AMapType.Map>;
  private _infoWindows = new KeyMap<Promise<AMapType.InfoWindow>>();
  private _freeID = 0;

  constructor(private mapAPI: MapAPIWrapperService, private detector: OptionsChangeDetectorService) {
    this._map = mapAPI.map;
  }

  addInfoWindow(options: InfoWindowOptions): string {
    const infoWindowPromise = this._map.then(map => {
      if (options.offset && !options.offset.getX) {
        // if offset is PixelOptions, not AMap.Pixel
        options.offset = this.convertPixel('offset', options.offset);
        if (options.offset === undefined) {
          delete options.offset;
        }
      }

      if (options.size && !options.size.getWidth) {
        // if size is SizeOptions, not AMap.Size
        options.size = this.convertSize('size', options.size);
        if (options.size === undefined) {
          delete options.size;
        }
      }

      return new AMap.InfoWindow(options);
    });

    const id = this._getFreeID();
    this._infoWindows.set(id, infoWindowPromise);
    return id;
  }

  private _getFreeID(): string {
    return (++this._freeID).toString();
  }

  deleteInfoWindow(id: string): Promise<void> {
    const infoWindowPromise = this._infoWindows.get(id);
    if (!infoWindowPromise) {
      return Promise.resolve();
    }

    return infoWindowPromise.then(w => {
      w.close();
      this._infoWindows.delete(id);
    });
  }

  convertPixel(name: string, pixel: PixelOptions): AMapType.Pixel {
    return this.mapAPI.verifyPixel('amap-info-window', name, pixel) ? this.mapAPI.createPixel(pixel) : undefined;
  }

  convertSize(name: string, size: SizeOptions): AMapType.Size {
    return this.mapAPI.verifySize('amap-info-window', name, size) ? this.mapAPI.createSize(size) : undefined;
  }

  onOptionsChange(id: string, changes: SimpleChanges) {
    const infoWindowPromise = this._infoWindows.get(id);

    if (infoWindowPromise) {
      infoWindowPromise.then(infoWindow => {
        this.detector.scan<AMapType.Size>(changes, 'size').subscribe(size => {
          if (!size.value.getWidth) {
            const value = this.convertSize('size', size.value);
            if (value) {
              infoWindow.setSize(value);
            }
          }
        });

        this.detector.scan<AMapType.LngLat>(changes, 'position').subscribe(position => infoWindow.setPosition(position.value));
        this.detector.scan<any>(changes, 'content').subscribe(content => infoWindow.setContent(content.value));
      });
    }
  }

  observeEvent(id: string, event: string): Observable<any> {
    return Observable.create(observer => {
      const infoWindowPromise = this._infoWindows.get(id);

      if (infoWindowPromise) {
        let listenerPromise = infoWindowPromise.then(infoWindow => {
          return AMap.event.addListener(infoWindow, event, (e) => {
            observer.next(e);
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

  open(component: AmapInfoWindowComponent): Promise<void> {
    const infoWindowPromise = this._infoWindows.get(component.id);

    return infoWindowPromise.then(infoWindow => {
      if (component.hostMarker) {
        return component.hostMarker.then(marker => {
          return this._map.then(map => {
            return infoWindow.open(map, marker.getPosition());
          });
        });
      } else {
        return this._map.then(map => {
          return infoWindow.open(map);
        });
      }
    });
  }

  close(component: AmapInfoWindowComponent): Promise<void> {
    const infoWindowPromise = this._infoWindows.get(component.id);

    return infoWindowPromise.then(infoWindow => {
      infoWindow.close();
    });
  }
}
