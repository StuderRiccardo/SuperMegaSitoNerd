import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SceptileComponent } from './sceptile/sceptile.component';
import { ArceusComponent } from './arceus/arceus.component';
import {  HttpClientModule } from '@angular/common/http';
import { UmbreonComponent } from './umbreon/umbreon.component';
import { GengarComponent } from './gengar/gengar.component';
import { GreninjaComponent } from './greninja/greninja.component';

@NgModule({
  declarations: [
    AppComponent,
    SceptileComponent,
    ArceusComponent,
    UmbreonComponent,
    GengarComponent,
    GreninjaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
