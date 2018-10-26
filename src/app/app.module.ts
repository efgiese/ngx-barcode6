import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxBarcode6Module } from 'projects/ngx-barcode6/src/lib/ngx-barcode6/ngx-barcode6.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxBarcode6Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
