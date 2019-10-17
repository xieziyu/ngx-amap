import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/amap-tool-bar/simple',
    pathMatch: 'full',
  },
  {
    path: 'simple',
    component: SimpleComponent,
    data: {
      title: '简单示例',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmapHeatmapDemoRoutingModule {}
