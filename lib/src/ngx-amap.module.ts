import { NgModule, ModuleWithProviders } from '@angular/core';
import { MapAPILoaderService, MAP_API_CONFIG, IMapAPILoaderConfig } from './core/services/map-api-loader/map-api-loader.service';
import { WindowRef, DocumentRef } from './core/utils/browser-globals';

@NgModule({
  declarations: [],
  exports: []
})
export class NgxAmapModule {
  static forRoot(mapAPILoaderConfig?: IMapAPILoaderConfig): ModuleWithProviders {
    return {
      ngModule: NgxAmapModule,
      providers: [
        WindowRef,
        DocumentRef,
        MapAPILoaderService,
        { provide: MAP_API_CONFIG, useValue: mapAPILoaderConfig }
      ]
    };
  }
}

