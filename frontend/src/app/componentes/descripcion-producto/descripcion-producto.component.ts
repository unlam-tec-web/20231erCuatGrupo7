import { Component, OnInit } from '@angular/core';
import '../comics/comics.component';
import{Router,ActivatedRoute,Params}from '@angular/router';
import {Producto, ProductoService} from '../../services/producto.service';

@Component({
  selector: 'app-descripcion-producto',
  templateUrl: './descripcion-producto.component.html',
  styleUrls: ['./descripcion-producto.component.css']
})
export class DescripcionProductoComponent implements OnInit {
  //getUnProducto:Producto;
  producto:{id_prod:string};

  constructor(private ProductoService:ProductoService,
    private router:Router,
    private activateRoute:ActivatedRoute
    ){}

  ngOnInit(): void {
    this.producto = {
      id_prod:this.activateRoute.snapshot.params['producto']
    };
    console.log(this.producto)
  }
/*
  verDescripcionProd(){
    this.ProductoService.getUnProducto(this.getUnProducto.id_prod).subscribe(
      res =>{
        console.log(res);
        this.getUnProducto=<any>res;
      },
      err=>console.log(err)
    );
  }
*/
}

