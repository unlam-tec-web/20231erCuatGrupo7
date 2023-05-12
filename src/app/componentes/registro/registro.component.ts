import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

nombre:String
apellido:String
direccion:String
email:String
contrasena:String




registrarUsuario(){
  console.log('nombre:' + this.nombre,
  'apellido: ' + this.apellido,
  'direccion:' + this.direccion,
  'email: ' + this.email,
  'contrasena' + this.contrasena);

}




ngOnInit(): void {
  throw new Error('Method not implemented.');
}



  /*emailValidator  = new RegExp(/[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  constructor(private fb:FormBuilder) {
  }*/

/*
registroForm = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    emailRegistro:['',[Validators.required,Validators.pattern(this.emailValidator)]],
    passwordRegistro:['',[Validators.required]],
  });


  resetarFormulario(){
    this.registroForm.clearValidators()
    this.registroForm.reset();
  }

*/


}


