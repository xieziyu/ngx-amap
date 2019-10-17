import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/AmapAutocompleteService/search',
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: SearchComponent,
    data: {
      title: '搜索提示',
    },
  },
  {
    path: 'events',
    component: EventsComponent,
    data: {
      title: '事件',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmapAutocompleteServiceDemoRoutingModule {}
