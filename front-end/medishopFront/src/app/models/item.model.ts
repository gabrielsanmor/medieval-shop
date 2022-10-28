import { Categoria } from "./categoria.model";

export interface Item{
  id?:number;
  nome?:string;
  descricao?:string;
  preco?:number;
  quantidade?:number;
  imagem_url?:string;
  categoria?:Categoria;
}
