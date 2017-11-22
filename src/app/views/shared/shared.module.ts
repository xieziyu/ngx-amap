import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MarkdownModule } from 'ngx-markdown';
import { NgxAmapModule } from 'ngx-amap';

@NgModule({
  imports: [
    CommonModule,
    NgxAmapModule.forRoot({
      apiKey: '146f101e824accd6956eeec4937c1a05',
      urlPath: 'https://webapi.amap.com/maps',
      debug: false
    }),
    TabsModule.forRoot(),
    MarkdownModule.forRoot()
  ],
  exports: [
    NgxAmapModule,
    TabsModule,
    MarkdownModule
  ],
  declarations: []
})
export class SharedModule { }
