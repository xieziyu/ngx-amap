import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapEllipseDemoRoutingModule } from './amap-ellipse-demo-routing.module';
import { MethodsComponent } from './methods/methods.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [
    CommonModule,
    AmapEllipseDemoRoutingModule,
    SharedModule
  ],
  declarations: [
    MethodsComponent,
    EventsComponent
  ]
})
export class AmapEllipseDemoModule { }
