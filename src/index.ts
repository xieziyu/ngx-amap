import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgxAmapComponent } from './components/ngx-amap/ngx-amap.component';
import { MapAPILoaderService, MAP_API_CONFIG, IMapAPILoaderConfig } from './services';
import { BrowserGlobalProviders } from './utils/browser-globals';

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
        { provide: MAP_API_CONFIG, useValue: mapAPILoaderConfig }
      ]
    };
  }
}
