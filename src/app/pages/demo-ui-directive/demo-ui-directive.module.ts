/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAmapModule } from 'ngx-amap';
import { SharedModule } from '../../shared/shared.module';
import { DemoUIDirectiveRoutingModule } from './demo-ui-directive-routing.module';
import { DemoSimpleMarkerComponent } from './demo-simple-marker/demo-simple-marker.component';
import { DemoSimpleMarkerCustomTextComponent } from './demo-simple-marker/demo-simple-marker-custom-text/demo-simple-marker-custom-text.component';
import { DemoAwesomeMarkerComponent } from './demo-awesome-marker/demo-awesome-marker.component';
import { DemoAwesomeMarkerTextStyleComponent } from './demo-awesome-marker/demo-awesome-marker-text-style/demo-awesome-marker-text-style.component';

@NgModule({
  declarations: [DemoSimpleMarkerComponent, DemoSimpleMarkerCustomTextComponent, DemoAwesomeMarkerComponent, DemoAwesomeMarkerTextStyleComponent],
  imports: [CommonModule, NgxAmapModule, SharedModule, DemoUIDirectiveRoutingModule],
})
export class DemoUIDirectiveModule {}
