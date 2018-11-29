import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapHeatmapDemoRoutingModule } from './amap-heatmap-demo-routing.module';
import { SimpleComponent } from './simple/simple.component';

@NgModule({
  imports: [
    CommonModule,
    AmapHeatmapDemoRoutingModule,
    SharedModule
  ],
  declarations: [
    SimpleComponent,
  ]
})
export class AmapHeatmapDemoModule { }
