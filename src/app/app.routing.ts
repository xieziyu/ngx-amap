import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

import { NgxAmapDemoComponent } from './views/ngx-amap-demo/ngx-amap-demo.component';

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
