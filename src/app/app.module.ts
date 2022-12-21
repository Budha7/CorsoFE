// Import dell'NgModule altrimenti non funziona la get del valore selezionato
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Da importare altrimenti non accetta il valore selezionato nella select element html
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import del component Seleziona 
import { Seleziona } from './seleziona/seleziona.component';
import { RestCountriesComponent } from './rest-countries/rest-countries.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Seleziona,
    RestCountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
