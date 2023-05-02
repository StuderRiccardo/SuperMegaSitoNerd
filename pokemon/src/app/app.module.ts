import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SceptileComponent } from './sceptile/sceptile.component';
import { ArceusComponent } from './arceus/arceus.component';

@NgModule({
  declarations: [
    AppComponent,
    SceptileComponent,
    ArceusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
