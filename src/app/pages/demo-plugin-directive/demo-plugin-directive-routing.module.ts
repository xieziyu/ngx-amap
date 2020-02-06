import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoAmapToolBarComponent } from './demo-amap-tool-bar/demo-amap-tool-bar.component';
import { DemoAmapMarkerClusterComponent } from './demo-amap-marker-cluster/demo-amap-marker-cluster.component';
import { DemoAmapHeatmapComponent } from './demo-amap-heatmap/demo-amap-heatmap.component';
import { DemoAmapAutocompleteComponent } from './demo-amap-autocomplete/demo-amap-autocomplete.component';

const routes: Routes = [
  { path: '', redirectTo: 'amap-tool-bar', pathMatch: 'full' },
  { path: 'amap-tool-bar', component: DemoAmapToolBarComponent },
  { path: 'amap-marker-cluster', component: DemoAmapMarkerClusterComponent },
  { path: 'amap-heatmap', component: DemoAmapHeatmapComponent },
  { path: 'amap-autocomplete', component: DemoAmapAutocompleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoPluginDirectiveRoutingModule {}
