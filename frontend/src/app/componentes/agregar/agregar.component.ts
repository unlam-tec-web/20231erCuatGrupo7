import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ProductoService,Producto} from '../../services/producto.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  crearProducto: FormGroup;
  formularioSubmitted=false;

  constructor( private formBuilder: FormBuilder,protected router:Router,private productoService:ProductoService){
    this.crearProducto= this.formBuilder.group({
      nombre:["",[Validators.required]],
      descripcion:["",[Validators.required]],
      clasificacion: ["",[
        Validators.required,
        Validators.pattern(/(\W|^)(Comic|Libro|Manga|comic|libro|manga)(\W|$)/)]],
      precio: ["",[Validators.required]],
      imagen: ["",[
        Validators.required,
      Validators.pattern(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)]],
    });
  }

  get fm(){
    return this.crearProducto.controls;
  }
  crearUnProducto() {
    this.formularioSubmitted=true;
    if(!this.crearProducto.valid){
      return;
    }
    this.productoService.agregarProducto(this.crearProducto.value).subscribe();
    this.router.navigate(['/Inicio'])
  }


}
