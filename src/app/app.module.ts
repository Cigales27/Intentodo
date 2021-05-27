import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InfoComponent } from './pages/info/info.component';
import { ErrorComponent } from './pages/error/error.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule} from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ContactoComponent,
    InfoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
