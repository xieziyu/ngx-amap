import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { LayoutModule } from './layout/layout.module';
import { NgxAmapModule } from 'ngx-amap';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';

import { NgZorroPublicModule } from './shared/ng-zorro-public.module';
import { IconsProviderModule } from './shared/icons-provider.module';

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgZorroPublicModule,
    IconsProviderModule,
    MarkdownModule.forRoot(),
    NgxAmapModule.forRoot({
      apiKey: '146f101e824accd6956eeec4937c1a05',
      debug: true,
      debugTags: '*',
    }),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
})
export class AppModule { }
