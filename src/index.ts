import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgxAmapComponent } from './core/components';
import { AmapInfoWindowComponent } from './core/components';
import { AmapMarkerDirective } from './core/directives';
import { AmapPolylineDirective } from './core/directives';
import { AmapToolBarDirective } from './core/directives';
import { MapAPILoaderService, MAP_API_CONFIG, IMapAPILoaderConfig, OptionsChangeDetectorService } from './core/services';
import { WindowRef, DocumentRef } from './core/utils/browser-globals';

@NgModule({
  declarations: [
    NgxAmapComponent,
    AmapMarkerDirective,
    AmapToolBarDirective,
    AmapInfoWindowComponent,
    AmapPolylineDirective
  ],
  exports: [
    NgxAmapComponent,
    AmapMarkerDirective,
    AmapToolBarDirective,
    AmapInfoWindowComponent,
    AmapPolylineDirective
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
        OptionsChangeDetectorService,
        { provide: MAP_API_CONFIG, useValue: mapAPILoaderConfig }
      ]
    };
  }
}
