import {Component, OnInit, forwardRef} from '@angular/core';
import {Producto, ProductoService} from '../../services/producto.service';
import {CarritoService} from '../../services/carrito.service';
import {AgregarComponent} from '../agregar/agregar.component';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  ListarProductoComic:Producto[];

  constructor(private ProductoService:ProductoService,private carritoService:CarritoService ){}

  ngOnInit(): void {
   this.listarProductosComic();
  }

  listarProductosComic()
  {
    this.ProductoService.getProductosComic().subscribe(
      res =>{
        this.ListarProductoComic=<any>res;
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