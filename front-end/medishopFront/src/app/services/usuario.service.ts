import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

const baseUrl = 'http://localhost:8000/api/itens';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  get(id:number):Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${baseUrl}/${id}`);
  }

  create(user:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${baseUrl}/add`,user);
  }

  login(user:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(baseUrl,user);
  }

}
