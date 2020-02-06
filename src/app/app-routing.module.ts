import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule),
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./pages/demo-component/demo-component.module').then(m => m.DemoComponentModule),
  },
  {
    path: 'directives',
    loadChildren: () =>
      import('./pages/demo-directive/demo-directive.module').then(m => m.DemoDirectiveModule),
  },
  {
    path: 'plugins',
    loadChildren: () =>
      import('./pages/demo-plugin-directive/demo-plugin-directive.module').then(
        m => m.DemoPluginDirectiveModule,
      ),
  },
  {
    path: 'ui-directives',
    loadChildren: () =>
      import('./pages/demo-ui-directive/demo-ui-directive.module').then(
        m => m.DemoUIDirectiveModule,
      ),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./pages/demo-services/demo-services.module').then(m => m.DemoServicesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
