import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncodeComponent } from './encode/encode.component';
import { DecodeComponent } from './decode/decode.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/AmapGeocoderService/encode',
    pathMatch: 'full',
  },
  {
    path: 'encode',
    component: EncodeComponent,
    data: {
      title: '正地理编码',
    },
  },
  {
    path: 'decode',
    component: DecodeComponent,
    data: {
      title: '逆地理编码',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmapGeocoderServiceDemoRoutingModule {}
