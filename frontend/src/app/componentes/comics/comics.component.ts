import {Component, OnInit, forwardRef} from '@angular/core';
import {Producto, ProductoService} from '../../services/producto.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {



  ListarProducto:Producto[];

  constructor(private ProductoService:ProductoService ){}

  ngOnInit(): void {
   this.listarProductos();
  }

  listarProductos()
  {
    this.ProductoService.getProductos().subscribe(
      res =>{
        console.log(res);
        this.ListarProducto=<any>res;
      },
      err=>console.log(err)
    );
  }
}