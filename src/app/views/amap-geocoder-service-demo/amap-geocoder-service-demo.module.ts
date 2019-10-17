import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapGeocoderServiceDemoRoutingModule } from './amap-geocoder-service-demo-routing.module';
import { EncodeComponent } from './encode/encode.component';
import { DecodeComponent } from './decode/decode.component';

@NgModule({
  imports: [CommonModule, FormsModule, AmapGeocoderServiceDemoRoutingModule, SharedModule],
  declarations: [EncodeComponent, DecodeComponent],
})
export class AmapGeocoderServiceDemoModule {}
