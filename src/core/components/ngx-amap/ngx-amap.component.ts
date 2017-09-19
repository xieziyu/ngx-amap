import { Component, ElementRef, OnInit, Input, OnDestroy, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MapAPIWrapperService } from '../../services/map-api-wrapper/map-api-wrapper.service';
import { MarkerManagerService, MarkerWrapperService } from '../../services/marker';
import { PluginManagerService } from '../../services/plugin';
import { InfoWindowManagerService } from '../../services/amap-info-window/info-window-manager.service';
import { MapOptions } from '../../interfaces/amap.map-options';
import { OptionsChangeDetectorService } from '../../services/options-change-detector/options-change-detector.service';

const ALL_MAP_OPTIONS = [
  'view',
  'layers',
  'zoom',
  'center',
  'labelzIndex',
  'zooms',
  'lang',
  'cursor',
  'crs',
  'animateEnable',
  'isHotspot',
  'defaultLayer',
  'rotateEnable',
  'resizeEnable',
  'showIndoorMap',
  'indoorMap',
  'expandZoomRange',
  'dragEnable',
  'zoomEnable',
  'doubleClickZoom',
  'keyboardEnable',
  'jogEnable',
  'scrollWheel',
  'touchZoom',
  'mapStyle',
  'features',
  'showBuildingBlock'
];

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-amap',
  templateUrl: 'ngx-amap.component.html',
  styleUrls: ['ngx-amap.component.scss'],
  providers: [
    MapAPIWrapperService,
    MarkerManagerService,
    MarkerWrapperService,
    PluginManagerService,
    InfoWindowManagerService
  ]
})
export class NgxAmapComponent implements OnInit, OnDestroy, OnChanges {
  // These properties are supported in MapOptions:
  @Input() view: any; // TODO: View2D
  @Input() layers: Array<any>; // TODO: TileLayer
  @Input() zoom: number;
  @Input() center: Array<number>;
  @Input() labelzIndex: number;
  @Input() zooms: Array<number>;
  @Input() lang: string;
  @Input() cursor: string;
  @Input() crs: string;
  @Input() animateEnable: boolean;
  @Input() isHotspot: boolean;
  @Input() defaultLayer: any; // TODO: TileLayer
  @Input() rotateEnable: boolean;
  @Input() resizeEnable: boolean;
  @Input() showIndoorMap: boolean;
  @Input() indoorMap: any; // TODO: IndoorMap
  @Input() expandZoomRange: boolean;
  @Input() dragEnable: boolean;
  @Input() zoomEnable: boolean;
  @Input() doubleClickZoom: boolean;
  @Input() keyboardEnable: boolean;
  @Input() jogEnable: boolean;
  @Input() scrollWheel: boolean;
  @Input() touchZoom: boolean;
  @Input() mapStyle: string;
  @Input() features: Array<string>;
  @Input() showBuildingBlock: boolean;

  // Extra property:
  @Input() city: string;
  @Input() name: string;

  // ngx-amap events:
  @Output() mapReady = new EventEmitter();

  constructor(private el: ElementRef, private mapAPI: MapAPIWrapperService, private detector: OptionsChangeDetectorService) { }

  ngOnInit() {
    const container = this.el.nativeElement.querySelector('div.ngx-amap-container-inner');
    this.mapAPI.createMap(container, this._getOptions())
               .then(() => this.mapReady.emit(this.mapAPI.map));
  }

  ngOnDestroy() {
    this.mapAPI.destroy();
  }

  ngOnChanges(changes: SimpleChanges) {
    this._onMapOptionChange(changes);
    this._onMapZoomCenterChange(changes);
  }

  private _getOptions() {
    const options: MapOptions = {};

    ALL_MAP_OPTIONS.forEach(key => {
      if (this[key] !== undefined) {
        options[key] = this[key];
      }
    });

    return options;
  }

  private _onMapOptionChange(changes: SimpleChanges) {
    this.detector.scan<number>(changes, 'labelzIndex').subscribe(labelzIndex => {
      if (!labelzIndex.isFirstChange) {
        this.mapAPI.setlabelzIndex(labelzIndex.value);
      }
    });

    this.detector.scan<string>(changes, 'city').subscribe(city => {
      this.mapAPI.setCity(city.value);
    });
  }

  private _onMapZoomCenterChange(changes: SimpleChanges) {
    this.detector.scanList(changes, ['zoom', 'center']).subscribe(({ zoom, center }) => {
      if (zoom.changed && !zoom.isFirstChange && !center.changed) {
        this.mapAPI.setZoom(zoom.value);
      } else if (zoom.changed && center.changed && !zoom.isFirstChange && !center.isFirstChange) {
        this.mapAPI.setZoomAndCenter(zoom.value, center.value);
      } else if (!zoom.changed && center.changed && !center.isFirstChange) {
        this.mapAPI.setCenter(center.value);
      }
    });
  }

  setFitView(): Promise<void> {
    return this.mapAPI.setFitView();
  }
}
