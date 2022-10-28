import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PainelComponent} from "./painel.component";
import {PainelRouting} from "./painel.component.routing";
import {HeaderModule} from "../../styles/header/header.module";
import {HeaderComponent} from "../../styles/header/header.component";



@NgModule({
  declarations: [
    PainelComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    PainelRouting
  ]
})
export class PainelModule { }
