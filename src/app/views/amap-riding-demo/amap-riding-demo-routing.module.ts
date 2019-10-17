import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/AmapRidingService/simple',
    pathMatch: 'full',
  },
  {
    path: 'simple',
    component: SimpleComponent,
    data: {
      title: 'AmapRidingService',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmapRidingDemoRoutingModule {}
