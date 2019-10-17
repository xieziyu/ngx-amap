import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapCircleDemoRoutingModule } from './amap-circle-demo-routing.module';
import { SimpleComponent } from './simple/simple.component';
import { MethodsComponent } from './methods/methods.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [CommonModule, AmapCircleDemoRoutingModule, SharedModule],
  declarations: [SimpleComponent, MethodsComponent, EventsComponent],
})
export class AmapCircleDemoModule {}
