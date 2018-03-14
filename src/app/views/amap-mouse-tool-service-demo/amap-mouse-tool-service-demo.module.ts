import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleComponent } from './simple/simple.component';
import { SharedModule } from '../shared/shared.module';
import { AmapMouseToolServiceDemoRoutingModule } from './amap-mouse-tool-service-demo-routing.module';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AmapMouseToolServiceDemoRoutingModule,
  ],
  declarations: [
    SimpleComponent,
    EventsComponent,
  ]
})
export class AmapMouseToolServiceDemoModule {
}
