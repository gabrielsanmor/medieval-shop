import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardProdutosComponent} from "./card-produtos.component";



@NgModule({
  declarations: [CardProdutosComponent],
  exports: [
    CardProdutosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardProdutosModule { }
