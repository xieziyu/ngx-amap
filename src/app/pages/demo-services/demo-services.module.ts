// eslint-disable  max-len
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAmapModule } from 'ngx-amap';
import { SharedModule } from '../../shared/shared.module';
import { DemoServicesRoutingModule } from './demo-services-routing.module';
import { DemoAmapAutocompleteComponent } from './demo-amap-autocomplete/demo-amap-autocomplete.component';
import { DemoAmapAutocompleteSimpleComponent } from './demo-amap-autocomplete/demo-amap-autocomplete-simple/demo-amap-autocomplete-simple.component';
import { DemoPluginLoaderComponent } from './demo-plugin-loader/demo-plugin-loader.component';
import { DemoPluginDrivingComponent } from './demo-plugin-loader/demo-plugin-driving/demo-plugin-driving.component';
import { DemoPluginTransferComponent } from './demo-plugin-loader/demo-plugin-transfer/demo-plugin-transfer.component';
import { DemoUiLoaderComponent } from './demo-ui-loader/demo-ui-loader.component';
import { DemoUiSvgMarkerComponent } from './demo-ui-loader/demo-ui-svg-marker/demo-ui-svg-marker.component';

@NgModule({
  declarations: [DemoAmapAutocompleteComponent, DemoAmapAutocompleteSimpleComponent, DemoPluginLoaderComponent, DemoPluginDrivingComponent, DemoPluginTransferComponent, DemoUiLoaderComponent, DemoUiSvgMarkerComponent],
  imports: [CommonModule, SharedModule, NgxAmapModule, DemoServicesRoutingModule],
})
export class DemoServicesModule {}
