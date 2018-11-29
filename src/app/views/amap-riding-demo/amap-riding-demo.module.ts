import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapRidingDemoRoutingModule } from './amap-riding-demo-routing.module';
import { SimpleComponent } from './simple/simple.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AmapRidingDemoRoutingModule
  ],
  declarations: [
    SimpleComponent
  ]
})
export class AmapRidingDemoModule { }
