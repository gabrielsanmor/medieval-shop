import { Component, OnInit,Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  faCartShopping = faCartShopping
  @Input() item?:Item

  constructor() { }

  ngOnInit(): void {}

}
