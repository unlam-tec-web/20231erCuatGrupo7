import { Component, OnInit } from '@angular/core';
import '../comics/comics.component';
import{Router,ActivatedRoute}from '@angular/router';
import {Producto, ProductoService} from '../../services/producto.service';

@Component({
  selector: 'app-descripcion-producto',
  templateUrl: './descripcion-producto.component.html',
  styleUrls: ['./descripcion-producto.component.css']
})
export class DescripcionProductoComponent implements OnInit {
  getUnProducto:Producto;

  constructor(private ProductoService:ProductoService,
    private router:Router,
    private activateRoute:ActivatedRoute
    ){}

  ngOnInit(): void {
    const id_entrante=this.activateRoute.snapshot.params['id'];
    //this.verDescripcionProd();
    console.log('id:'+id_entrante);
  }

  verDescripcionProd(){
    this.ProductoService.getUnProducto(this.getUnProducto.id_prod).subscribe(
      res =>{
        console.log(res);
        //this.getProducto=<any>res;
      },
      err=>console.log(err)
    );
  }

}
