import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { idgsComponent } from './utl/idgs.component';
import { ievnComponent } from './utl/ievn.component';
import { Ievn2Component } from './utl/ievn2/ievn2.component';

@NgModule({
  declarations: [
    AppComponent,
    idgsComponent,
    ievnComponent,
    Ievn2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
