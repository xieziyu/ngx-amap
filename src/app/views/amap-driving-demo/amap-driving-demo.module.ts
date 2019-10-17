import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapDrivingDemoRoutingModule } from './amap-driving-demo-routing.module';
import { SimpleComponent } from './simple/simple.component';

@NgModule({
  imports: [CommonModule, SharedModule, AmapDrivingDemoRoutingModule],
  declarations: [SimpleComponent],
})
export class AmapDrivingDemoModule {}
