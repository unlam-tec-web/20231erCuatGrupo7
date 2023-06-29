import { Component, OnInit } from '@angular/core';
import '../comics/comics.component';
import{Router,ActivatedRoute,Params}from '@angular/router';
import {Producto, ProductoService} from '../../services/producto.service';
import {CarritoService} from '../../services/carrito.service';

@Component({
  selector: 'app-descripcion-producto',
  templateUrl: './descripcion-producto.component.html',
  styleUrls: ['./descripcion-producto.component.css']
})
export class DescripcionProductoComponent implements OnInit {

  productoDevuelto: Producto;

  constructor(private ProductoService:ProductoService,private carritoService:CarritoService,
    private _router:Router,
    private activateRoute:ActivatedRoute
    ){}

  ngOnInit(): void {
    let id=this.activateRoute.snapshot.params['id']
    this.verDescripcionProd(id);
  }

  verDescripcionProd(id:number){
    this.ProductoService.getUnProducto(id).subscribe(
      res =>{
        this.productoDevuelto=<any>res;
      },
      err=>console.log(err)
    );
  }
  agregarAlCarrito(producto:Producto){
    this.carritoService.agregarAlCarrito(producto);
  }

}

