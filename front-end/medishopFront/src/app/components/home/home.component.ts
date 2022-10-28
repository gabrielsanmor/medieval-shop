import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../services/item.service";
import {Item} from "../../models/item.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public items: Item[] = [];

  constructor(
    private service: ItemService
  ) { }

  ngOnInit(): void {

    this.service.getAll().subscribe({
      next: (data)=>{
        this.items=data
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

}
