import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapWalkingDemoRoutingModule } from './amap-walking-demo-routing.module';
import { SimpleComponent } from './simple/simple.component';

@NgModule({
  imports: [CommonModule, SharedModule, AmapWalkingDemoRoutingModule],
  declarations: [SimpleComponent],
})
export class AmapWalkingDemoModule {}
