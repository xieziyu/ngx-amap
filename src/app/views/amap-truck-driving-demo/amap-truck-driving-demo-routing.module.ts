import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/AmapTruckDrivingService/simple',
    pathMatch: 'full',
  },
  {
    path: 'simple',
    component: SimpleComponent,
    data: {
      title: 'AmapTruckDrivingService',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmapTruckDrivingDemoRoutingModule {}
