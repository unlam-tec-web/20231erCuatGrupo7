import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  login: FormGroup;
  loginSubmitted=false;

  constructor( private formBuilder: FormBuilder,protected router:Router){
    this.login= this.formBuilder.group({
      email: ["",
        [Validators.required,
        Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)
        ]],
      password: ["",[Validators.required,Validators.minLength(8)]],
    });
  }

  get fm(){
    return this.login.controls;
  }

  iniciarSesion() {
    this.loginSubmitted=true;
    if(!this.login.valid){
      return;
    }
    console.log("Login exitoso");
    console.log(this.login.value);
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
