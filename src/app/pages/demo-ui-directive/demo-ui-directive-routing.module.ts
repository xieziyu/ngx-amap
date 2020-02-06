import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoSimpleMarkerComponent } from './demo-simple-marker/demo-simple-marker.component';
import { DemoAwesomeMarkerComponent } from './demo-awesome-marker/demo-awesome-marker.component';

const routes: Routes = [
  { path: '', redirectTo: 'ui-simple-marker', pathMatch: 'full' },
  { path: 'ui-simple-marker', component: DemoSimpleMarkerComponent },
  { path: 'ui-awesome-marker', component: DemoAwesomeMarkerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoUIDirectiveRoutingModule {}
