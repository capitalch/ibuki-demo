import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IbukiModule } from 'ibuki';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , IbukiModule
    // , HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
