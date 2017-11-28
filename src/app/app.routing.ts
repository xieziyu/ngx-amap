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
        path: 'amap-polyline',
        loadChildren: './views/amap-polyline-demo/amap-polyline-demo.module#AmapPolylineDemoModule',
        data: {
          title: 'amap-polyline'
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
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
