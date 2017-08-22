import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CodeblockModule } from 'ng-prism';
import { TabsModule } from 'ngx-bootstrap';
import { NgxAmapModule } from 'ngx-amap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CodeblockModule,
    TabsModule.forRoot(),
    NgxAmapModule.forRoot({
      apiKey: '99df1ad748ae2a56d152b7764e35cf76',
      apiVersion: '1.3'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
