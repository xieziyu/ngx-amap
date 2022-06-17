import { NgModule } from '@angular/core';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzRadioModule } from 'ng-zorro-antd/radio';
/**
 * @description
 * ng-zorro公共共享模块，
 */
@NgModule({
  exports: [
    NzGridModule,
    NzFormModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule,
    NzDividerModule,
    NzBreadCrumbModule,
    NzTabsModule,
    NzPageHeaderModule,
    NzAlertModule,
    NzMenuModule,
    NzLayoutModule,
    NzRadioModule
  ]
})
export class NgZorroPublicModule { }
