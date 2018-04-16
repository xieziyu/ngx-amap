import { NgModule, ModuleWithProviders } from '@angular/core';
import { MapAPILoaderService, MAP_API_CONFIG, IMapAPILoaderConfig } from './services/map-api-loader/map-api-loader.service';
import { LoggerService } from './services/logger/logger.service';
import { DebugLoggerService } from './services/logger/debug-logger.service';
import { WindowRef, DocumentRef } from './utils/browser-globals';
import { NgxAmapComponent } from './components/ngx-amap/ngx-amap.component';
import { AmapMarkerDirective } from './directives/amap-marker/amap-marker.directive';
import { AmapInfoWindowComponent } from './components/amap-info-window/amap-info-window.component';
import { AmapPolylineDirective } from './directives/amap-polyline/amap-polyline.directive';
import { AmapPolygonDirective } from './directives/amap-polygon/amap-polygon.directive';
import { AmapToolBarDirective } from './directives/amap-toolbar/amap-toolbar.directive';
import { AmapMarkerClustererDirective } from './directives/amap-marker-clusterer/amap-marker-clusterer.directive';
import { PixelService } from './services/pixel/pixel.service';
import { SizeService } from './services/size/size.service';
import { IconService } from './services/icon/icon.service';
import { LabelService } from './services/label/label.service';
import { AmapGeocoderService, AmapGeocoderWrapper } from './services/amap-geocoder/amap-geocoder.service';
import { PluginLoaderService } from './services/plugin-loader/plugin-loader.service';
import { AmapAutocompleteService, AmapAutocompleteWrapper } from './services/amap-autocomplete/amap-autocomplete.service';
import { AmapAutocompleteDirective } from './directives/amap-autocomplete/amap-autocomplete.directive';
import { AmapPlaceSearchService, AmapPlaceSearchWrapper } from './services/amap-place-search/amap-place-search.service';
import { AmapDistrictSearchService, AmapDistrictSearchWrapper } from './services/amap-district-search/amap-district-search.service';
import { AmapCircleDirective } from './directives/amap-circle/amap-circle.directive';
import { AmapCircleMarkerDirective } from './directives/amap-circle-marker/amap-circle-marker.directive';
import { AmapMouseToolService, AmapMouseToolWrapper } from './services/amap-mouse-tool/amap-mouse-tool.service';
import { AmapTextDirective } from './directives/amap-text/amap-text.directive';
import { AmapBezierCurveDirective } from './directives/amap-bezier-curve/amap-bezier-curve.directive';
import { AmapEllipseDirective } from './directives/amap-ellipse/amap-ellipse.directive';
import { AmapRectangleDirective } from './directives/amap-rectangle/amap-rectangle.directive';

@NgModule({
  declarations: [
    NgxAmapComponent,
    AmapMarkerDirective,
    AmapInfoWindowComponent,
    AmapPolylineDirective,
    AmapToolBarDirective,
    AmapMarkerClustererDirective,
    AmapAutocompleteDirective,
    AmapCircleDirective,
    AmapCircleMarkerDirective,
    AmapPolygonDirective,
    AmapTextDirective,
    AmapBezierCurveDirective,
    AmapEllipseDirective,
    AmapRectangleDirective
  ],
  exports: [
    NgxAmapComponent,
    AmapMarkerDirective,
    AmapInfoWindowComponent,
    AmapPolylineDirective,
    AmapToolBarDirective,
    AmapMarkerClustererDirective,
    AmapAutocompleteDirective,
    AmapCircleDirective,
    AmapCircleMarkerDirective,
    AmapPolygonDirective,
    AmapTextDirective,
    AmapBezierCurveDirective,
    AmapEllipseDirective,
    AmapRectangleDirective
  ]
})
export class NgxAmapModule {
  static forRoot(mapAPILoaderConfig?: IMapAPILoaderConfig): ModuleWithProviders {
    return {
      ngModule: NgxAmapModule,
      providers: [
        WindowRef,
        DocumentRef,
        MapAPILoaderService,
        { provide: MAP_API_CONFIG, useValue: mapAPILoaderConfig },
        { provide: LoggerService, useClass: mapAPILoaderConfig.debug ? DebugLoggerService : LoggerService },
        PixelService,
        SizeService,
        IconService,
        LabelService,
        AmapGeocoderService,
        PluginLoaderService,
        AmapAutocompleteService,
        AmapMouseToolService,
        AmapPlaceSearchService,
        AmapDistrictSearchService
      ]
    };
  }
}

export {
  NgxAmapComponent,
  AmapMarkerDirective,
  AmapInfoWindowComponent,
  AmapPolylineDirective,
  AmapToolBarDirective,
  AmapMarkerClustererDirective,
  AmapGeocoderService,
  AmapGeocoderWrapper,
  AmapAutocompleteService,
  AmapAutocompleteWrapper,
  AmapAutocompleteDirective,
  AmapPlaceSearchService,
  AmapPlaceSearchWrapper,
  AmapDistrictSearchService,
  AmapDistrictSearchWrapper,
  AmapMouseToolService,
  AmapMouseToolWrapper,
  AmapCircleDirective,
  AmapCircleMarkerDirective,
  AmapPolygonDirective,
  AmapTextDirective,
  AmapBezierCurveDirective,
  AmapEllipseDirective,
  AmapRectangleDirective
};
