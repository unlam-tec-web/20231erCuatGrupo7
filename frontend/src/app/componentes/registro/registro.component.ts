import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registro: FormGroup;
  registroSubmitted=false;

  constructor( private formBuilder: FormBuilder,protected router:Router){
    this.registro= this.formBuilder.group({
      nombre:["",[Validators.required]],
      apellido:["",[Validators.required]],
      direccion: ["",[Validators.required]],
      email: ["",
        [Validators.required,
        Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)
        ]],
      password: ["",[Validators.required,Validators.minLength(8)]],
    });
  }

  get fm(){
    return this.registro.controls;
  }
  registrar() {
    this.registroSubmitted=true;
    if(!this.registro.valid){
      return;
    }
    console.log("Registro exitoso");
    console.log(this.registro.value);
  }

ngOnInit(): void {
    throw new Error('Method not implemented. ');
}


}


