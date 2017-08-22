import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgxAmapComponent } from './core/components';
import { MapAPILoaderService, MAP_API_CONFIG, IMapAPILoaderConfig, MapAPIWrapperService } from './core/services';
import { BrowserGlobalProviders } from './core/utils/browser-globals';

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
        ...BrowserGlobalProviders,
        MapAPILoaderService,
        MapAPIWrapperService,
        { provide: MAP_API_CONFIG, useValue: mapAPILoaderConfig }
      ]
    };
  }
}
