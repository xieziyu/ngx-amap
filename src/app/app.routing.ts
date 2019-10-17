import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { FullLayoutComponent, SimpleLayoutComponent } from './containers';

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
      title: '首页',
    },
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'ngx-amap',
        loadChildren: () =>
          import('./views/ngx-amap-demo/ngx-amap-demo.module').then(m => m.NgxAmapDemoModule),
        data: {
          title: 'ngx-amap',
        },
      },
      {
        path: 'amap-marker',
        loadChildren: () =>
          import('./views/amap-marker-demo/amap-marker-demo.module').then(
            m => m.AmapMarkerDemoModule,
          ),
        data: {
          title: 'amap-marker',
        },
      },
      {
        path: 'amap-text',
        loadChildren: () =>
          import('./views/amap-text-demo/amap-text-demo.module').then(m => m.AmapTextDemoModule),
        data: {
          title: 'amap-text',
        },
      },
      {
        path: 'amap-polyline',
        loadChildren: () =>
          import('./views/amap-polyline-demo/amap-polyline-demo.module').then(
            m => m.AmapPolylineDemoModule,
          ),
        data: {
          title: 'amap-polyline',
        },
      },
      {
        path: 'amap-polygon',
        loadChildren: () =>
          import('./views/amap-polygon-demo/amap-polygon-demo.module').then(
            m => m.AmapPolygonDemoModule,
          ),
        data: {
          title: 'amap-polygon',
        },
      },
      {
        path: 'amap-rectangle',
        loadChildren: () =>
          import('./views/amap-rectangle-demo/amap-rectangle-demo.module').then(
            m => m.AmapRectangleDemoModule,
          ),
        data: {
          title: 'amap-rectangle',
        },
      },
      {
        path: 'amap-bezier-curve',
        loadChildren: () =>
          import('./views/amap-bezier-curve-demo/amap-bezier-curve-demo.module').then(
            m => m.AmapBezierCurveDemoModule,
          ),
        data: {
          title: 'amap-bezier-curve',
        },
      },
      {
        path: 'amap-ellipse',
        loadChildren: () =>
          import('./views/amap-ellipse-demo/amap-ellipse-demo.module').then(
            m => m.AmapEllipseDemoModule,
          ),
        data: {
          title: 'amap-ellipse',
        },
      },
      {
        path: 'amap-circle',
        loadChildren: () =>
          import('./views/amap-circle-demo/amap-circle-demo.module').then(
            m => m.AmapCircleDemoModule,
          ),
        data: {
          title: 'amap-circle',
        },
      },
      {
        path: 'amap-circle-marker',
        loadChildren: () =>
          import('./views/amap-circle-marker-demo/amap-circle-marker-demo.module').then(
            m => m.AmapCircleMarkerDemoModule,
          ),
        data: {
          title: 'amap-circle-marker',
        },
      },
      {
        path: 'amap-info-window',
        loadChildren: () =>
          import('./views/amap-info-window-demo/amap-info-window-demo.module').then(
            m => m.AmapInfoWindowDemoModule,
          ),
        data: {
          title: 'amap-info-window',
        },
      },
      {
        path: 'amap-tool-bar',
        loadChildren: () =>
          import('./views/amap-toolbar-demo/amap-toolbar-demo.module').then(
            m => m.AmapToolbarDemoModule,
          ),
        data: {
          title: 'amap-tool-bar',
        },
      },
      {
        path: 'amap-marker-clusterer',
        loadChildren: () =>
          import('./views/amap-marker-clusterer-demo/amap-marker-clusterer-demo.module').then(
            m => m.AmapMarkerClustererDemoModule,
          ),
        data: {
          title: 'marker-clusterer',
        },
      },
      {
        path: 'AmapGeocoderService',
        loadChildren: () =>
          import('./views/amap-geocoder-service-demo/amap-geocoder-service-demo.module').then(
            m => m.AmapGeocoderServiceDemoModule,
          ),
        data: {
          title: 'AmapGeocoderService',
        },
      },
      {
        path: 'AmapAutocompleteService',
        loadChildren: () =>
          import(
            './views/amap-autocomplete-service-demo/amap-autocomplete-service-demo.module'
          ).then(m => m.AmapAutocompleteServiceDemoModule),
        data: {
          title: 'AmapAutocompleteService',
        },
      },
      {
        path: 'amap-autocomplete',
        loadChildren: () =>
          import('./views/amap-autocomplete-demo/amap-autocomplete-demo.module').then(
            m => m.AmapAutocompleteDemoModule,
          ),
        data: {
          title: 'input[amapAutocomplete]',
        },
      },
      {
        path: 'AmapPlaceSearchService',
        loadChildren: () =>
          import(
            './views/amap-place-search-service-demo/amap-place-search-service-demo.module'
          ).then(m => m.AmapPlaceSearchServiceDemoModule),
        data: {
          title: 'AmapPlaceSearchService',
        },
      },
      {
        path: 'AmapDistrictSearchService',
        // tslint:disable-next-line:max-line-length
        loadChildren: () =>
          import(
            './views/amap-district-search-service-demo/amap-district-search-service-demo.module'
          ).then(m => m.AmapDistrictSearchServiceDemoModule),
        data: {
          title: 'AmapDistrictSearchService',
        },
      },
      {
        path: 'AmapMouseToolService',
        loadChildren: () =>
          import('./views/amap-mouse-tool-service-demo/amap-mouse-tool-service-demo.module').then(
            m => m.AmapMouseToolServiceDemoModule,
          ),
        data: {
          title: 'AmapMouseToolService',
        },
      },
      {
        path: 'AmapDrivingService',
        loadChildren: () =>
          import('./views/amap-driving-demo/amap-driving-demo.module').then(
            m => m.AmapDrivingDemoModule,
          ),
        data: {
          title: '路径规划服务',
        },
      },
      {
        path: 'AmapTruckDrivingService',
        loadChildren: () =>
          import('./views/amap-truck-driving-demo/amap-truck-driving-demo.module').then(
            m => m.AmapTruckDrivingDemoModule,
          ),
        data: {
          title: '路径规划服务',
        },
      },
      {
        path: 'AmapTransferService',
        loadChildren: () =>
          import('./views/amap-transfer-demo/amap-transfer-demo.module').then(
            m => m.AmapTransferDemoModule,
          ),
        data: {
          title: '路径规划服务',
        },
      },
      {
        path: 'AmapWalkingService',
        loadChildren: () =>
          import('./views/amap-walking-demo/amap-walking-demo.module').then(
            m => m.AmapWalkingDemoModule,
          ),
        data: {
          title: '路径规划服务',
        },
      },
      {
        path: 'AmapRidingService',
        loadChildren: () =>
          import('./views/amap-riding-demo/amap-riding-demo.module').then(
            m => m.AmapRidingDemoModule,
          ),
        data: {
          title: '路径规划服务',
        },
      },
      {
        path: 'amap-heatmap',
        loadChildren: () =>
          import('./views/amap-heatmap-demo/amap-heatmap-demo.module').then(
            m => m.AmapHeatmapDemoModule,
          ),
        data: {
          title: 'amap-heatmap',
        },
      },
    ],
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages',
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule),
      },
    ],
  },

  { path: '**', redirectTo: '/pages/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
