import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoNgxAmapComponent } from './demo-ngx-amap/demo-ngx-amap.component';
import { DemoAmapInfoWindowComponent } from './demo-amap-info-window/demo-amap-info-window.component';
import { DemoAmapTextComponent } from './demo-amap-text/demo-amap-text.component';

const routes: Routes = [
  { path: '', redirectTo: 'ngx-amap', pathMatch: 'full' },
  { path: 'ngx-amap', component: DemoNgxAmapComponent },
  { path: 'amap-info-window', component: DemoAmapInfoWindowComponent },
  { path: 'amap-text', component: DemoAmapTextComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoComponentRoutingModule {}
