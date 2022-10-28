import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../models/item.model";

@Component({
  selector: 'app-card-produtos',
  templateUrl: './card-produtos.component.html',
  styleUrls: ['./card-produtos.component.css']
})
export class CardProdutosComponent implements OnInit {
  @Input() item: Item ;

  constructor() { }

  ngOnInit(): void {
  }

}
