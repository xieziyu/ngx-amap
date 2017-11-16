import { NgModule, ModuleWithProviders } from '@angular/core';
import { MapAPILoaderService, MAP_API_CONFIG, IMapAPILoaderConfig } from './services/map-api-loader/map-api-loader.service';
import { LoggerService } from './services/logger/logger.service';
import { DebugLoggerService } from './services/logger/debug-logger.service';
import { WindowRef, DocumentRef } from './utils/browser-globals';
import { NgxAmapComponent } from './components/ngx-amap/ngx-amap.component';

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
        { provide: MAP_API_CONFIG, useValue: mapAPILoaderConfig },
        { provide: LoggerService, useClass: mapAPILoaderConfig.debug ? DebugLoggerService : LoggerService }
      ]
    };
  }
}

