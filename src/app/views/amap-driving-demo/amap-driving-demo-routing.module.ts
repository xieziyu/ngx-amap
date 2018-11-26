import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { EventsComponent } from './events/events.component';

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
      title: '简单示例'
    },
  },
  {
    path: 'events',
    component: EventsComponent,
    data: {
      title: '事件'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmapDrivingDemoRoutingModule { }
