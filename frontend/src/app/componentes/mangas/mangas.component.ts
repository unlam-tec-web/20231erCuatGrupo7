import { Component } from '@angular/core';
import {Producto, ProductoService} from '../../services/producto.service';
import {CarritoService} from '../../services/carrito.service';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.css']
})
export class MangasComponent {

  ListarProductoManga:Producto[];

  constructor(private ProductoService:ProductoService,private carritoService:CarritoService ){}

  ngOnInit(): void {
   this.listarProductosManga();
  }

  listarProductosManga()
  {
    this.ProductoService.getProductosManga().subscribe(
      res =>{
        this.ListarProductoManga=<any>res;
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