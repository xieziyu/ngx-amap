import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgxAmapComponent } from './core/components';
import { MapAPILoaderService, MAP_API_CONFIG, IMapAPILoaderConfig } from './core/services';
import { WindowRef, DocumentRef } from './core/utils/browser-globals';

@NgModule({
  declarations: [
    NgxAmapComponent
  ],
  exports: [
    NgxAmapComponent
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
        { provide: MAP_API_CONFIG, useValue: mapAPILoaderConfig }
      ]
    };
  }
}
