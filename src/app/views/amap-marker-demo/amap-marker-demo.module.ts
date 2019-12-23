import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AmapMarkerDemoRoutingModule } from './amap-marker-demo-routing.module';
import { EventsComponent } from './events/events.component';
import { MethodsComponent } from './methods/methods.component';
import { SimpleMarkerComponent } from './simple-marker/simple-marker.component';
import { SimpleComponent } from './simple/simple.component';
import { SvgMarkerComponent } from './svg-marker/svg-marker.component';

@NgModule({
  imports: [
    CommonModule,
    AmapMarkerDemoRoutingModule,
    SharedModule
  ],
  declarations: [
    SimpleMarkerComponent,
    SvgMarkerComponent,
    SimpleComponent,
    MethodsComponent,
    EventsComponent
  ]
})
export class AmapMarkerDemoModule { }
