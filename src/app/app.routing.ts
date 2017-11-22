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
