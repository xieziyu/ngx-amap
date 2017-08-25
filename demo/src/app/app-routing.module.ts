import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo1Component } from './demos/demo-1/demo-1.component';
import { Demo2Component } from './demos/demo-2/demo-2.component';
import { Demo3Component } from './demos/demo-3/demo-3.component';

export const routes: Routes = [
  { path: 'demo1', component: Demo1Component },
  { path: 'demo2', component: Demo2Component },
  { path: 'demo3', component: Demo3Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
