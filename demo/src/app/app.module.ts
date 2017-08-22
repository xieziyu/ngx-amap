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
      apiKey: 'YOUR KEY',
      apiVersion: '1.3'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
