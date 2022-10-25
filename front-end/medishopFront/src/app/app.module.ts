import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemMenuComponent } from './components/item-menu/item-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderModule} from "./styles/header/header.module";

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ItemMenuComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        HeaderModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
