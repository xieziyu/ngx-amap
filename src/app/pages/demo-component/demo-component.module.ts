// tslint:disable max-line-length
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAmapModule } from 'ngx-amap';
import { SharedModule } from '../../shared/shared.module';
import { DemoComponentRoutingModule } from './demo-component-routing.module';
import { DemoNgxAmapComponent } from './demo-ngx-amap/demo-ngx-amap.component';
import { DemoNgxAmapSimpleComponent } from './demo-ngx-amap/demo-ngx-amap-simple/demo-ngx-amap-simple.component';
import { DemoNgxAmapEventsComponent } from './demo-ngx-amap/demo-ngx-amap-events/demo-ngx-amap-events.component';
import { DemoNgxAmapMethodsComponent } from './demo-ngx-amap/demo-ngx-amap-methods/demo-ngx-amap-methods.component';
import { DemoAmapInfoWindowComponent } from './demo-amap-info-window/demo-amap-info-window.component';
import { DemoAmapInfoWindowSimpleComponent } from './demo-amap-info-window/demo-amap-info-window-simple/demo-amap-info-window-simple.component';
import { DemoAmapInfoWindowEventsComponent } from './demo-amap-info-window/demo-amap-info-window-events/demo-amap-info-window-events.component';
import { DemoAmapInfoWindowMarkerComponent } from './demo-amap-info-window/demo-amap-info-window-marker/demo-amap-info-window-marker.component';
import { DemoAmapTextComponent } from './demo-amap-text/demo-amap-text.component';
import { DemoAmapTextSimpleComponent } from './demo-amap-text/demo-amap-text-simple/demo-amap-text-simple.component';
import { DemoAmapTextEventsComponent } from './demo-amap-text/demo-amap-text-events/demo-amap-text-events.component';
import { DemoNgxAmapPluginsComponent } from './demo-ngx-amap/demo-ngx-amap-plugins/demo-ngx-amap-plugins.component';

@NgModule({
  declarations: [
    DemoNgxAmapComponent,
    DemoNgxAmapSimpleComponent,
    DemoNgxAmapEventsComponent,
    DemoNgxAmapMethodsComponent,
    DemoAmapInfoWindowComponent,
    DemoAmapInfoWindowSimpleComponent,
    DemoAmapInfoWindowEventsComponent,
    DemoAmapInfoWindowMarkerComponent,
    DemoAmapTextComponent,
    DemoAmapTextSimpleComponent,
    DemoAmapTextEventsComponent,
    DemoNgxAmapPluginsComponent,
  ],
  imports: [CommonModule, SharedModule, NgxAmapModule, DemoComponentRoutingModule],
})
export class DemoComponentModule {}
