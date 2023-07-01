import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ComicsComponent } from './componentes/comics/comics.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { LibrosComponent } from './componentes/libros/libros.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { DescripcionProductoComponent } from './componentes/descripcion-producto/descripcion-producto.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { MangasComponent } from './componentes/mangas/mangas.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { SigninComponent } from './componentes/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ComicsComponent,
    NavBarComponent,
    LibrosComponent,
    CarritoComponent,
    DescripcionProductoComponent,
    LoginComponent,
    RegistroComponent,
    FooterComponent,
    AgregarComponent,
    MangasComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
