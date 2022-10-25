import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

const baseUrl = 'http://localhost:8000/api/itens';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Item[]>{
    return this.http.get<Item[]>(baseUrl)
  }

  get(id:number):Observable<Item>{
    return this.http.get<Item>(`${baseUrl}/{$id}`)
  }

  getByCategoria(categoria:string):Observable<Item[]>{
    return this.http.get<Item[]>(`${baseUrl}/${categoria}`)
  }
}
