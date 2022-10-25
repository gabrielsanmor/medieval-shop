import { Item } from "./item.model";

export interface CartItem{
  id?:number;
  item?:Item;
  quantidade?:number;
  cart?:number;
}
