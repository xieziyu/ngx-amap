import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MarkdownModule } from 'ngx-markdown';
import { NgxAmapModule } from 'ngx-amap';

@NgModule({
  imports: [CommonModule, NgxAmapModule, TabsModule, MarkdownModule],
  exports: [NgxAmapModule, TabsModule, MarkdownModule],
  declarations: [],
})
export class SharedModule {}
