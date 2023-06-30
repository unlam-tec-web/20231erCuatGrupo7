import { Component } from '@angular/core';
import {Producto, ProductoService} from '../../services/producto.service';
import {CarritoService} from '../../services/carrito.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  
  ListarProductoLibro:Producto[];

  constructor(private ProductoService:ProductoService,private carritoService:CarritoService ){}

  ngOnInit(): void {
   this.listarProductosLibro();
  }

  listarProductosLibro()
  {
    this.ProductoService.getProductosLibro().subscribe(
      res =>{
        this.ListarProductoLibro=<any>res;
      },
      err=>console.log(err)
    );
  }

  agregarAlCarrito(producto:Producto){
  this.carritoService.agregarAlCarrito(producto);
  }

  crearProducto() {
    this.ProductoService.agregarProducto
    }
}