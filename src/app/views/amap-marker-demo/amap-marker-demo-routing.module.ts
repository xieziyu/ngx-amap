import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { MethodsComponent } from './methods/methods.component';
import { SimpleMarkerComponent } from './simple-marker/simple-marker.component';
import { SimpleComponent } from './simple/simple.component';
import { SvgMarkerComponent } from './svg-marker/svg-marker.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/amap-marker/simple',
    pathMatch: 'full',
  },
  {
    path: 'simple',
    component: SimpleComponent,
    data: {
      title: '简单示例'
    }
  },
  {
    path: 'methods',
    component: MethodsComponent,
    data: {
      title: '调用方法'
    }
  },
  {
    path: 'events',
    component: EventsComponent,
    data: {
      title: '事件'
    }
  },
  {
    path: 'svg-marker',
    component: SvgMarkerComponent,
    data: {
      title: 'SvgMarker'
    }
  },
  {
    path: 'simple-marker',
    component: SimpleMarkerComponent,
    data: {
      title: 'SimpleMarker'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmapMarkerDemoRoutingModule { }
