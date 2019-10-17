import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapInfoWindowDemoRoutingModule } from './amap-info-window-demo-routing.module';
import { SimpleComponent } from './simple/simple.component';
import { MethodsComponent } from './methods/methods.component';
import { EventsComponent } from './events/events.component';
import { InsideMarkerComponent } from './inside-marker/inside-marker.component';

@NgModule({
  imports: [CommonModule, AmapInfoWindowDemoRoutingModule, SharedModule],
  declarations: [SimpleComponent, MethodsComponent, EventsComponent, InsideMarkerComponent],
})
export class AmapInfoWindowDemoModule {}
