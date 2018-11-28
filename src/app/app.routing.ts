import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: '首页'
    },
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'ngx-amap',
        loadChildren: './views/ngx-amap-demo/ngx-amap-demo.module#NgxAmapDemoModule',
        data: {
          title: 'ngx-amap'
        }
      },
      {
        path: 'amap-marker',
        loadChildren: './views/amap-marker-demo/amap-marker-demo.module#AmapMarkerDemoModule',
        data: {
          title: 'amap-marker'
        }
      },
      {
        path: 'amap-text',
        loadChildren: './views/amap-text-demo/amap-text-demo.module#AmapTextDemoModule',
        data: {
          title: 'amap-text'
        }
      },
      {
        path: 'amap-polyline',
        loadChildren: './views/amap-polyline-demo/amap-polyline-demo.module#AmapPolylineDemoModule',
        data: {
          title: 'amap-polyline'
        }
      },
      {
        path: 'amap-polygon',
        loadChildren: './views/amap-polygon-demo/amap-polygon-demo.module#AmapPolygonDemoModule',
        data: {
          title: 'amap-polygon'
        }
      },
      {
        path: 'amap-rectangle',
        loadChildren: './views/amap-rectangle-demo/amap-rectangle-demo.module#AmapRectangleDemoModule',
        data: {
          title: 'amap-rectangle'
        }
      },
      {
        path: 'amap-bezier-curve',
        loadChildren: './views/amap-bezier-curve-demo/amap-bezier-curve-demo.module#AmapBezierCurveDemoModule',
        data: {
          title: 'amap-bezier-curve'
        }
      },
      {
        path: 'amap-ellipse',
        loadChildren: './views/amap-ellipse-demo/amap-ellipse-demo.module#AmapEllipseDemoModule',
        data: {
          title: 'amap-ellipse'
        }
      },
      {
        path: 'amap-circle',
        loadChildren: './views/amap-circle-demo/amap-circle-demo.module#AmapCircleDemoModule',
        data: {
          title: 'amap-circle'
        }
      },
      {
        path: 'amap-circle-marker',
        loadChildren: './views/amap-circle-marker-demo/amap-circle-marker-demo.module#AmapCircleMarkerDemoModule',
        data: {
          title: 'amap-circle-marker'
        }
      },
      {
        path: 'amap-info-window',
        loadChildren: './views/amap-info-window-demo/amap-info-window-demo.module#AmapInfoWindowDemoModule',
        data: {
          title: 'amap-info-window'
        }
      },
      {
        path: 'amap-tool-bar',
        loadChildren: './views/amap-toolbar-demo/amap-toolbar-demo.module#AmapToolbarDemoModule',
        data: {
          title: 'amap-tool-bar'
        }
      },
      {
        path: 'amap-marker-clusterer',
        loadChildren: './views/amap-marker-clusterer-demo/amap-marker-clusterer-demo.module#AmapMarkerClustererDemoModule',
        data: {
          title: 'marker-clusterer'
        }
      },
      {
        path: 'AmapGeocoderService',
        loadChildren: './views/amap-geocoder-service-demo/amap-geocoder-service-demo.module#AmapGeocoderServiceDemoModule',
        data: {
          title: 'AmapGeocoderService'
        }
      },
      {
        path: 'AmapAutocompleteService',
        loadChildren: './views/amap-autocomplete-service-demo/amap-autocomplete-service-demo.module#AmapAutocompleteServiceDemoModule',
        data: {
          title: 'AmapAutocompleteService'
        }
      },
      {
        path: 'amap-autocomplete',
        loadChildren: './views/amap-autocomplete-demo/amap-autocomplete-demo.module#AmapAutocompleteDemoModule',
        data: {
          title: 'input[amapAutocomplete]'
        }
      },
      {
        path: 'AmapPlaceSearchService',
        loadChildren: './views/amap-place-search-service-demo/amap-place-search-service-demo.module#AmapPlaceSearchServiceDemoModule',
        data: {
          title: 'AmapPlaceSearchService'
        }
      },
      {
        path: 'AmapDistrictSearchService',
        // tslint:disable-next-line:max-line-length
        loadChildren: './views/amap-district-search-service-demo/amap-district-search-service-demo.module#AmapDistrictSearchServiceDemoModule',
        data: {
          title: 'AmapDistrictSearchService'
        }
      },
      {
        path: 'AmapMouseToolService',
        loadChildren: './views/amap-mouse-tool-service-demo/amap-mouse-tool-service-demo.module#AmapMouseToolServiceDemoModule',
        data: {
          title: 'AmapMouseToolService'
        }
      },
      {
        path: 'AmapDrivingService',
        loadChildren: './views/amap-driving-demo/amap-driving-demo.module#AmapDrivingDemoModule',
        data: {
          title: '路径规划服务'
        }
      },
      {
        path: 'AmapTruckDrivingService',
        loadChildren: './views/amap-truck-driving-demo/amap-truck-driving-demo.module#AmapTruckDrivingDemoModule',
        data: {
          title: '路径规划服务'
        }
      },
      {
        path: 'AmapTransferService',
        loadChildren: './views/amap-transfer-demo/amap-transfer-demo.module#AmapTransferDemoModule',
        data: {
          title: '路径规划服务'
        }
      },
      {
        path: 'AmapWalkingService',
        loadChildren: './views/amap-walking-demo/amap-walking-demo.module#AmapWalkingDemoModule',
        data: {
          title: '路径规划服务'
        }
      },
      {
        path: 'AmapRidingService',
        loadChildren: './views/amap-riding-demo/amap-riding-demo.module#AmapRidingDemoModule',
        data: {
          title: '路径规划服务'
        }
      },
      {
        path: 'amap-heatmap',
        loadChildren: './views/amap-heatmap-demo/amap-heatmap-demo.module#AmapHeatmapDemoModule',
        data: {
          title: 'amap-heatmap'
        }
      },
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  },

  { path: '**', redirectTo: '/pages/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
