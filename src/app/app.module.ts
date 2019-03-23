import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PppComponent } from './ppp/ppp.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    PppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
