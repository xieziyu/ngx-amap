import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapTruckDrivingDemoRoutingModule } from './amap-truck-driving-demo-routing.module';
import { SimpleComponent } from './simple/simple.component';

@NgModule({
  imports: [CommonModule, SharedModule, AmapTruckDrivingDemoRoutingModule],
  declarations: [SimpleComponent],
})
export class AmapTruckDrivingDemoModule {}
