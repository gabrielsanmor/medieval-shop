import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

const baseUrl = 'http://localhost:8000/api/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(baseUrl)
  }
}
