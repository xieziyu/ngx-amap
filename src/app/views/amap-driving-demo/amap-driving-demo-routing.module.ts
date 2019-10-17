import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/AmapDrivingService/simple',
    pathMatch: 'full',
  },
  {
    path: 'simple',
    component: SimpleComponent,
    data: {
      title: 'AmapDrivingService',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmapDrivingDemoRoutingModule {}
