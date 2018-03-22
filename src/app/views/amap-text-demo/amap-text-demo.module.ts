import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapTextDemoRoutingModule } from './amap-text-demo-routing.module';
import { SimpleComponent } from './simple/simple.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [
    CommonModule,
    AmapTextDemoRoutingModule,
    SharedModule
  ],
  declarations: [
    SimpleComponent,
    EventsComponent
  ]
})
export class AmapTextDemoModule { }
