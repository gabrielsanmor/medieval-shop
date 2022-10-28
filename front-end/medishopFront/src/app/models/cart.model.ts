import { CartItem } from "./cartItem.model";
import { Usuario } from "./usuario.model";

export interface Cart{
  id?:number;
  criado_em?:Date;
  user?:Usuario;
  itens_cart?:CartItem[];
}
