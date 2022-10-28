import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuario:Usuario = {} as Usuario

  constructor() { }

  isLogged():boolean{
    return this.usuario !== {} as Usuario;
  }

  login(usuario:Usuario):boolean{
    if(this.isLogged())
      return false
    else{
      this.usuario=usuario
      return true
    }
  }

  logout():boolean{
    if(this.isLogged())
      return false
    else{
      this.usuario={} as Usuario
      return true
    }
  }

  getUsuario():Usuario{
    return this.getUsuario()
  }
}
