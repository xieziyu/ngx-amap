import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { CodeblockModule } from 'ng-prism';
import { TabsModule } from 'ngx-bootstrap';
import { NgxAmapModule } from 'ngx-amap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './demos/demo-1/demo-1.component';
import { Demo2Component } from './demos/demo-2/demo-2.component';
import { Demo3Component } from './demos/demo-3/demo-3.component';
import { Demo4Component } from './demos/demo-4/demo-4.component';
import { Demo5Component } from './demos/demo-5/demo-5.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CodeblockModule,
    TabsModule.forRoot(),
    AppRoutingModule,
    NgxAmapModule.forRoot({
      apiKey: 'YOUR KEY',
      apiVersion: '1.3'
    })
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
