
//import { OperasBasComponent } from './utl/formularios/operas-bas/operas-bas.component'; como tiene su propio modulo no es necesario ponerlo aqui

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { idgsComponent } from './utl/idgs.component';
import { ievnComponent } from './utl/ievn.component';
import { Ievn2Component } from './utl/ievn2/ievn2.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { OperasBasComponent } from './utl/formularios/operas-bas/operas-bas.component';
import { OperasModule } from './utl/formularios/operas/operas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    idgsComponent,
    ievnComponent,
    Ievn2Component,
    SumaComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }