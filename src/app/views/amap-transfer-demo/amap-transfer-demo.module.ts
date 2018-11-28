import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapTransferDemoRoutingModule } from './amap-transfer-demo-routing.module';
import { SimpleComponent } from './simple/simple.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AmapTransferDemoRoutingModule
  ],
  declarations: [
    SimpleComponent
  ]
})
export class AmapTransferDemoModule { }
