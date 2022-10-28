import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderModule} from "./styles/header/header.module";
import { HomeComponent } from './components/home/home.component';
import {SharedModule} from "./shared/shared.module";
import {CardProdutosModule} from "./shared/card-produtos/card-produtos.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HeaderModule,
    SharedModule,
    CardProdutosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
