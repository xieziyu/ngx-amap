// tslint:disable max-line-length
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAmapModule } from 'ngx-amap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DemoPluginDirectiveRoutingModule } from './demo-plugin-directive-routing.module';
import { DemoAmapToolBarComponent } from './demo-amap-tool-bar/demo-amap-tool-bar.component';
import { DemoAmapToolBarSimpleComponent } from './demo-amap-tool-bar/demo-amap-tool-bar-simple/demo-amap-tool-bar-simple.component';
import { DemoAmapToolBarEventsComponent } from './demo-amap-tool-bar/demo-amap-tool-bar-events/demo-amap-tool-bar-events.component';
import { DemoAmapToolBarMethodsComponent } from './demo-amap-tool-bar/demo-amap-tool-bar-methods/demo-amap-tool-bar-methods.component';
import { DemoAmapMarkerClusterComponent } from './demo-amap-marker-cluster/demo-amap-marker-cluster.component';
import { DemoAmapMarkerClusterSimpleComponent } from './demo-amap-marker-cluster/demo-amap-marker-cluster-simple/demo-amap-marker-cluster-simple.component';
import { DemoAmapMarkerClusterEventsComponent } from './demo-amap-marker-cluster/demo-amap-marker-cluster-events/demo-amap-marker-cluster-events.component';
import { DemoAmapMarkerClusterMethodsComponent } from './demo-amap-marker-cluster/demo-amap-marker-cluster-methods/demo-amap-marker-cluster-methods.component';
import { DemoAmapMarkerClusterStylesComponent } from './demo-amap-marker-cluster/demo-amap-marker-cluster-styles/demo-amap-marker-cluster-styles.component';
import { DemoAmapHeatmapComponent } from './demo-amap-heatmap/demo-amap-heatmap.component';
import { DemoAmapHeatmapSimpleComponent } from './demo-amap-heatmap/demo-amap-heatmap-simple/demo-amap-heatmap-simple.component';
import { DemoAmapAutocompleteComponent } from './demo-amap-autocomplete/demo-amap-autocomplete.component';
import { DemoAmapAutocompleteSimpleComponent } from './demo-amap-autocomplete/demo-amap-autocomplete-simple/demo-amap-autocomplete-simple.component';

@NgModule({
  declarations: [
    DemoAmapToolBarComponent,
    DemoAmapToolBarSimpleComponent,
    DemoAmapToolBarEventsComponent,
    DemoAmapToolBarMethodsComponent,
    DemoAmapMarkerClusterComponent,
    DemoAmapMarkerClusterSimpleComponent,
    DemoAmapMarkerClusterEventsComponent,
    DemoAmapMarkerClusterMethodsComponent,
    DemoAmapMarkerClusterStylesComponent,
    DemoAmapHeatmapComponent,
    DemoAmapHeatmapSimpleComponent,
    DemoAmapAutocompleteComponent,
    DemoAmapAutocompleteSimpleComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxAmapModule,
    FormsModule,
    DemoPluginDirectiveRoutingModule,
  ],
})
export class DemoPluginDirectiveModule {}
