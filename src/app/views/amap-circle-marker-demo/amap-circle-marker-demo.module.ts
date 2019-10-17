import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapCircleMarkerDemoRoutingModule } from './amap-circle-marker-demo-routing.module';
import { SimpleComponent } from './simple/simple.component';
import { MethodsComponent } from './methods/methods.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [CommonModule, AmapCircleMarkerDemoRoutingModule, SharedModule],
  declarations: [SimpleComponent, MethodsComponent, EventsComponent],
})
export class AmapCircleMarkerDemoModule {}
