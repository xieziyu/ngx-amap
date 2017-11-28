import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapAutocompleteServiceDemoRoutingModule } from './amap-autocomplete-service-demo-routing.module';
import { SearchComponent } from './search/search.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AmapAutocompleteServiceDemoRoutingModule,
    SharedModule
  ],
  declarations: [
    SearchComponent,
    EventsComponent
  ]
})
export class AmapAutocompleteServiceDemoModule { }
