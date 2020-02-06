import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoAmapAutocompleteComponent } from './demo-amap-autocomplete/demo-amap-autocomplete.component';
import { DemoPluginLoaderComponent } from './demo-plugin-loader/demo-plugin-loader.component';
import { DemoUiLoaderComponent } from './demo-ui-loader/demo-ui-loader.component';

const routes: Routes = [
  { path: '', redirectTo: 'amap-autocomplete', pathMatch: 'full' },
  { path: 'amap-autocomplete', component: DemoAmapAutocompleteComponent },
  { path: 'amap-plugin-loader', component: DemoPluginLoaderComponent },
  { path: 'amap-ui-loader', component: DemoUiLoaderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoServicesRoutingModule {}
