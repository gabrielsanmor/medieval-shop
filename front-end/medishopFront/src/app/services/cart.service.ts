import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cartItem.model';

const baseUrl = 'http://localhost:8000/api/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  get(userId:number):Observable<Cart>{
    return this.http.get<Cart>(`${baseUrl}/${userId}`)
  }

  addItem(cartItem:CartItem,userId:number):Observable<Cart>{
    return this.http.put<Cart>(`${baseUrl}/${userId}`,cartItem)
  }

}
