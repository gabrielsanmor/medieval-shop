import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {

  itens?:Item[]

  constructor(
    private itemService:ItemService,
    private route:ActivatedRoute
  ){ }

  ngOnInit(): void {
    const categoria = String(this.route.snapshot.paramMap.get('categoria'))
    if(categoria!="null")
      this.getItemCategoria(categoria)
    else
      this.getAllItems()
    console.log(categoria)
  }

  getAllItems(): void{
    this.itemService.getAll().subscribe(
      {
        next: (data) => {
          this.itens = data
        },
        error: (e) => console.error(e)
      }
    )
  }

  getItemCategoria(categoria:string):void{
    this.itemService.getByCategoria(categoria).subscribe(
      {
        next: (data) => {
          this.itens = data
        },
        error: (e) => console.error(e)
      }
    )
  }

}
