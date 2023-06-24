import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url='/api/productos';
  constructor(private http:HttpClient) { }

  //get productos
  getProductos(){
    return this.http.get(this.url);
  }
  //get un producto
  getUnProducto(id:string){
    return this.http.get(this.url+'/'+id);
  }
  //agregar un producto
  agregarProducto(producto:any){
    return this.http.post(this.url,producto);
  }
  //eliminar un producto
  eliminarProducto(id:string){
    return this.http.delete(this.url+'/'+id);
  }
  //modificar un producto
  modificarProducto(id:string,producto:any){
    return this.http.patch(this.url+'/'+id,producto);
  }

}

export interface Producto{
  id?:number;
  nombre?:string;
  descripcion?:string;
  clasificacion?:string;
  precio?:number;
}
