import { Component, OnInit } from '@angular/core';
import {Producto, ProductoService} from '../../services/producto.service';
import {CarritoService} from '../../services/carrito.service';
import { Observable } from 'rxjs';
import {CarritoItem} from '../../services/carritoItem';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  ListarCarrito:Producto[];

  constructor(private carritoService:CarritoService){}

  productosEnCarrito: CarritoItem[]=[];
  precioTotal: number = 0;
  cantidadTotal: number = 0;
  productosEnCarrito$!: Observable<Producto[]>;
  alerta: string ='';

  ngOnInit(): void {
    this.listarCarrito();
  }

  listarCarrito(){
    this.carritoService.productosEnCarrito$.subscribe(
      productos=> {
        if(productos){
          this.precioTotal = productos.reduce((sum, current) => sum + (current.producto.precio * current.cantidad), 0);
          this.productosEnCarrito= productos;
          this.cantidadTotal = productos.length;
        }
      })
  }
  borrarProductoDelCarrito(producto:CarritoItem){
    this.carritoService.borrarProductoDelCarrito(producto);
    
  }
  pagar(){
    this.carritoService.pagar();
  }
}
