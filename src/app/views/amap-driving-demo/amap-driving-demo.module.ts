import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapDrivingDemoRoutingModule } from './amap-driving-demo-routing.module';
import { SimpleComponent } from './simple/simple.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AmapDrivingDemoRoutingModule
  ],
  declarations: [
    SimpleComponent,
    EventsComponent
  ]
})
export class AmapDrivingDemoModule { }
