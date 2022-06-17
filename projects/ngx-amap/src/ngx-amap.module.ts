import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxAmapConfig, NGX_AMAP_CONFIG } from './shared/ngx-amap-config';
import { LoggerService } from './shared/logger/logger.service';
import { DebugLoggerService } from './shared/logger/debug-logger.service';
import { NgxAmapComponent } from './components/ngx-amap/ngx-amap.component';
import { AmapMarkerDirective } from './directives/amap-marker/amap-marker.directive';
import { AmapPolylineDirective } from './directives/amap-polyline/amap-polyline.directive';
import { AmapInfoWindowComponent } from './components/amap-info-window/amap-info-window.component';
import { AmapTextComponent } from './components/amap-text/amap-text.component';
import { AmapPolygonDirective } from './directives/amap-polygon/amap-polygon.directive';
import { AmapBezierCurveDirective } from './directives/amap-bezier-curve/amap-bezier-curve.directive';
import { AmapRectangleDirective } from './directives/amap-rectangle/amap-rectangle.directive';
import { AmapCircleDirective } from './directives/amap-circle/amap-circle.directive';
import { AmapCircleMarkerDirective } from './directives/amap-circle-marker/amap-circle-marker.directive';
import { AmapEllipseDirective } from './directives/amap-ellipse/amap-ellipse.directive';
import { AmapToolBarDirective } from './directives/amap-tool-bar/amap-tool-bar.directive';
import { AmapMarkerClustererDirective } from './directives/amap-marker-clusterer/amap-marker-clusterer.directive';
import { AmapHeatmapDirective } from './directives/amap-heatmap/amap-heatmap.directive';
import { InputAmapAutocompleteDirective } from './directives/input-amap-autocomplete/input-amap-autocomplete.directive';
import { AmapPluginLoaderService } from './shared/amap-plugin-loader.service';
import { AmapUILoaderService } from './shared/amap-ui-loader.service';
import { AMapLoaderService } from './shared/amap-loader.service';
import { AmapAutocompleteService } from './services/amap-autocomplete/amap-autocomplete.service';
import { UISimpleMarkerDirective } from './directives/ui-simple-marker/ui-simple-marker.directive';
import { UIAwesomeMarkerDirective } from './directives/ui-awesome-marker/ui-awesome-marker.directive';
import { EventBinderService } from './shared/event-binder.service';

@NgModule({
  declarations: [
    NgxAmapComponent,
    AmapMarkerDirective,
    AmapPolylineDirective,
    AmapInfoWindowComponent,
    AmapTextComponent,
    AmapPolygonDirective,
    AmapBezierCurveDirective,
    AmapRectangleDirective,
    AmapCircleDirective,
    AmapCircleMarkerDirective,
    AmapEllipseDirective,
    AmapToolBarDirective,
    AmapMarkerClustererDirective,
    AmapHeatmapDirective,
    InputAmapAutocompleteDirective,
    UISimpleMarkerDirective,
    UIAwesomeMarkerDirective,
  ],
  imports: [],
  exports: [
    NgxAmapComponent,
    AmapMarkerDirective,
    AmapPolylineDirective,
    AmapInfoWindowComponent,
    AmapTextComponent,
    AmapPolygonDirective,
    AmapBezierCurveDirective,
    AmapRectangleDirective,
    AmapCircleDirective,
    AmapCircleMarkerDirective,
    AmapEllipseDirective,
    AmapToolBarDirective,
    AmapMarkerClustererDirective,
    AmapHeatmapDirective,
    InputAmapAutocompleteDirective,
    UISimpleMarkerDirective,
    UIAwesomeMarkerDirective,
  ],
})
export class NgxAmapModule {
  static forRoot(mapConfig?: NgxAmapConfig): ModuleWithProviders<NgxAmapModule> {
    return {
      ngModule: NgxAmapModule,
      providers: [
        { provide: NGX_AMAP_CONFIG, useValue: mapConfig || {} },
        {
          provide: LoggerService,
          useClass: mapConfig && mapConfig.debug ? DebugLoggerService : LoggerService,
        },
        AMapLoaderService,
        AmapPluginLoaderService,
        AmapUILoaderService,
        EventBinderService,
      ],
    };
  }
}

export {
  NgxAmapComponent,
  AmapMarkerDirective,
  AmapPolylineDirective,
  AmapInfoWindowComponent,
  AmapTextComponent,
  AmapPolygonDirective,
  AmapBezierCurveDirective,
  AmapRectangleDirective,
  AmapCircleDirective,
  AmapCircleMarkerDirective,
  AmapEllipseDirective,
  AmapToolBarDirective,
  AmapMarkerClustererDirective,
  AmapHeatmapDirective,
  InputAmapAutocompleteDirective,
  AmapPluginLoaderService,
  AmapUILoaderService,
  AMapLoaderService,
  AmapAutocompleteService,
  UISimpleMarkerDirective,
  UIAwesomeMarkerDirective,
  EventBinderService,
};
