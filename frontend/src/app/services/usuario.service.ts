import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url='/api/usuarios';
  constructor(private http:HttpClient) { }

  //get usuarios
  getUsuarios(){
    return this.http.get(this.url);
  }
  //get un usuario
  getUnUsuario(id:number){
    return this.http.get(this.url+'/'+id);
  }
  //agregar un usuario
  agregarUsuario(usuario:any){
    return this.http.post(this.url,usuario);
  }
}

export interface Usuario{
  id?:number;
  nombre?:string;
  apellido?:string;
  direccion?:string;
  email?:string;
  password?:string;
}