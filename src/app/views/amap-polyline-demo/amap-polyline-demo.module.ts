import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapPolylineDemoRoutingModule } from './amap-polyline-demo-routing.module';
import { SimpleComponent } from './simple/simple.component';
import { MethodsComponent } from './methods/methods.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [CommonModule, AmapPolylineDemoRoutingModule, SharedModule],
  declarations: [SimpleComponent, MethodsComponent, EventsComponent],
})
export class AmapPolylineDemoModule {}
