import { NgModule } from '@angular/core';

import { MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline } from '@ant-design/icons-angular/icons';
import { NZ_ICONS } from 'ng-zorro-antd/icon';

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];
@NgModule({
  providers: [{
    provide: NZ_ICONS, useValue: icons
  }]
})
export class IconsProviderModule { }
