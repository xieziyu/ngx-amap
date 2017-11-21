import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

import { NgxAmapDemoComponent } from './views/ngx-amap-demo/ngx-amap-demo.component';
import { AmapMarkerDemoComponent } from './views/amap-marker-demo/amap-marker-demo.component';
import { AmapInfoWindowDemoComponent } from './views/amap-info-window-demo/amap-info-window-demo.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/component/ngx-amap',
    pathMatch: 'full',
  },
  {
    path: 'component',
    component: FullLayoutComponent,
    data: {
      title: '组件'
    },
    children: [
      {
        path: 'ngx-amap',
        component: NgxAmapDemoComponent,
        data: {
          title: 'ngx-amap'
        }
      },
      {
        path: 'amap-info-window',
        component: AmapInfoWindowDemoComponent,
        data: {
          title: 'amap-info-window'
        }
      },
    ]
  },
  {
    path: 'directives',
    component: FullLayoutComponent,
    data: {
      title: '指令'
    },
    children: [
      {
        path: 'amap-marker',
        component: AmapMarkerDemoComponent,
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
