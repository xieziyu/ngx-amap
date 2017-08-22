import { Component, ElementRef, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MapAPIWrapperService } from '../../services/map-api-wrapper/map-api-wrapper.service';
import { MapOptions } from '../../interfaces/amap.map-options';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-amap',
  templateUrl: 'ngx-amap.component.html',
  styleUrls: ['ngx-amap.component.scss']
})
export class NgxAmapComponent implements OnInit, OnDestroy {
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

  @Output() mapReady = new EventEmitter();

  constructor(private el: ElementRef, private mapAPI: MapAPIWrapperService) { }

  ngOnInit() {
    const container = this.el.nativeElement.querySelector('div.ngx-amap-container-inner');
    this.mapAPI.createMap(container, this._getOptions())
               .then(() => this.mapReady.emit(this.mapAPI.map));
  }

  ngOnDestroy() {
    this.mapAPI.destroy();
  }

  get allOptions() {
    return [
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
  }

  private _getOptions() {
    const options: MapOptions = {};

    this.allOptions.forEach(key => {
      if (this[key] !== undefined) {
        options[key] = this[key];
      }
    });

    return options;
  }
}
