import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapDistrictSearchServiceDemoRoutingModule } from './amap-district-search-service-demo-routing.module';
import { SimpleComponent } from './simple/simple.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [CommonModule, SharedModule, AmapDistrictSearchServiceDemoRoutingModule],
  declarations: [SimpleComponent, EventsComponent],
})
export class AmapDistrictSearchServiceDemoModule {}
