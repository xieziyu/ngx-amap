import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapRectangleDemoRoutingModule } from './amap-rectangle-demo-routing.module';
import { MethodsComponent } from './methods/methods.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [CommonModule, AmapRectangleDemoRoutingModule, SharedModule],
  declarations: [MethodsComponent, EventsComponent],
})
export class AmapRectangleDemoModule {}
