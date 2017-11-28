import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AmapAutocompleteDemoRoutingModule } from './amap-autocomplete-demo-routing.module';
import { SimpleComponent } from './simple/simple.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AmapAutocompleteDemoRoutingModule
  ],
  declarations: [
    SimpleComponent,
    EventsComponent
  ]
})
export class AmapAutocompleteDemoModule { }
