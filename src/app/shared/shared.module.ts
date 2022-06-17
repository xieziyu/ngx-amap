import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';
import { CodeBlockComponent } from './code-block/code-block.component';
import { NgZorroPublicModule } from './ng-zorro-public.module';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [CodeBlockComponent],
  imports: [
    CommonModule,
    NgZorroPublicModule,
    MarkdownModule.forChild()
  ],
  exports: [
    NgZorroPublicModule,
    MarkdownModule,
    CodeBlockComponent
  ],
})
export class SharedModule { }
