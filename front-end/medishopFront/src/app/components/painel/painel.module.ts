import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PainelComponent} from "./painel.component";
import {PainelRouting} from "./painel.component.routing";



@NgModule({
  declarations: [
    PainelComponent
  ],
  imports: [
    CommonModule,
    PainelRouting
  ]
})
export class PainelModule { }
