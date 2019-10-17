import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapPlaceSearchServiceDemoRoutingModule } from './amap-place-search-service-demo-routing.module';
import { SimpleComponent } from './simple/simple.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [CommonModule, SharedModule, AmapPlaceSearchServiceDemoRoutingModule],
  declarations: [SimpleComponent, EventsComponent],
})
export class AmapPlaceSearchServiceDemoModule {}
