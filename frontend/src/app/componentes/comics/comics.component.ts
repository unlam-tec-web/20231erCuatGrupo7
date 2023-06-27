import {Component, OnInit, forwardRef} from '@angular/core';
import {Producto, ProductoService} from '../../services/producto.service';
import {CarritoService} from '../../services/carrito.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {



  ListarProducto:Producto[];

  constructor(private ProductoService:ProductoService,private carritoService:CarritoService ){}

  ngOnInit(): void {
   this.listarProductos();
  }

  listarProductos()
  {
    this.ProductoService.getProductos().subscribe(
      res =>{
        this.ListarProducto=<any>res;
      },
      err=>console.log(err)
    );
  }

  agregarAlCarrito(producto:Producto){
  this.carritoService.agregarAlCarrito(producto);
  }
}