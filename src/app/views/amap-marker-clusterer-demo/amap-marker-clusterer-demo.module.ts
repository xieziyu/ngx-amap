import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapMarkerClustererDemoRoutingModule } from './amap-marker-clusterer-demo-routing.module';
import { SimpleComponent } from './simple/simple.component';
import { MethodsComponent } from './methods/methods.component';
import { EventsComponent } from './events/events.component';
import { CustomStyleComponent } from './custom-style/custom-style.component';

@NgModule({
  imports: [CommonModule, AmapMarkerClustererDemoRoutingModule, SharedModule],
  declarations: [SimpleComponent, MethodsComponent, EventsComponent, CustomStyleComponent],
})
export class AmapMarkerClustererDemoModule {}
