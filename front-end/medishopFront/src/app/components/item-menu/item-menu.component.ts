import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {

  itens?:Item[]

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.getItems()
  }

  getItems(): void{
    this.itemService.getAll().subscribe(
      {
        next: (data) => {
          this.itens = data
        },
        error: (e) => console.error(e)
      }
    )
  }

}
