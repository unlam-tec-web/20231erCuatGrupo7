import { Injectable } from '@angular/core';
import {Producto, ProductoService} from './producto.service';
import {CarritoItem}from './carritoItem';
import { BehaviorSubject } from 'rxjs';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(){
    var productosEnCache = localStorage.getItem('carrito');
    var carritoItem: CarritoItem[]=productosEnCache ? JSON.parse(productosEnCache) : [];
    this.cart.next(carritoItem);
  }

  private cart = new BehaviorSubject<CarritoItem[]>([]); 
  public productosEnCarrito$ = this.cart.asObservable();
  public alerta = '';

  agregarAlCarrito(producto:Producto) {
    let productosEnCarrito=this.cart.getValue();
    if(productosEnCarrito.length!=0){
        let productoIndex= productosEnCarrito.findIndex((index) =>index.producto.id==producto.id)
        if (productoIndex != -1) 
        productosEnCarrito[productoIndex].cantidad += 1;
      else {
        var newItem: CarritoItem = { producto:producto, cantidad: 1 };
        productosEnCarrito.push(newItem);
      }
      } else{
        productosEnCarrito = [];
        var newItem: CarritoItem = { producto: producto, cantidad: 1 };
        productosEnCarrito.push(newItem);
      }
    this.cart.next(productosEnCarrito);
    localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));
    swal.fire('Producto agregado al carrito' ,this.alerta, 'success');
  }

  borrarProductoDelCarrito(producto:CarritoItem) {
    let productosEnCarrito=this.cart.getValue();
    let productoIndex=productosEnCarrito.findIndex((index)=> index.producto.id==producto.producto.id);
    swal.fire({
      title: '¿Estas seguro?',
      text: "No se va a poder revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        if(productoIndex!=-1){
          if(productosEnCarrito[productoIndex].cantidad!=1){
            productosEnCarrito[productoIndex].cantidad-=1;
          }
          else{
            productosEnCarrito.splice(productoIndex,1);
          }
          }
          else {
            productosEnCarrito.splice(productoIndex,1);
          }
      this.cart.next(productosEnCarrito);
      localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));
        swal.fire(
          'Producto eliminado!',
          'Tu producto ha sido eliminado del carrito.',
          'success'
        )
      }
    })
  }

  pagar(){
    if(this.cart.getValue().length > 0){
      swal.fire({
        title: '¿Confirma su compra?',
        icon: 'question',
        showCancelButton: false,
        confirmButtonColor: '#ffc107',
        confirmButtonText: 'Confirmar!'
      }).then((result) => {
        if (result.isConfirmed) {
          swal.fire({
            icon: 'success',
            title: 'Compra exitosa',
            showConfirmButton: false,
          })
          this.realizarCompra();
          }
      })
    }
  }

  realizarCompra(){
    var compra=JSON.parse(localStorage.getItem('carrito'));
    localStorage.setItem('compra', JSON.stringify(compra));
    console.log(JSON.parse(localStorage.getItem('compra')));
    localStorage.removeItem('carrito');
    setTimeout(function(){
      window.location.reload();
    }, 800);
  }
}
